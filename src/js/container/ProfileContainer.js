import ProfileForm from '../components/ProfileForm.js';
import { reduxForm } from 'redux-form';
import strings from '../utils/locale.js';

  if(localStorage.language === undefined )
    strings.setLanguage('en');   
  else 
    strings.setLanguage(localStorage.language);
    
function validate(values){
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
   return hasErrors && errors;
}

const updateProfileAndSend = (values, dispatch)=>{
  console.log(values);
  debugger;
}

const mapDispatchToProps = (dispatch)=>{
  return {
    updateProfile :updateProfileAndSend
  }
}

function mapStateToProps(state){
    let user = state.user.user ;
   return  {
        user:state.user,
        initialValues:{ 
          firstname : user.FirstName,
          lastname : user.LastName,
          address : user.address,
          email : user.Email,
          phnnumbr : user.sex, 
          profileimage : user.profileimage,
          dob:user.dob 
        }
     };
}

export default reduxForm({
 form: 'ProfileForm',
 fields:['firstname','lastname','address','email','phnnumbr','sex','profileimage','dob'],
 validate   
},mapStateToProps,mapDispatchToProps)(ProfileForm);