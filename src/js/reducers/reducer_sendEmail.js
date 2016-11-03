import { SEND_EMAIL, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE } from '../actions/sendEmail.js';

const INITIAL_STATE = { status:'notsent' , error:false  }
export default function (state = INITIAL_STATE,action){
    let error ;
    switch(action.type){
        case SEND_EMAIL: 
             return { ...state, status:'notsent' , error:false };
        
        case SEND_EMAIL_FAILURE :
                errror = action.payload.data || { message: action.payload.data.Message }
                return { ...state, status:'notsent', error:error };
        
        case SEND_EMAIL_SUCCESS :
             return { ...state, status:'sent', error:null };
        default :
            return state ;
    }
}