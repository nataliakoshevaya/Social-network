import { connect } from 'react-redux';
import { addMessageActionCreater, UpdateNewMessageextActionCreater } from '../../redux/dialogs-reducer';
import Dialog from './dialog';



let mapStateToProp = (state) => {
    return {
        dialogsPages: state.dialogsPages 
    }
}



let mapDispatchToProp = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreater());
        },

        updateNewMessageText: (text) => {
            let action = UpdateNewMessageextActionCreater(text);
            dispatch(action);
        }
    }
}

let DialogContainer = connect(mapStateToProp, mapDispatchToProp)(Dialog);

export default DialogContainer;

