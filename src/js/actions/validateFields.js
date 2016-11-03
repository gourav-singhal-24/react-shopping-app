import axios from 'axios';

//Validate user fields like name and password
export const VALIDATE_FIELDS = 'VALIDATE_FIELDS';
export const VALIDATE_FIELDS_SUCCESS = 'VALIDATE_FIELDS_SUCCESS';
export const VALIDATE_FIELDS_FAILURE = 'VALIDATE_FIELDS_FAILURE';
export const RESET_VALIDATE_FIELDS = 'RESET_VALIDATE_FIELDS';
const API_KEY = 'S22A6C439881439481FFCDB66B44AAE0';
const ROOT_URL = 'http://172.18.1.62:3000';

export function validateFields(values) {
   
  let url = `${ROOT_URL}/api/user/exists`;
  const request = axios(
                    { method:'get',
                      url:url,
                      headers: { api_key :API_KEY },
                      params : { Email : values.email }
                    }
                    );
  return {
    type: VALIDATE_FIELDS,
    payload:request
  };
}
export function validateFieldsFailure(error){
  return {
    type: VALIDATE_FIELDS_FAILURE,
    payload: error
  };
  
}
export function validateFieldsSuccess(){
   return {
    type: VALIDATE_FIELDS_SUCCESS
  };
}

export function resetValidateFields() {
  return {
    type: RESET_VALIDATE_FIELDS
  }
};