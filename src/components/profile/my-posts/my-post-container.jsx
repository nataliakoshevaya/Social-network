import { connect } from 'react-redux';
import {updateNewPostText, addPost} from '../../../redux/profile-reducer';
import MyPosts from './my-post';
//     return (<StoreContex.Consumer>
//       { store =>{
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreater());
//         }
    
//         let onChange = (text) => {
//           let action = UpdateNewPostTextActionCreater(text)
//           store.dispatch(action);
//         }
//          return <MyPosts 
//             updateNewPostText={onChange} 
//             addPost={addPost} 
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//          />
//        }
//       }
//     </StoreContex.Consumer>)
// }

// export default MyPostsContainer;

let mapStateToProp = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

// let mapDispatchToProp = (dispatch) => {
//     return {
//       updateNewPostText: (text) => {
//         let action = UpdateNewPostTextActionCreater(text)
//         dispatch(action);
//       },

//       addPost: () => {
//         dispatch(addPostActionCreater());
//       }
//    }
// }

const MyPostContainer = connect(mapStateToProp, {updateNewPostText, addPost})(MyPosts);

export default MyPostContainer ;