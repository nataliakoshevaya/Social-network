import Message from './message/message';
import DialogItem from './dialogItem/dialogItem';
import style from './dialog.module.css';

import React from 'react';

const Dialog = (props) => {

    let newMessage = React.createRef();

    const addMessage = (e) => {
        e.preventDefault();
        let text = newMessage.current.value;
        props.addMessage(text);
    }    

    const changeTextMessage = () => {
        let text = newMessage.current.value;
        console.log(text);
        props.messageChange(text);
    }

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
                    <textarea className="teaxtarea" value={props.newMessageText} onChange={changeTextMessage} ref={newMessage}></textarea>
                    <button className={style.postBtn} onClick={addMessage}>Send</button>
            </form>
            </div>
        </div>
    )
}

export default Dialog;