import { reduxForm } from 'redux-form';
import ChangePwdForm from '../components/ChangePwdForm.js';
import strings from '../utils/locale.js'; 

if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);
    
    
//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
   if(!values.currentpwd || values.currentpwd.trim() === '') {
    errors.currentpwd = strings.entercpwd;
    hasErrors = true;
  }
  if(!values.newpwd || values.newpwd.trim() === ''){
    errors.newpwd = strings.enternpwd;
  }
  if(!values.confirmnewpwd || values.confirmnewpwd.trim() === '') {
    errors.confirmnewpwd = strings.entercnpwd;
    hasErrors = true;
  }
  if(values.confirmnewpwd  && values.confirmnewpwd.trim() !== '' && values.newpwd  && values.newpwd.trim() !== '' && values.newpwd !== values.confirmnewpwd) {
    errors.newpwd = strings.passnomatch;
    hasErrors = true;
  }
  return hasErrors && errors;
} 

const validateAndChange = (values,dispatch) =>{

}

const mapDispatchToProps = (dispatch)=> {
  return {
    changepassword: validateAndChange
  };
};


export default reduxForm({
  form: 'ChangePwdForm', 
  fields: ['currentpwd','newpwd','confirmnewpwd'],
  validate 
}, null, mapDispatchToProps)(ChangePwdForm);
    

 