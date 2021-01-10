import React, { Component } from "react";
import "./App.css";
import AddPostContainer from "./AddPostContainer";
import PostContainer from "./PostContainer";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleHover = this.handleHover.bind(this);
    this.state = {
      allcomment: [
        {
          name: "Dhruv",
          img:
            "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg",
          post: "Hello I am first here",
          id: 0,
          date: moment().calendar(),
          count: 10
        },
        {
          name: "Dhruv",
          img:
            "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg",
          post: "Seconddddddddddddddd",
          id: 1,
          date: moment().calendar(),
          count: 8
        },
        {
          name: "Dhruv",
          img:
            "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg",
          post: "I am third",
          id: 2,
          date: moment().calendar(),
          count: 10
        },
        {
          name: "Dhruv",
          img:
            "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg",
          post: "Im fourth",
          id: 3,
          date: moment().calendar(),
          count: 10
        },
        {
          name: "Palak",
          img:
            "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg",
          post: "I am fine coming last",
          id: 4,
          date: moment().calendar(),
          count: 50
        }
      ],
      currentUser: {},
      id: 5
    };
  }

  increaseLike = postId => {
    const arraylikes = this.state.allcomment.map(e => {
      if (e.id === postId) {
        e.count++;
      }
      return e;
    });
    this.setState({ allcomment: arraylikes });
  };

  addComment = input => {
    this.setState({ id: this.state.id + 1 });
    let newPost = {
      name: this.state.currentUser.name,
      img: this.state.currentUser.img,
      post: input,
      id: this.state.id,
      date: moment().calendar(),
      count: 0,
      isHover: false
    };

    this.state.allcomment.unshift(newPost);
    let newcomment = this.state.allcomment;
    this.setState({ allcomment: newcomment });
  };

  changeUser = user => {
    // let newArry = this.state.currentUser;
    let newUser = {
      name: user,
      img: ""
    };
    if (newUser.name === "Palak") {
      newUser.img =
        "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg";
    } else if (newUser.name === "Jawad") {
      newUser.img =
        "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg";
    } else if (newUser.name === "Dhruv") {
      newUser.img =
        "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg";
    } else if (newUser.name === "Amit") {
      newUser.img =
        "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg";
    }
    this.setState({ currentUser: newUser });
  };
  // handleHover = likeid => {
  //   const newlike =
  //   this.state.allcomment.map(e => {
  //     if (e.id === likeid) {
  //       this.setState(this.toggleHover);
  //       console.log("id is same")
  //     }
  //   });
  //   this.setState({allcomment:newlike})
  // };

  render() {
    return (
      <main>
        <AddPostContainer
          addComment={this.addComment}
          changeUser={this.changeUser}
          currentUser={this.state.currentUser}
        />
        <div className="postContainer">
          <PostContainer
            allcomment={this.state.allcomment}
            like={this.increaseLike}
          />
        </div>
      </main>
    );
  }
}
export default App;
