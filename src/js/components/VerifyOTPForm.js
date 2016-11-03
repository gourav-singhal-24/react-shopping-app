import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import strings from '../utils/locale.js';

export default class VerifyOTP extends Component{
    constructor(props){
        super(props);
       
        
    }
     componentWillReceiveProps(nextProps){
         let { user, resendotp } = nextProps; 
         if( user.status === 'verfiedOTP')
          browserHistory.push('/home');
         if( resendotp.sentAgain === true ){
               alert(resendotp.message);
         } 
     }
     
    render(){
         const { fields: { OTP }, handleSubmit, submitting, changekey } = this.props;
         return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 formStyle container" style={{ margin:150 }}>
            <h3 className="text-center">{ strings.verifyotp }</h3>
                  <label className="control-label">&nbsp;&nbsp;&nbsp;&nbsp;{ this.props.userEmail }</label>
                        <form onSubmit={handleSubmit(this.props.validateOTP)} className="form col-md-12 center-block">
                                <div className={`form-group ${OTP.touched && OTP.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">{ strings.enterotp } <span className="asterik">*</span></label>
                                <input type="text" className="form-control" placeholder={ strings.otphere } {...OTP}/>
                                <div className="help-block">
                                { OTP.touched ? OTP.error : ''}
                                </div>
                                </div>
                                <button className="btn btn-primary">Submit</button>
                                 <a style={{paddingLeft:'20px'}} onClick={this.props.resend} href="javascript:void(0)">Resend OTP</a> 
                        </form>
            </div>
           
        );
    }

} 