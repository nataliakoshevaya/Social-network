import style from './Profile.module.css';

import Portfolio from './portfolio/portfolio';
import MyPostContainer from './my-posts/my-post-container';


const Profile = (props) => {
    return(
        <div className={style.wrapper}>
            <MyPostContainer />
            <Portfolio profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    )
}

export default Profile;