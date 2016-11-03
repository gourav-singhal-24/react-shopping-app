import { SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
         REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS,
         VALIDATE_USER_OTP, VALIDATE_USER_OTP_SUCCESS, VALIDATE_USER_OTP_FAILURE,
         SIGNIN_USER_OTP, SIGNIN_USER_OTP_SUCCESS, SIGNIN_USER_OTP_FAILURE 
        } from '../actions/users.js';

const INITIAL_STATE = {user: null, status:null,isAuthenticated:localStorage.getItem('jwtToken') ? true : false , message:null, error:null, loading: false}

export default function(state=INITIAL_STATE,action){
        let error;
   switch(action.type){
    case SIGNIN_USER: 
           return { ...state,user:null, status:'signin', isAuthenticated: false, error:null, loading:true };
            
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
           return { ...state, user: action.payload, status:'authenticated',isAuthenticated: true, error:null, loading: false}; //<-- authenticated
    
    case SIGNIN_USER_FAILURE:// return error and make loading = false
            error = action.payload || { message: action.payload.Message };//2nd one is network or server down errors      
            return { ...state, user: null, status:'signin', isAuthenticated: false, error:error, loading: false};
   
   case SIGNIN_USER_OTP :
            return{ ...state, user:null, status:'notloginwithotp', isAuthenticated:false, error:null, loading:false };
            
   case SIGNIN_USER_OTP_SUCCESS:
            return{ ...state, user:null, status:'loginwithotp', isAuthenticated:true, error:null,loading:false };  
            
   case SIGNIN_USER_OTP_FAILURE:
            error = action.payload || { message:action.payload.Message }    
            return{ ...state, user:null, status:'notloginwithotp', isAuthenticated:false, error:error, loading:false };
                      
   case REGISTER_USER : 
                return { ...state, user:null,status:'register',error:null, loading:true }
   
   case REGISTER_USER_SUCCESS:
                return { ...state, user:null,status:'registered',error:null, loading:false } 
   
   case REGISTER_USER_FAILURE:
                error = action.payload.payload.data || {message: action.payload.payload.data.Message};
                return { ...state , user:null,status:'register',error:error , loading:false }
   
    case VALIDATE_USER_OTP :
                return { ...state, user:null, status:'verifingOTP', error:null, loading:false }
                
    case VALIDATE_USER_OTP_SUCCESS : 
                 return { ...state , user:null , status:'verfiedOTP', error:null, loading:true }
                 
    case VALIDATE_USER_OTP_FAILURE :
                 error: action.payload.data || { message: action.payload.data.Message }
                 return {...state, user:null , status:'verfingOTP', error:error , loading:false }                     
   
    default :
             return state ; 
  
    }
}