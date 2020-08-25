import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import ExerciseList from "./components/exercise-list";
import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={ExerciseList} />
          <Route path="/create" exact component={CreateExercise} />
          <Route path="/edit/:id" exact component={EditExercise} />
          <Route path="/user" exact component={CreateUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
