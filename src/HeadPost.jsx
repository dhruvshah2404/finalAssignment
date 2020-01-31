import React, { Component } from 'react';

class HeadPost extends Component {
  state = {};

  onChange = (event) => {
    this.props.changeUser(event.target.value)
  }
    render() {
    return (
      <div className="headPost">
        <p className="header">Create Post</p>
        <select className="selectUser" id="user" onChange={this.onChange}>
          <option value="Dhruv">Dhruv</option>
          <option value="Palak">Palak</option>
          <option value="Jawad">Jawad</option>
          <option value="Amit">Amit</option>
        </select>
      </div>
    )
  }
}
export default HeadPost