import { connect } from 'react-redux';
import { addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import Dialog from './dialog';
import { withAuthRedirect } from '../HOC/authRedirect';
import { compose } from 'redux';

let mapStateToProp = (state) => {
    return {
        dialogsPages: state.dialogsPages
    }
}

export default compose(
   connect(mapStateToProp, {addMessage, updateNewMessageText}),
   withAuthRedirect
)(Dialog);

