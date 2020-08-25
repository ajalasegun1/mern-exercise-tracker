import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Exercise extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.exercise.username}</td>
        <td>{this.props.exercise.description}</td>
        <td>{this.props.exercise.duration}</td>
        <td>{this.props.exercise.date}</td>
        <td>
          <Link to={"/edit/"+this.props.exercise._id}>Edit</Link> |{" "}
          <a
            href="#"
            onClick={() => this.props.deleteExercise(this.props.exercise._id)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
