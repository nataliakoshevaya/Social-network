import { NavLink } from 'react-router-dom';
import style from './dialog.module.css';

const DialogItem = (props) => {
    return(
        <div className={style.dialogItem} >
            <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
   return (
     <div className={style.message}>{props.message}</div>
   )
}

const Dialog = () => {
    return(
        <div className={style.dialog}>
            <div className={style.dialogs}>
                <DialogItem name='Alex' id='1'/>
                <DialogItem name='Ron' id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Chris' id='4'/>
            </div>
            <div className={style.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Hi' />
            </div>
        </div>
    )
}

export default Dialog;