import style from './Posts.module.css';


import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {
    return (
        <div className={style.postItem}>
        <div className={style.postTitle}>
            <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg" alt="avatar"/>
            <div className={style.userName}>Natalia Koshevaya</div>
        </div>
            <div className={style.postContent}>
                <div className={style.postText}>{props.message}</div>
                <span><FontAwesomeIcon icon={faHeart} /> {props.like}</span>
            </div>
        </div> 
    )
}

export default Post;