const NEW_MESSAGE = 'NEW-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

const initialState = {
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
      
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.textMessage,
                name: 'me',
                img: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg'
            };
            state.messages.push(newMessage);
            state.textMessage = '';
            return state;
        case MESSAGE_CHANGE:
            state.textMessage = action.newText;
            return state;
        default:
            return state
    }
};

export const addMessageActionCreater = () => ({
    type: NEW_MESSAGE
});;

export const UpdateNewMessageextActionCreater = (text) => ({
    type: MESSAGE_CHANGE,
    newText: text
});


export default dialogReducer;