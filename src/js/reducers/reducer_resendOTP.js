import { RESEND_OTP, RESEND_OTP_SUCCESS, RESEND_OTP_FAILURE } from '../actions/resendOTP.js';

const INITIAL_STATE = { sentAgain:false,message :null, error:null } 

export default function (state = INITIAL_STATE , action){
    let error;
    switch(action.type){
        case RESEND_OTP : 
                return { ...state, sentAgain:false, error:null  }
                
        case RESEND_OTP_SUCCESS :
               return { ...state, sentAgain:true, message: `${action.payload}. Please check your mail ID` , error:null }
        case RESEND_OTP_FAILURE :
                error = action.payload.data.Message;
                return { ...state, sentAgain:false, error:error }        
        default : 
                return state;
    }
    
}