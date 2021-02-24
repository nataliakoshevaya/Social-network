const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

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

  newPostText: ''
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
      default:
        return state;
  }
};

export const addPostActionCreater = () => ({
  type: ADD_POST
});

export const UpdateNewPostTextActionCreater = (text) => ({

  type: POST_CHANGE,
  newText: text
});


export default profileReducer;