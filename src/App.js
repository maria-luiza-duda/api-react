import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import List from "./pages/List";
import Form from "./pages/Form";

export default class App extends React.Component {
  
  render(){
    return(
      <Router>
        <Switch>

        <Route exact path="/">
            <List/>
          </Route>

          <Route exact path="/form">
            <Form/>
          </Route>

          <Route exact path="/form/:id">
            <Form/>
          </Route>

        </Switch>
      </Router>
    )
  }
}