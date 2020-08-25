import React, { Component } from "react";
import axios from "axios";
import Exercise from "../components/Exercise";

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) =>
        this.setState({
          exercises: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  deleteExercises = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((res) => {
      console.log(res.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((item) => {
        return item._id !== id;
      }),
    });
  };

  exerciseList = () => {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercises}
          key={currentExercise._id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Description</th>
              <th scope="col">Duration</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExerciseList;
