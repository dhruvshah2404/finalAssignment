import React, { Component } from "react";
import Post from './Post'
class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <React.Fragment>
        {this.props.allcomment.map((elem, index) => (
          <Post elem={elem} index={index} allcomment={this.props.allcomment} like={this.props.like}/>
        ))}
      </React.Fragment>
    );
  }
}

// PostContainer.propTypes = propTypes;
export default PostContainer;
