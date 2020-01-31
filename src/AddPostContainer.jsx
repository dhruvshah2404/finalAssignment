import React, { Component } from 'react';
import HeadPost from "./HeadPost";
import TypePost from "./TypePost";

// import PostButton from './PostButton'

class AddPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      name: '',
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="addPostContainer">
          <HeadPost changeUser={this.props.changeUser} />
          <TypePost addComment={this.props.addComment} currentUser={this.props.currentUser}/>
        </div>
      </React.Fragment>
    );
  }
}
 
export default AddPostContainer;
