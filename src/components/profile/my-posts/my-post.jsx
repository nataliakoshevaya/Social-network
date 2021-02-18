import style from './my-posts.module.css';
import Post from './posts/Post';
import React, {Component} from 'react'

class MyPosts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({
      value: ''
    })
   
  }

  render() {
    let postsEl = this.props.posts.map(m => {
      return (
        <Post message={m.message} like={m.likeCount} />
      )
    });

    return (
      <div className={style.posts}>
        <div className={style.postWrapper}>
          <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg" alt="avatar" />
          <form className={style.newPost} onSubmit={this.handleSubmit}>
            <textarea className={style.postInput} value={this.state.value} placeholder="write something" onChange={this.handleChange}></textarea>
            <button className={style.postBtn} value="submit">Post</button>
          </form>
        </div>
        {postsEl}
      </div>
    )
  }

}

export default MyPosts;