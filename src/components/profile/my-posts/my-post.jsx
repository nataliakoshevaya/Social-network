import style from './my-posts.module.css';  
import Post from './posts/Post'

const MyPosts = () => {
    return(
        <div className={style.posts}>
           
           <div className={style.postWrapper}>
             <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg" alt="avatar"/>
             <form className={style.newPost}>
                <textarea className={style.postInput} placeholder="write something"></textarea>
                <button className={style.postBtn}>Post</button>
             </form>
           </div>
           <Post message="Hello, how are you?" like="10"/>
           <Post message="My first post" like="25"/>
        </div>
    )
}

export default MyPosts;