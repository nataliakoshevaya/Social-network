import Message from './message/message';
import DialogItem from './dialogItem/dialogItem';
import style from './dialog.module.css';
import React from 'react';

const Dialog = (props) => {
    const addMessage = (e) => {
        e.preventDefault();

        props.addMessage();
    };    

    const changeTextMessage = (e) => {
        let text = e.target.value;

        props.updateNewMessageText(text);
    };    

    let dialogEl = props.dialogsPages.dialogs.map((d) => {
        return <DialogItem name={d.name} key={d.id} id={d.id} />
    });
    let messageEl = props.dialogsPages.messages.map((m) => {
        return <Message user={m.name} img={m.img} message={m.message} key={m.id}/>
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
                                value={props.dialogsPages.textMessage}
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
