import { VALIDATE_FIELDS, VALIDATE_FIELDS_SUCCESS, VALIDATE_FIELDS_FAILURE, RESET_VALIDATE_FIELDS} from '../actions/validateFields';


//user = userobj, 
// status can be: 
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up) 
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin) 
// 6. 'logout' (after logout)

const INITIAL_STATE = {error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    case VALIDATE_FIELDS :
         return { ...state, error:null, loading: true};
    case VALIDATE_FIELDS_FAILURE : 
         error = action.payload.data ? action.payload.data :{ message:action.payload.data.Message }
         return {...state , error:error, loading:false};
    case VALIDATE_FIELDS_SUCCESS :
         return{...state, error:false, loading:false };
   case RESET_VALIDATE_FIELDS:
     return { ...state, error:null, loading: false};
    case RESET_VALIDATE_FIELDS:
    return { ...state, error:null, loading: false};    
  default:
    return state;
  }
}
 