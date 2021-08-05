/*
  * Define the action for call the api and set the data to redux store.
  * */

//Import action type, endpoints and the api fetch functions
import ActionTypes from '../Constants/ActionTypes';
import EndPoints from '../Constants/EndPoints';
import { getAPI, postAPIBody, postAPI } from '../Utils/Api';

//Sign Up Action
export const Signup = (data) => {
  return postAPI(EndPoints.SIGNUP, data).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
};

//Common action forform data, which are not needed to store in redux store
export const CommonApi = (data, endpoint) => {
  return postAPI(endpoint, data).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
};

//Common action for body data, which are not needed to store in redux store
export const CommonBodyApi = (data, endpoint) => {
  return postAPIBody(endpoint, data).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
};


//Login Action
export const Logins = (data) => {
  return (dispatch) => {
    postAPI(EndPoints.LOGIN, data).then((response) => {
      if (response.status) {
        dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: response })
      } else {
        dispatch({ type: ActionTypes.LOGIN_ERROR, payload: response.message })
      }
    }).catch((error) => {
      dispatch({ type: ActionTypes.LOGIN_ERROR, payload: error.message })
    })
  }
};

//Common Action for Post data
export const PostDataAction = (data, endpoint, success, failure) => {
  return (dispatch) => {
    postAPI(endpoint, data).then((response) => {
      console.log('response', response)
      if (response.status) {
        dispatch({ type: success, payload: response })
      } else {
        dispatch({ type: failure, payload: response.message })
        // if (endpoint == EndPoints.CARD && response.data) {
        //   dispatch({ type: success, payload: response.data })
        // } else {
        //   dispatch({ type: failure, payload: response.message })
        // }
      }
    }).catch((error) => {
      console.log('error', error)
      dispatch({ type: failure, payload: error.message })
    })
  }
};

//Common Action for Get Request
export const GetAction = (endpoint, success, failure) => {
  return (dispatch) => {
    getAPI(endpoint).then((response) => {
      if (response.status) {
        dispatch({ type: success, payload: response.records ? response.records : response.data })
      } else {
        dispatch({ type: failure, payload: response.message })
      }
    }).catch((error) => {
      dispatch({ type: failure, payload: error.message })
    })
  }
};

//Common Action to save any data in redux store
export const SaveData = (data, action) => {
  return (dispatch) => {
    dispatch({ type: action, payload: data })
  }
};

//Logout Action
export const Logout = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_LOGOUT })
  }
};

//Check, If api called
export const ApiCalled = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.API_CALLED })
  }
};

