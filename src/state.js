let state = {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello, how are you?', likeCount: 10},
        {id: 3, message: 'Bla-bla', likeCount: 5},
        {id: 2, message: 'My first post', likeCount: 25},
        {id: 4, message: 'Hey', likeCount: 25}
      ]
    },
      
  dialogsPages: {
    dialogs: [
      {id: 1, name: 'ALex'},
      {id: 2, name: 'Ron'},
      {id: 3, name: 'Sasha'},
      {id: 4, name: 'Chris'},
      {id: 5, name: 'Kate'},
    ],
    
  messages: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'i\'m fine and u?'},
      {id: 5, message: 'Kek'}
    ]
  },

  sidebar: {
    friends: [
      {id: 1, name: 'Alex', img: 'http://archilab.online/images/1/123.jpg'},
      {id: 2, name: 'Ron', img: 'http://archilab.online/images/1/123.jpg'},
      {id: 3, name: 'Sasha', img: 'http://archilab.online/images/1/123.jpg'},
      {id: 4, name: 'Chris', img: 'http://archilab.online/images/1/123.jpg'}
    ]
  }
}

export default state;