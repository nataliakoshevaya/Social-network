import style from './Profile.module.css';

import MyPosts from './my-posts/my-post';
import Portfolio from './portfolio/portfolio';


const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} postChange={props.postChange}/>
            <Portfolio />
        </div>
    )
}

export default Profile;