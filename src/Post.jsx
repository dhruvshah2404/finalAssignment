import React, { Component } from 'react';
import NewComment from "./NewComment"
import Emoji from "./Emoji"
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isHover:false,
      isComment: false,
    }
  }

  toggleLike = () => {

  this.setState(this.toggleHover)
}
  toggleHover=(state)=> {
    return {
      isHover: !state.isHover
    };
  }
  moreComment = () => {
    this.setState(this.toggle)
  }

  toggle = (state) => {
    return {
      isComment: !state.isComment
    }
  }

  render() { 
    return (
      <div className="post" key={this.props.index}>
    <div className="postHead">
      <img
        src={this.props.elem.img}
        alt="UserImage"
        className="postImg"
      />
      <div className="userandtime">
        <div className="userName">
              <h5>{this.props.elem.name}</h5>
          <i className="fas fa-ellipsis-h icon"></i>
        </div>
        <p>{this.props.elem.date}</p>
      </div>
        </div>
        
    <div className="postContent">
      <p> {this.props.elem.post}</p>
        </div>
        {this.state.isHover && 
          <Emoji />
        }
    <div className="likeSection">
          <button id={this.props.elem.id}
            className="likeBtn"
            onClick={this.toggleLike}
      >
        <i className="far fa-thumbs-up"></i> Like {this.props.elem.count}
      </button>
  
      <button className="commentBtn" onClick={this.moreComment}>
        <i className="far fa-comment-alt"></i> Comment
      </button>
      <button className="shareBtn">
        <i className="fas fa-share"></i> Share
      </button>
        </div>
        { this.state.isComment && <NewComment/>}

      </div>)
  }
}
 
export default Post;