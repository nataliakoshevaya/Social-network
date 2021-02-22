import Message from './message/message';
import DialogItem from './dialogItem/dialogItem';
import style from './dialog.module.css';
import React from 'react';
import { addMessageActionCreater, UpdateNewMessageextActionCreater } from '../../redux/dialogs-reducer';

const Dialog = (props) => {
    const addMessage = (e) => {
        e.preventDefault();

        props.dispatch(addMessageActionCreater());
    };    

    const changeTextMessage = (e) => {
        let text = e.target.value;
        props.dispatch(UpdateNewMessageextActionCreater(text));
    };

    let dialogEl = props.data.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} />
    });
    let messageEl = props.data.messages.map((m) => {
        return <Message user={m.name} img={m.img} message={m.message} />
    });

    return (
        <div className={style.dialog}>
            <div className={style.dialogs}>
                {dialogEl}
            </div>
 
            <div>
            <div className={style.messagesWrapper}>
                {messageEl}
            </div>
            <form className={style.newPost} >
                    <textarea 
                                className="teaxtarea" 
                                placeholder="Message..."
                                value={props.data.textMessage}
                                onChange={changeTextMessage} 
                                >
                    </textarea>
                    <button className={style.postBtn} onClick={addMessage}>Send</button>
            </form>
            </div>
        </div>
    )
}

export default Dialog;