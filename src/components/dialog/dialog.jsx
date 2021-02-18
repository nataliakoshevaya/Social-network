import Message from './message/message';
import DialogItem from './dialogItem/dialogItem';
import style from './dialog.module.css';

const Dialog = (props) => {
    
    let dialogEl = props.data.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });
    let messageEl = props.data.messages.map((m) => {
        return <Message message={m.message}/>
    });

    return(
        <div className={style.dialog}>
            <div className={style.dialogs}>
                {dialogEl}
            </div>
            <div className={style.messages}>
                {messageEl}
            </div>
        </div>
    )
}

export default Dialog;