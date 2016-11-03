import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import strings from '../utils/locale.js';

class ChangePwdForm extends Component {
 constructor(props){
    super(props);
    props.changepassword.bind(this);
  }
       
 componentWillMount() {
 
  }
  render() {
    const { asyncValidating, fields: {  currentpwd, newpwd, confirmnewpwd }, handleSubmit, submitting } = this.props;
     strings.setLanguage(localStorage.language);
    return (
      <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 container">
      <div className="row">
      <div className="formStyle">
      <h3>{ strings.changepwd }</h3>
        <form onSubmit={handleSubmit(this.props.changepassword)}>
            <div className={`form-group ${currentpwd.touched && currentpwd.invalid ? 'has-error' : ''}`}>
                <label className="control-label"> { strings.entercpwd}<span className="asterik">*</span></label>
                <input type="password" className="form-control" {...currentpwd} />
                 <div className="help-block">
                     { currentpwd.touched ? currentpwd.error : ''}
                 </div>
            </div>
            <div className={`form-group ${newpwd.touched && newpwd.invalid ? 'has-error' : ''}`}>
                <label className="control-label">{ strings.enternpwd }<span className="asterik">*</span></label>
                <input type="password" className="form-control" { ...newpwd } />
                <div className="help-block">
                    { newpwd.touched ? newpwd.error : ''}
                </div>
            </div>
            <div className={`form-group ${confirmnewpwd.touched && newpwd.invalid ? 'has-error' : ''}`}>
                <label className="control-label">{ strings.entercnpwd }<span className="asterik">*</span></label>
                <input type="password" className="form-control" { ...confirmnewpwd } />
                <div className="help-block">
                    { confirmnewpwd.touched ? confirmnewpwd.error : ''}
                </div>
            </div>
            <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>&nbsp;&nbsp;&nbsp;
            <Link to="/home" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
      </div>  
     </div>

    );
  }
}
export default ChangePwdForm;