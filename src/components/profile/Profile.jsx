import style from './Profile.module.css';

import MyPosts from './my-posts/my-post';
import Portfolio from './portfolio/portfolio';


const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <MyPosts
                     posts={props.profilePage.posts} 
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                     />
            <Portfolio />
        </div>
    )
}

export default Profile;