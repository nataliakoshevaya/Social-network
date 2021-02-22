import style from './Profile.module.css';

import Portfolio from './portfolio/portfolio';
import MyPostsContainer from './my-posts/my-post-container';


const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <MyPostsContainer
                    store={props.store}
                     />
            <Portfolio />
        </div>
    )
}

export default Profile;