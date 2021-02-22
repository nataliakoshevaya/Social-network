import React from 'react';
import {UpdateNewPostTextActionCreater, addPostActionCreater} from '../../../redux/profile-reducer';
import MyPosts from './my-post';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
      props.store.dispatch(addPostActionCreater());
    }

    let onChange = (text) => {
      let action = UpdateNewPostTextActionCreater(text)
      props.store.dispatch(action);
    }


    return (<MyPosts 
                updateNewPostText={onChange} 
                addPost={addPost} 
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                />)
}

export default MyPostsContainer;