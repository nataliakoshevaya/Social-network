import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let store  = {
   _state: {
    profilePage: {
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
    },
  
    dialogsPages: {
      dialogs: [{
          id: 1,
          name: 'ALex'
        },
        {
          id: 2,
          name: 'Ron'
        },
        {
          id: 3,
          name: 'Sasha'
        },
        {
          id: 4,
          name: 'Chris'
        },
        {
          id: 5,
          name: 'Kate'
        },
      ],
  
      messages: [{
          id: 1,
          message: 'Hello',
          name: 'user',
          img: 'http://archilab.online/images/1/123.jpg'
        },
        {
          id: 2,
          message: 'How are you?',
          name: 'user',
          img: 'http://archilab.online/images/1/123.jpg'
        },
        {
          id: 3,
          message: 'Yo',
          name: 'me',
          img: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg'
        },
        {
          id: 4,
          message: 'i\'m fine and u?',
          name: 'me',
          img: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg'
        }
      ],
  
      textMessage: ''
    },
  
    sidebar: {
      friends: [{
          id: 1,
          name: 'Alex',
          img: 'http://archilab.online/images/1/123.jpg'
        },
        {
          id: 2,
          name: 'Ron',
          img: 'https://lh3.googleusercontent.com/proxy/8qe-CT2lsb6xBGcBEerpz54cnT27VW4tlBDzE6qoJRzGskEPHrZtMlKUE7NQbm1dYMHWIUCrxhBPSABPDXVVvG7K7--v-6hL8C6AJKM8Lp3z9RsmWpPKg4T0KFTiQIzL5lO5wgoe6hibSPY_u6PMTJOH_7LWeTeDeNJ4MGCZHA'
        },
        {
          id: 3,
          name: 'Sasha',
          img: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
        },
        {
          id: 4,
          name: 'Chris',
          img: 'https://discordgid.ru/wp-content/uploads/2020/03/diskord-avatar.jpg'
        }
      ]
    },
  },

  _callSubscriber () {
    console.log('state changed')
  },

  getState() {
    return this._state
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPages = dialogReducer(this._state.dialogsPages, action);
    this._state.sidebar = sideBarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }, 
  
  subscribe(observer) {
    store._callSubscriber = observer;
  }
};

export default store;