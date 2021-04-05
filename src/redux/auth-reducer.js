import {authUser} from '../api'

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case  SET_USER_DATA:
        return {
            ...state,
            ...action.payload,
            isAuth: true
        }
    default:
      return state
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type:  SET_USER_DATA,
  payload: {userId, login, email, isAuth}
});

export const getAuthUserData = () => (dispatch) => {
  authUser.getAuthUser()
  .then(data => {
     if(data.resultCode === 0) {
         let {userId, login, email} = data.data
         dispatch(setAuthUserData(userId, login, email, true))
     };
  });    
};


export const login = (email, password, rememberMe) => (dispatch) => {
  authUser.login(email, password, rememberMe)
  .then(response => {
    if(response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    };
  });
};

export const logout = () => (dispatch) => {
  authUser.logout()
  .then(data => {
    if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }  
  })
}


export default authReducer;

