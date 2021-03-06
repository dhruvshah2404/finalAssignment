import React, { Component } from "react";
class TypePost extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <div className="typePost">
          <img
            className="userImg"
            src={this.props.currentUser.img || 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} 
            alt="userImg"
          ></img>
          <form id="form">
            <textarea
              type="text"
              className="textarea"
              placeholder="What's on your mind"
              onChange={event => this.setState({ post: event.target.value })}
            ></textarea>
          </form>
        </div>
        <div className="postButton">
              <button
                className="postBtn"
                type="submit"
                onClick={event => {
                  console.log("clicked");
                  event.preventDefault();
                  this.props.addComment(this.state.post);
                  document.getElementById("form").reset();
                }}
              >
                Post
              </button>
        </div>
        
      </React.Fragment>
    );
  }
}

export default TypePost;
