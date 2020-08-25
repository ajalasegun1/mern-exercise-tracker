import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };
    console.log(user);

    this.setState({
      username: "",
    });

    axios.post("http://localhost:5000/users/add", user)
    .then(res => console.log(res.data))
  };

  render() {
    return (
      <div>
        Create user
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="name@example.com"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
