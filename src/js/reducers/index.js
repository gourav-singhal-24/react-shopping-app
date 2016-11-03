import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ValidateFieldsReducer from './reducer_validateFields.js';
import UserReducer from './reducer_users.js';
import ResendOTPReducer from './reducer_resendOTP.js';
import SendEmail from './reducer_sendEmail.js'; 
const rootReducer = combineReducers({	
	validateFields: ValidateFieldsReducer,
	user: UserReducer,
	form:formReducer,
	resendotp:ResendOTPReducer,
	sendEmail : SendEmail  
});

export default rootReducer;
