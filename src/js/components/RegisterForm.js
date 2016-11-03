import React ,{ Component , PropTypes } from 'react';
import { Link ,browserHistory } from 'react-router' ;
import '../../assets/css/registerStyle.css';
import strings from '../utils/locale.js';

class RegisterForm extends Component{
 constructor(props){
    super(props);
    props.signUpUser.bind(this);
    
  }
    
 componentWillMount() {
 
     this.props.resetMe();
  }
  
  componentDidMount(){
  }
 componentWillReceiveProps(nextProps){
    //console.log(nextProps.data);
    if(nextProps.data.status === 'registered')
      browserHistory.push('/');
    
 }    

  render(){
  	 const {asyncValidating, fields: { firstname, lastname, email, sex ,password, confirmPassword }, handleSubmit, submitting } = this.props;
 	 strings.setLanguage(localStorage.language);

 	return (
  <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 container">
  <div className="row">
  <div className="formStyle">
 		<h3 className='text-center'>{ strings.registration }</h3>
 		<form onSubmit={handleSubmit(this.props.signUpUser)}>
 		 <div className={`form-group ${firstname.touched && firstname.invalid ? 'has-error' : ''}`}>
          <label className="control-label">{ strings.firstname } <span className="asterik">*</span></label>
          <input type="text" placeholder="Enter first name" className="form-control" {...firstname} />
          <div className="help-block">
            {firstname.touched ? firstname.error : ''}
          </div>
        </div>  {/*<!---First name ---->*/ }

        <div className={`form-group ${lastname.touched && lastname.invalid ? 'has-error' : ''}`}>
          <label className="control-label">{ strings.lastname } <span className="asterik">*</span></label>
          <input type="text" placeholder="Enter last name" className="form-control" {...lastname} />
          <div className="help-block">
            {lastname.touched ? lastname.error : ''}
          </div>
        </div>  {/*<!---Last name ---->*/}

        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label className="control-label">{ strings.email } <span className="asterik">*</span></label>
          <input type="email" placeholder={ strings.email } className="form-control" {...email} />
          <div className="help-block">
            {email.touched ? email.error : ''}
          </div>
          <div className="help-block">
          {asyncValidating === 'email' ? 'validating..': ''}
          </div>
        </div> {/* <!--- Email feild ------> */}
           
        <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
          <label className="control-label">{ strings.password } <span className="asterik">*</span></label>
          <input type="password" placeholder={ strings.password } className="form-control" {...password} />
          <div className="help-block">
            {password.touched ? password.error : ''}
          </div>
        </div> {/*<!---password feild here ---->*/}


        <div className={`form-group ${confirmPassword.touched && confirmPassword.invalid ? 'has-error' : ''}`}>
          <label className="control-label">{ strings.confirmpass } <span className="asterik">*</span></label>
          <input type="password" placeholder={ strings.confirmpass } className="form-control" {...confirmPassword} />
          <div className="help-block">
            {confirmPassword.touched ? confirmPassword.error : ''}
          </div>
        </div> {/* <!---- Confirm Password -------> */}
        
         <div className='form-group'>
          <label className='control-label'>{ strings.gender }</label>
          <div className='btn-gender'>
            <label>
              <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/>  { strings.male }
            </label>&nbsp;&nbsp;&nbsp;
            <label>
              <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/>   { strings.female }
            </label>
          </div>
        </div>  {/* <!----- gender feild ----> */}
      
       
      <div className="checkbox">
        <label>
          <input type="checkbox" />{ strings.term }
          <a href="#">{ strings.condition }</a>
        </label>
      </div>
       
        <button type="submit" className="btn btn-primary"  disabled={submitting} >{ strings. submit}</button>&nbsp;&nbsp;&nbsp;
        <Link to="/" className="btn btn-danger">{ strings.cancel }</Link>
         
 		</form>
 		</div>
 		</div>
 		</div>

 		);

  }

 }


export default RegisterForm;


