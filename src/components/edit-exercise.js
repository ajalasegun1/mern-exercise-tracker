import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => console.log(err));

    /*axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((item) => {
            return item.username;
          }),
        });
      }
    });*/
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  //another code can come here
  onChangeDate = (date) => {
    this.setState({
      date,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    axios
      .post(
        "http://localhost:5000/exercises/update/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));
    window.location = "/";
  };
  render() {
    return (
      <div>
        Edit exercise
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Select User</label>
            <select
              className="form-control"
              id="username"
              onChange={this.onChange}
            >
              {/*this.state.users.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })*/
              <option value={this.state.username} key={this.state.username}>
              {this.state.username}
            </option>
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="name@example.com"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              className="form-control"
              id="duration"
              placeholder="name@example.com"
              value={this.state.duration}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-warning">
            Edit Exercise Log
          </button>
        </form>
      </div>
    );
  }
}

export default EditExercise;
