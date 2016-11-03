import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import strings from '../utils/locale.js';


class ForgetPwdForm extends Component {
  constructor(props){
    super(props);
    this.state = { show:false };
    props.getEmailAndRedirect.bind(this);
 }
 componentWillMount() {
 
  }
 componentWillReceiveProps(nextProps){
   if(nextProps.sendEmail.status === 'sent'){
      browserHistory.push('/otppwdset');
   }
 }
 
  render() {
    const { asyncValidating, fields: {email}, handleSubmit, submitting } = this.props;
    
    strings.setLanguage(localStorage.language);
    return (
                <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 container">
                <div className="row">
                <div className="formStyle">
                  <form onSubmit={ handleSubmit(this.props.getEmailAndRedirect) }>
                    <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
                      <label className="control-label"> { strings.enteremail } <span className="asterik">*</span></label>
                      <input type="email" placeholder={strings.enteremail} className="form-control" {...email} />
                      <div className="help-block">
                        {email.touched ? email.error : ''}
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>&nbsp;&nbsp;&nbsp;
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                  </form>
                  </div>
              </div>
          </div>
    );
  }
}
export default ForgetPwdForm;