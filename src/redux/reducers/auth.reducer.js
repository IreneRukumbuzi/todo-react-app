import { LOGIN, SIGN_UP } from '../actionTypes/actionTypes';
import { rejected, fulfilled } from '../../utils/action.utils';
import initialState from '../initialStates/user';


const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log(action);

  switch (type) {
    case fulfilled(LOGIN):
        return {
          ...state,
          login: {
            token: payload.data.token,
            message: payload.data.message
          }
        };
    case rejected(LOGIN):
        return{
          ...state,
          login: {
            message: payload.response.data.message
          }
        };
    case fulfilled(SIGN_UP): 
        return{
          ...state,
          signup: {
            message: payload.data.message
          }  
        }
    
    case rejected(SIGN_UP):
      return {
        ...state,
        signup: {
          message: payload.response.data.message
        }
      }
    default:
      return state;
  }
}

export default authReducer