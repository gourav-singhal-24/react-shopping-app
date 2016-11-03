import axios from 'axios';

export const RESEND_OTP = 'RESEND_OTP';
export const RESEND_OTP_SUCCESS = 'RESEND_OTP_SUCCESS';
export const RESEND_OTP_FAILURE = 'RESEND_OTP_FAILURE';

const API_KEY = 'S22A6C439881439481FFCDB66B44AAE0';
const ROOT_URL = 'http://172.18.1.62:3000';

export function resendOTP(data){
   let url = `${ROOT_URL}/api/user/resendotp`
     const request = axios({
        method:'post',
        url:url,
        data : data,
        headers:{
            api_key: API_KEY
         }
    });
    return {
        type: RESEND_OTP,
        payload : request
    }
}
export function resendOTPSuccess(message){
    return {
        type:RESEND_OTP_SUCCESS,
        payload : message
    }
}
export function resendOTPFailure(error){
   return{
        type:RESEND_OTP_FAILURE,
        payload :error 
    }
}

 