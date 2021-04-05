import { ProfileAPI } from '../api'

const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [{
      id: 1,
      message: 'Hello, how are you?',
      likeCount: 10
    },
    {
      id: 3,
      message: 'Bla-bla',
      likeCount: 5
    },
    {
      id: 2,
      message: 'My first post',
      likeCount: 25
    },
    {
      id: 4,
      message: 'Hey',
      likeCount: 25
    }
  ],
  profile: null,
  newPostText: '',
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };

      return {
        ...state,
        newPostText: '',
          posts: [...state.posts, newPost]
      }

      case POST_CHANGE: {
        return {
          ...state,
          newPostText: action.newText
        }
      }
      case SET_USERS_PROFILE: 
        return {
          ...state,
          profile: action.userProfile
        }
      
      case SET_STATUS: 
        return {
          ...state,
          status: action.status
        }  
      default:
        return state;
  }
};

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const addPost = () => ({
  type: ADD_POST
});

export const updateNewPostText = (text) => ({
  type: POST_CHANGE,
  newText: text
});

export const getProfile = (userProfile) => ({
  type: SET_USERS_PROFILE,
  userProfile
});

export const userProfile = (userId) => (dispatch) => {
        ProfileAPI.setUserProfile(userId)
        .then(data => {
          dispatch(getProfile(data));
        });
}

export const getUserStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId)
  .then(data => {
    console.log(data)
    dispatch(setStatus(data))
  })
}

export const updateUserStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status)
  .then(data => {
    if(data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer;

