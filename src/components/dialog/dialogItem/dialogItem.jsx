import style from '../dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    return (
        <div className={style.dialogItem} >
            <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;