import style from './Profile.module.css';

import MyPosts from './my-posts/my-post';
import Portfolio from './portfolio/portfolio';

const Profile = () => {
    return (
        <div className={style.wrapper}>
            <MyPosts />
            <Portfolio />
        </div>
    )
}

export default Profile;