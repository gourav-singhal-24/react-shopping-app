import React , { Component } from 'react';
import { Link } from 'react-router';
import DropZone from 'react-dropzone';
import strings from '../utils/locale.js';
import DropzoneDemo from './DropZoneComponent.js';

export default class ProfileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing:false,
            files:''
        };
        this._enterEditMode = this._enterEditMode.bind(this);
        this._enterNotEditMode = this._enterNotEditMode.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
        this.onDrop = this.onDrop.bind(this);
        props.updateProfile.bind(this);
    }
    componentWillMount(){
    }
    componentWillReceiveProps(nextProps){
    }
    render(){
        var dropZoneStyle = {
            dropzone: { width: 200,
                        height: 'auto'
                      },
            imgContainer: {
                        height:196,
                        width:196,
                        textAlign:'left',
                        borderRadius: 5,
                        position: 'relative',
                         },
            uploadedImageLabel: {
                  cursor: 'pointer'
            }                   
         }
     const { asyncValidating, fields:{ firstname,lastname,address,email,phnnumbr,sex,profileimage,dob },handleSubmit,submitting } = this.props;
         strings.setLanguage(localStorage.language);
         if(this.state.editing){
            return(
                 <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 container">
                    <div className="row">
                    <div className="formStyle">
                    <form onSubmit={handleSubmit(this.props.updateProfile)}>
                        <div className={`form-group ${firstname.touched && firstname.invalid ? 'has-error' : ''}`}>
                            <label className="control-label">{ strings.firstname } <span className="asterik">*</span></label>
                            <input type="text" placeholder="Enter first name" className="form-control" {...firstname} />
                            <div className="help-block">
                                {firstname.touched ? firstname.error : ''}
                            </div>
                        </div>  {/*<!---First name ---->*/ }

                        <div className={`form-group ${lastname.touched && lastname.invalid ? 'has-error' : ''}`}>
                            <label className="control-label">{ strings.lastname } <span className="asterik">*</span></label>
                            <input type="text" placeholder="Enter last name here" className="form-control" {...lastname} />
                            <div className="help-block">
                                {lastname.touched ? lastname.error : ''}
                            </div>
                        </div>  {/*<!---Last name ---->*/}
                        
                          <div className={`form-group ${address.touched && address.invalid ? 'has-error' : ''}`}>
                            <label className="control-label">{ strings.enteraddress }</label>
                            <input placeholder={strings.address} type="text" className="form-control" {...address} />
                            <div className="help-block">
                                {address.touched ? address.error : ''}
                            </div>
                         </div> {/* <!--- Address field ------> */}

                        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
                            <label className="control-label">{ strings.email } <span className="asterik">*</span></label>
                            <input type="email" placeholder={ strings.email } className="form-control" {...email} />
                            <div className="help-block">
                                { email.touched ? email.error : '' }
                            </div>
                       </div> {/* <!--- Email feild ------> */}

                           <div className={`form-group ${phnnumbr.touched && phnnumbr.invalid ? 'has-error' : ''}`}>
                            <label className="control-label">{ strings.phnnumbr }</label>
                            <input type="email" placeholder={ strings.phnnumbr } className="form-control" {...phnnumbr} />
                            <div className="help-block">
                                { phnnumbr.touched ? phnnumbr.error : ''}
                            </div>
                         </div> {/* <!--- phnNumber field ------> */}
                         
                        <div className='form-group'>
                        <label className='control-label'>{ strings.gender }</label>
                        <div className='btn-gender'>
                            <label>
                            <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> { strings.male }
                            </label>&nbsp;
                            <label>
                            <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> { strings.female }
                            </label>
                        </div>
                        </div>  {/* <!----- gender feild ----> */}
                          <div className={`form-group ${dob.touched && dob.invalid ? 'has-error' : ''}`}>
                            <label className="control-label">{ strings.dob }</label>
                            <input type="text" placeholder={ strings.enterdob } className="form-control" {...dob} />
                            <div className="help-block">
                                {dob.touched ? dob.error : ''}
                            </div>
                         </div> {/* <!--- dob field ------> */}
                         <div className='form-group'>
                         <label>Profile image</label>
                            <div>
                               <DropZone ref="dropzone" onDrop={this.onDrop}  multiple={ false } accept={ 'image/*' } style={ dropZoneStyle.dropzone }> 
                                </DropZone>
                               { this.state.files.length > 0 ? <div>{this.state.files.map((file) => <img src={file.preview} style={dropZoneStyle.imgContainer} key={file} /> ) }</div> : null   }
                           </div> 
                            <div>
                          <button onClick = {this.onOpenClick}>Upload Image...</button>
                         </div>
                         </div>
                        
                      <div className="form-group">  
                    <button type="submit" className="btn btn-primary"  disabled={submitting} >{ strings. submit}</button>&nbsp;
                     <button className='btn btn-danger'onClick={this._enterNotEditMode}>Cancel</button>
                     </div>
                    </form>
                    </div>
                    </div>
                    </div>
              );                       
         }
         else{
            
            const { fields:{ firstname,lastname,address,email,phnnumbr,sex,profileimage,dob }}= this.props;
            return(
                 <div style={ { margin:40, padding:10, width:500,border:'1px solid black' } }>
                 <h4 className='text-center'>Profile</h4>
                 <div className='form-group'>
                 <label>First Name:<strong>{firstname.value}</strong></label>
                 </div>
                  <div className='form-group'>
                 <label>Last Name : <strong>{lastname.value}</strong></label>
                 </div>
                 <div className='form-group'>
                 <label>Address : <strong>{ address.value }</strong></label>
                 </div>
                  <div className='form-group'>
                 <label>E-mail : <strong>{ email.value }</strong></label>
                 </div>
                  <div className='form-group'>
                 <label>Phone Number : <strong>{ phnnumbr.value }</strong></label>
                 </div>
                  <div className='form-group'>
                 <label>Gender : <strong>{ sex.value }</strong></label>
                 </div>
                  <div className='form-group'>
                 <label>Image : <strong>{ profileimage.value }</strong></label>
                 </div>
                 <div className="text-center">
                  <button className='btn btn-primary' onClick={this._enterEditMode}>Edit Profile</button>
                 </div>
                 </div>
             ); 
         }
         
 }
   _enterEditMode() {
     this.setState({editing: true});
  }
  _enterNotEditMode(e){
      e.preventDefault();
      this.setState({editing:false});
  }
  onOpenClick() {
      this.refs.dropzone.open();
    }  
    onDrop(files){
       this.setState({ files: files }); 
   }
}
               
    