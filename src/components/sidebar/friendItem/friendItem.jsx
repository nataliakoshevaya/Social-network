import style from './friend.module.css'

const FriendItem = (props) => {
    return (
        <div className={style.friendCard }>
            <div className={style.friendImg}>
                <img src={props.img} alt="avatar" />
            </div>
            <div className={style.friendName}>{props.name}</div>
        </div>
    )
}

export default FriendItem;