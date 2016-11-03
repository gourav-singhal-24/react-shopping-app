import { reduxForm } from 'redux-form';
import OTPLoginForm from '../components/OTPLoginForm.js';
import strings from '../utils/locale.js';
import { signInUserOTP, signInUserOTPSuccess, signInUserOTPFailure } from '../actions/users.js';

if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);
    
    
//Client side validation
function validate(values) {
 
  var errors = {};
  var hasErrors = false;
  if (!values.otp || values.otp.trim() === '') {
    errors.otp = strings.enterotp;
    hasErrors = true;
  }
  if(!values.password || values.password.trim() === '') {
    errors.password = strings.enterp;
    hasErrors = true;
  }
  if(!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = strings.entercp;
    hasErrors = true;
  }

  if(values.confirmPassword  && values.confirmPassword.trim() !== '' && values.password  && values.password.trim() !== '' && values.password !== values.confirmPassword) {
    errors.password = strings.passnomatch;
    hasErrors = true;
  }
  
  return hasErrors && errors;
} 

function getQueryString ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
 }

const validateandsend = (values, dispatch) =>{
 var data = {};
 data.Email = getQueryString('Email');
 data.OTP = values.otp ; 
 data.Password = values.password ; 
 return new Promise((resolve, reject) => {  
    dispatch(signInUserOTP(data))
    .then((response)=>{
      if(response.payload.data.Status ===400 || response.payload.data.Status === 401 || response.payload.data.Status === 404 || response.payload.data.Status === 407 || response.payload.data.Status === 500 ){
         dispatch(signInUserOTPFailure(response.payload.data));
         reject({ otp:response.payload.data.Message })
       } 
       else{
            dispatch(signInUserOTPSuccess());
            resolve();
       }
    });
  });
}

function mapStateToProps( state, ownProps ){
  return{
    user : state.user
  };
}

const mapDispatchToProps = (dispatch) =>{
 return  {
   sendnewpwd : validateandsend 
  };
}

export default reduxForm({
  form: 'OTPLogin', 
  fields: ['otp','password','confirmPassword'], 
  validate 
}, mapStateToProps, mapDispatchToProps )(OTPLoginForm);
