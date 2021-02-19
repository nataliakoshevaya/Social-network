import style from './my-posts.module.css';
import Post from './posts/Post';
import React from 'react';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = (e) => {
      e.preventDefault();

      let text = newPostElement.current.value;

      props.addPost(text);
    }

    let onChange = (e) => {
      let text = newPostElement.current.value;
      props.postChange(text);
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
            <textarea className={style.postInput} value={props.newPostText} onChange={onChange} placeholder="write something" ref={newPostElement}></textarea>
            <button className={style.postBtn} onClick={addPost}>Post</button>
          </form>
        </div>
        {postsEl}
      </div>
    )
}

export default MyPosts;