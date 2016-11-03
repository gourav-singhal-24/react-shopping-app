import axios from 'axios';

export const SEND_EMAIL = 'send_email';
export const SEND_EMAIL_FAILURE = 'send_email_failure';
export const SEND_EMAIL_SUCCESS = 'send_email_success';

const API_KEY = 'S22A6C439881439481FFCDB66B44AAE0';
const ROOT_URL = 'http://172.18.1.62:3000';

export function sendEmail(data){
    let url = `${ROOT_URL}/api/user/forgotpassword`;
   const request =  axios({
      method:'get',
      url:url,
      params : data ,
      headers: {
      api_key: API_KEY
      }  
    });
   return {
        type : SEND_EMAIL,
        payload : request
    } ; 
}

export function sendEmailFailure(error){
   return{
        type : SEND_EMAIL_FAILURE , 
        payload : error
    };
}

export function sendEmailSuccess(){
   return {
        type : SEND_EMAIL_SUCCESS
    };
}