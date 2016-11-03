import React, { Component, PropTypes } from 'react';
import { Link ,browserHistory } from 'react-router';
import strings from '../utils/locale.js';
import '../../assets/css/form.css';

class SignInForm extends Component {
 constructor(props){
    super(props);
    props.signIn.bind(this);
    
  } 
  
 componentWillMount() {
   
  }
  componentWillReceiveProps(nextProps){
    let { user } = nextProps;
    if(user.status==='authenticated' && user.isAuthenticated === true){
      browserHistory.push('/home');
    }  
     
 }    
  
  render() {
    const {asyncValidating, fields: {Email, Password}, handleSubmit, submitting } = this.props;
    strings.setLanguage(localStorage.language);
    return (
      
     <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 container">
     <div className="row">
     <div className="formStyle">
      <h3 className="text-center">{ strings.signin }</h3>
      <form onSubmit={handleSubmit(this.props.signIn)} className="form center-block">
        <div className={`form-group ${Email.touched && Email.invalid ? 'has-error' : ''}`}>
            <label className="control-label">{ strings.email } <span className="asterik">*</span></label>
             <div  className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input  placeholder={strings.email} type="email" className="form-control" {...Email} required autofocus/>
            </div>
            <div className="help-block">
               { Email.touched ? Email.error : ''}
            </div>
       </div>
      <div className={`form-group ${Password.touched && Password.invalid ? 'has-error' : ''}`}>
            <label className="control-label">{ strings.password } <span className="asterik">*</span></label>
             <div  className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input placeholder="Enter password" type="password" className="form-control" {...Password} required/>
            </div>
            <div className="help-block">
              {Password.touched ? Password.error : ''}
            </div>
      </div>
      <div className="form-group">
          <div className="checkbox">
          <label>
          <input type="checkbox"/> { strings.rememberme }
          </label>
          </div>
     </div>
      <div className="form-group">
         <button type="submit" className="btn btn-lg btn-primary btn-block btn-signin"  disabled={submitting} >{strings.submit}</button>
      </div>
       <div className="form-group">
          <div class="help-block text-right">
            <Link to="/forgetpwd" className="forgot-password">{ strings.forgetpwd }</Link>
          </div>
       </div>
     </form>
      <div className="bottom formm-group">
        { strings.account }<Link to='/register'>{strings.register} </Link> {strings.here}. 
      </div>
   </div>
  </div>
  </div> 
   
    );
  }
}
export default SignInForm;