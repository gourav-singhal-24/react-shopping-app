import { reduxForm } from 'redux-form';
import strings from '../utils/locale.js';
import VerifyOTPForm from '../components/VerifyOTPForm.js'
import { validateUserOTP, validateUserOTPUserSuccess, validateUserOTPFailure } from '../actions/users.js';
import { resendOTP, resendOTPFailure, resendOTPSuccess } from '../actions/resendOTP.js';

if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);
    
    
function validate(values){
   var errors = {};
   var hasErrors = false;
   if (!values.OTP || values.OTP.trim() === '') {
    errors.OTP = strings.enterotp;
    hasErrors = true;
  }
   return hasErrors && errors; 
}    
const validateOTPAndSignin = (values,dispatch)=>{
   let data = {
    Email: getQueryString('Email'),
    OTP : values.OTP
  } ; 
  return new Promise((resolve, reject) => {  
    dispatch(validateUserOTP(data))
    .then((response)=>{
      if(response.payload.data.Status ===400 || response.payload.data.Status === 401 || response.payload.data.Status === 404 || response.payload.data.Status === 407 || response.payload.data.Status === 500 ){
         dispatch(validateUserOTPFailure(response.payload));
         reject({ OTP:response.payload.data.Message })
       } 
       else{
         dispatch(validateUserOTPUserSuccess());
         resolve();
       }
    });
  });
}


function getQueryString ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
 }
 
 
const mapDispatchToProps = (dispatch)=>{
  return {
    validateOTP : validateOTPAndSignin,
    resend : ()=>{
            let data = {};
            data.Email = getQueryString('Email');
            return new Promise((resolve, reject) => {
                  dispatch(resendOTP(data))
                  .then((response) => {
              if(response.payload.data.Status ===400 || response.payload.data.Status === 401 || response.payload.data.Status === 404 || response.payload.data.Status === 407 || response.payload.data.Status === 500 ){
                    dispatch(resendOTPFailure(response.payload));
                    reject({ OTP :response.paylaod.data.Message });
                }
              else{
                    dispatch(resendOTPSuccess(response.payload.data.Message));
                    resolve();
                }     
                            
         });
      });
    }
   };
};
function mapStateToProps(state,ownProps){
  return { 
         userEmail : getQueryString('Email'),
         user : state.user,
         resendotp :state.resendotp   
         };
}

export default reduxForm({
  form: 'VerifyOTPForm', 
  fields: [ 'OTP'], 
  validate 
}, mapStateToProps, mapDispatchToProps)(VerifyOTPForm);