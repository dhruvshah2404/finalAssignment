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
          img:"https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/16797538_598208323715406_2838823244012192800_o.jpg?_nc_cat=100&_nc_ohc=DmMoiNL6PTcAX9ox1vf&_nc_ht=scontent-yyz1-1.xx&oh=673c0b2fcafcff4b0b03eb643e77e38e&oe=5EDAFB2D",
          post: "Hello I am first here",
          id: 0,
          date: moment().calendar(),
          count: 10
        },
        {
          name: "Dhruv",
          img:"https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/16797538_598208323715406_2838823244012192800_o.jpg?_nc_cat=100&_nc_ohc=DmMoiNL6PTcAX9ox1vf&_nc_ht=scontent-yyz1-1.xx&oh=673c0b2fcafcff4b0b03eb643e77e38e&oe=5EDAFB2D",
          post: "Seconddddddddddddddd",
          id: 1,
          date: moment().calendar(),
          count: 8
        },
        {
          name: "Dhruv",
          img:"https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/16797538_598208323715406_2838823244012192800_o.jpg?_nc_cat=100&_nc_ohc=DmMoiNL6PTcAX9ox1vf&_nc_ht=scontent-yyz1-1.xx&oh=673c0b2fcafcff4b0b03eb643e77e38e&oe=5EDAFB2D",
          post: "I am third",
          id: 2,
          date: moment().calendar(),
          count: 10
        },
        {
          name: "Dhruv",
          img:"https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/16797538_598208323715406_2838823244012192800_o.jpg?_nc_cat=100&_nc_ohc=DmMoiNL6PTcAX9ox1vf&_nc_ht=scontent-yyz1-1.xx&oh=673c0b2fcafcff4b0b03eb643e77e38e&oe=5EDAFB2D",
          post: "Im fourth",
          id: 3,
          date: moment().calendar(),
          count: 10
        },
        {
          name: "Palak",
          img: "https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-1/c2.0.240.240a/p240x240/29572944_772072992963106_8349925219908521894_n.jpg?_nc_cat=101&_nc_ohc=FSazlhKrWxIAX-Nbx2j&_nc_ht=scontent.fyyc3-1.fna&oh=bf80dce23f8f149714ae9be5fcc74628&oe=5ED8E67F",
          post: "I am fine coming last",
          id: 4,
          date: moment().calendar(),
          count: 50
        }
      ],
      currentUser: {},
      id: 5,
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
      img:this.state.currentUser.img,
      post: input,
      id: this.state.id,
      date: moment().calendar(),
      count: 0,
      isHover: false,   
    }

    this.state.allcomment.unshift(newPost);
    let newcomment = this.state.allcomment;
    this.setState({ allcomment: newcomment });
  };

  changeUser = user => {
    // let newArry = this.state.currentUser;
    let newUser = {
      name: user,
      img: ''
    }

    if (newUser.name === "Palak") {
      newUser.img="https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-1/c2.0.240.240a/p240x240/29572944_772072992963106_8349925219908521894_n.jpg?_nc_cat=101&_nc_ohc=FSazlhKrWxIAX-Nbx2j&_nc_ht=scontent.fyyc3-1.fna&oh=bf80dce23f8f149714ae9be5fcc74628&oe=5ED8E67F"
    } else if (newUser.name === "Jawad") {
      newUser.img="https://media-exp1.licdn.com/dms/image/C4E03AQE837Yz3F5T2A/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=7GACtUgliJ7mbqt5-EJ7-4Ua4_GxuBt8DUf5U-P0vj8"
    } else if (newUser.name === "Dhruv") {
      newUser.img="https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/16797538_598208323715406_2838823244012192800_o.jpg?_nc_cat=100&_nc_ohc=DmMoiNL6PTcAX9ox1vf&_nc_ht=scontent-yyz1-1.xx&oh=673c0b2fcafcff4b0b03eb643e77e38e&oe=5EDAFB2D"

    } else if (newUser.name === "Amit") {
      newUser.img="https://previews.agefotostock.com/previewimage/medibigoff/d17f88daba31455a7ee27cabfce867c6/we050686.jpg"
    }
    this.setState({currentUser:newUser})
  }
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
        <AddPostContainer addComment={this.addComment} changeUser={this.changeUser} currentUser={this.state.currentUser}/>
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
