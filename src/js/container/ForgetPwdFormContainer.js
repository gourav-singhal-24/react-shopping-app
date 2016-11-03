import { reduxForm } from 'redux-form';
import ForgetPwdForm from '../components/ForgetPwdForm.js';
import { validateFields,validateFieldsFailure,validateFieldsSuccess, resetValidateFields } from '../actions/validateFields.js';
import { sendEmail ,sendEmailFailure ,sendEmailSuccess } from '../actions/sendEmail.js';
import strings from '../utils/locale.js';
import { browserHistory } from 'react-router';

if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);
 
    
    
//Client side validation
function validate(values) {
 
  var errors = {};
  var hasErrors = false;
  if (!values.email || values.email.trim() === '') {
    errors.email = strings.enterpmail;
    hasErrors = true;
  }
  return hasErrors && errors;
} 

const sendOTPToEmail = (values,dispatch) =>{
  
  var formData = {} ;
  formData.Email = values.email;
  // browserHistory.push(`/otppwdset/${values.email}`);
  return new Promise((resolve, reject) => {
  dispatch(sendEmail(formData))
  .then((response) => {
        let responseData = response.payload.data;
        if(response.payload.data.Status != 200) {
           
           dispatch(sendEmailFailure(responseData));
           reject({ email : responseData.Message }); //this is for redux-form itself
         } else {
           dispatch(sendEmailSuccess()); 
          resolve();//this is for redux-form itself
        }
      }); 
 });
};

const mapDispatchToProps = (dispatch) => {
  return{
    getEmailAndRedirect: sendOTPToEmail
  };
};

function mapStateToProps(state){
  return {
    sendEmail : state.sendEmail
  }
}
export default reduxForm({
  form: 'ForgetPwdForm', 
  fields: ['email'],  
  validate 
}, mapStateToProps, mapDispatchToProps )(ForgetPwdForm);
