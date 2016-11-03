import RegisterForm from '../components/RegisterForm.js'
import { validateFields,validateFieldsFailure,validateFieldsSuccess, resetValidateFields } from '../actions/validateFields.js';
import { registerUser, registerUserSuccess, registerUserFailure } from '../actions/users.js'; 
import { reduxForm, SubmissionError } from 'redux-form';
import strings from '../utils/locale.js';
import { ADMIN , USER } from '../utils/role.js';

  if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);

const asyncValidate = (values, dispatch) => {
  
  return new Promise((resolve, reject) => {
    dispatch(validateFields(values))
    .then((response) => {
       
       if(response.payload.data.Status === 200) {
           dispatch(validateFieldsFailure(response.payload));
           reject( { email:strings.userexist});
          
       } else {
         dispatch(validateFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_USER_FIELDS
          resolve();//this is for redux-form itself
        }
      });
  });
};

    
function validate(values) {
  var errors = {};
  var hasErrors = false;
  
  if (!values.firstname || values.firstname.trim() === '') {
    errors.firstname = strings.enterfname;
    hasErrors = true;
  }
  if (!values.lastname || values.lastname.trim() === '') {
    errors.lastname = strings.enterlname;
    hasErrors = true;
  }
  if(!values.email || values.email.trim() === '') {
    errors.email = strings.enteremail;
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

const validateAndSignUpUser = (values, dispatch) => {
  var userData = {
    FirstName:values.firstname,
    LastName: values.lastname,
    Email: values.email, 
    Password: values.password, 
    Gender:values.sex,
     Role:USER 
    };
  return new Promise((resolve, reject) =>{
   dispatch(registerUser(userData))
  .then((response) => {
   let data = response.payload.data;
   console.log(response);
     if(response.payload.status !== 200){
      dispatch(registerUserFailure(response));
      reject(data);
    }
    else{
      dispatch(registerUserSuccess(response));
      resolve();
    }
  });
});
};
 
const mapDispatchToProps = (dispatch) => {
  return {
  	signUpUser: validateAndSignUpUser,
  	resetMe: () =>{
     dispatch(resetValidateFields());
    }
    };
};

function mapStateToProps(state, ownProps) {
  return { 
    data : state.user
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'RegisterForm', 
  fields: ['firstname', 'lastname', 'email', 'sex', 'password', 'confirmPassword'],
  asyncValidate,
  asyncBlurFields: [ 'email'], 
  validate 
}, mapStateToProps, mapDispatchToProps)(RegisterForm);