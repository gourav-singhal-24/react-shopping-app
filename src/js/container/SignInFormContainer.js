import SignInForm from '../components/SignInForm.js';
import { reduxForm } from 'redux-form';
import strings from '../utils/locale.js';
import { signInUser, signInUserFailure, signInUserSuccess } from '../actions/users.js';

if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);
    

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.Email || values.Email.trim() === '') {
    errors.Email = strings.enterfullname;
    hasErrors = true;
  }
  if(!values.Password || values.Password.trim() === '') {
    errors.Password = strings.enterp;
    hasErrors = true;
  }
   return hasErrors && errors;
} 

const validateAndSignIn = (values, dispatch)=>{
  return new Promise((resolve, reject) => {
   dispatch(signInUser(values))
  .then((response) => {
        let data = response.payload.data;
        if(response.payload.data.Status != 200) {
           dispatch(signInUserFailure(data));
           reject({ Email : data.Message }); //this is for redux-form itself
         } else {
           
           localStorage.setItem('jwtToken', response.payload.data.Data.Token);
           dispatch(signInUserSuccess(response.payload.data.Data)); 
          resolve();//this is for redux-form itself
        }
      }); 
 });
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signIn:validateAndSignIn
};
};

function mapStateToProps(state,ownProps){
  return { 
    user:state.user };
}

export default reduxForm({
  form: 'SignInForm', 
  fields: ['Email', 'Password'], 
  validate 
}, mapStateToProps, mapDispatchToProps)(SignInForm);

