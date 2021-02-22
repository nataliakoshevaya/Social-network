import style from './my-posts.module.css';
import Post from './posts/Post';
import React from 'react';
import {UpdateNewPostTextActionCreater, addPostActionCreater} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    let addPost = (e) => {
      e.preventDefault();

      props.dispatch(addPostActionCreater());
    }

    let onChange = (e) => {
      let text = e.target.value;
      
      props.dispatch(UpdateNewPostTextActionCreater(text));
    }

    let postsEl = props.posts.map(m => {
      return (
        <Post message={m.message} like={m.likeCount} />
      )
    });

    return (
      <div className={style.posts}>
        <div className={style.postWrapper}>
          <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg" alt="avatar" />
          <form className={style.newPost} >
            <textarea 
                  className={style.postInput} 
                  value={props.newPostText} 
                  onChange={onChange} 
                  placeholder="write something"
                  >
            </textarea>
            <button className={style.postBtn} onClick={addPost}>Post</button>
          </form>
        </div>
        {postsEl}
      </div>
    )
}

export default MyPosts;