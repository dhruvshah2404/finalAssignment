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
          <option className="value" value="Dhruv">Dhruv</option>
          <option className="value" value="Palak">Palak</option>
          <option className="value"value="Jawad">Jawad</option>
          <option className="value"value="Amit">Amit</option>
        </select>
      </div>
    )
  }
}
export default HeadPost