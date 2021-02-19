import { NavLink } from 'react-router-dom';
import style from './friend.module.css';

const FriendItem = (props) => {
        return (
            <NavLink to={`/profile/${props.id}`} className={style.friendCard}>
                <div  className={style.friendImg}>
                   <img src={props.img} alt="avatar" />
                </div>
                <div className={style.friendName}>{props.name}</div>
            </NavLink>
    )
 }




export default FriendItem;