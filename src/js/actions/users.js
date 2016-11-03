import axios from 'axios';
//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE'; 

//Register user 
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
// Validate OTP 
export const VALIDATE_USER_OTP = 'VALIDATE_OTP';
export const VALIDATE_USER_OTP_SUCCESS = 'VALIDATE_OTP_SUCCESS';
export const VALIDATE_USER_OTP_FAILURE = 'VALIDATE_OTP_FAILURE';

//Log Out User
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//Sign In with OTP
export const SIGNIN_USER_OTP = 'SIGNIN_USER_OTP';
export const SIGNIN_USER_OTP_SUCCESS = 'SIGNIN_USER_OTP_SUCCESS';
export const SIGNIN_USER_OTP_FAILURE = 'SIGN_USER_OTP_FAILURE';

const API_KEY = 'S22A6C439881439481FFCDB66B44AAE0';
const ROOT_URL = 'http://172.18.1.62:3000';
 

export function validateUserOTP(data){
  let url = `${ROOT_URL}/api/user/verifyotp`;
  const request = axios({
    method:'post',
    url:url,
    data : data,
    headers: {
      api_key: API_KEY
    }
  });
  return{
    type:VALIDATE_USER_OTP,
    payload :request
  }
}
export function validateUserOTPFailure(error){
  return{
    type: VALIDATE_USER_OTP_FAILURE,
    payload:error
  };
}
export function validateUserOTPUserSuccess()
{
  return{
    type:VALIDATE_USER_OTP_SUCCESS
  };
}

export function logoutUser(){
  
}

export function logoutUserSuccess(){
  
}

export function logoutUserFailure(){
  
}

export function signInUserOTP(user){
  let url = `${ROOT_URL}/api/user/setpassword`;
  const request  = axios({
    method:'post',
    url: url ,
    data: user ,
    headers : {
      api_key : API_KEY
    }
  });
 
  return{
      type: SIGNIN_USER_OTP,
      payload :request  
  };
}

export function signInUserOTPSuccess(){
  
 return{
    type:SIGNIN_USER_OTP_SUCCESS    
  }
}

export function signInUserOTPFailure(error){
  return{
    type: SIGNIN_USER_OTP_FAILURE,
    payload:error
  }
}

export function signInUser(formValues) {
  let url = `${ROOT_URL}/api/user/login`;
  const request = axios({
    method:'post',
    url: url,
    data: formValues,
    headers:{
      api_key: API_KEY
    }
  });
return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}
export function registerUser(formValues){
  let url =  `${ROOT_URL}/api/user/register`;
  const request = axios({
    method:'post',
    url:url,
    data: formValues , 
    headers :{
      api_key: API_KEY
     }
     });
  
 return{
    type: REGISTER_USER,
    payload : request
  }
}
export function registerUserSuccess(user){
return {
  type:REGISTER_USER_SUCCESS,
  payload: user
} ; 
}
export function registerUserFailure(error){
  return{
    type: REGISTER_USER_FAILURE,
    payload : error
  };
}
