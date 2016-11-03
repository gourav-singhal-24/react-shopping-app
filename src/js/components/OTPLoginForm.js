import React ,{ Component } from 'react';
import { Link, browserHistory } from 'react-router'; 
import strings from '../utils/locale.js';
import '../../assets/css/form.css';
export default class OTPLoginForm extends Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        
    }
    componentWillReceiveProps(nextProps){
        let { user } = nextProps;
        if(user.status==='loginwithotp' && user.isAuthenticated === true ){
          browserHistory.push('/');
        }
    }
    render(){
        const { ayncValidating, fields:{ otp, password, confirmPassword }, handleSubmit,submitting } = this.props;
        strings.setLanguage(localStorage.language);
        return(
           <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 container">
                <div className="row">
                    <div className="formStyle">
                    <h3> { strings.optnewp }</h3>
                            <form onSubmit={handleSubmit(this.props.sendnewpwd)}>
                                    <div className={`form-group ${ otp.touched && otp.invalid ? 'has-error':'' }`} >
                                    <label className="control-label">{strings.otp} <span className="asterik">*</span></label>
                                    <input type="text" placeholder="Enter your OTP here" className="form-control" {...otp} />
                                        <div className="help-block">
                                        {otp.touched ? otp.error : '' }
                                        </div>
                                    </div>
                                    <div className={`form-group ${ password.touched && password.invalid ? 'has-error':''}`}>
                                    <label className='control-label'>{ strings.password } <span className='asterik'>*</span></label>
                                    <input type = 'password' placeholder='Enter password' className='form-control' {...password} />
                                        <div className='help-block'>
                                        { password.touched ? password.error :'' }
                                        </div>
                                    </div>
                                    <div className={`form-gourp ${confirmPassword.touched && confirmPassword.invalid ? 'has-error':''}`} >
                                    <label className="control-label">{strings.confirmpass} <span className="asterik">*</span></label>
                                    <input type="password" placeholder="Enter confirm password" className='form-control' {...confirmPassword} />
                                        <div className='help-block'>
                                        { confirmPassword.touched ? confirmPassword.error:'' }
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary"  disabled={submitting} >{ strings. submit}</button>
                            </form>
                    </div>
                </div>
           </div> 
        );
    }
} 