
import React from "react";
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCampuses from './allCampuses'
import AllStudents from './allStudents'
import store from "../store";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
      </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <Switch>
          <Route  path='/campuses' component={AllCampuses} />
          <Route  path='/students' component={AllStudents} />
        </Switch>
      </div>
    </Router>
  ) 
}

export default Root  