import React, { Component, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import BoardContainer from "./boards/BoardContainer";
import ShowActiveBoard from "./boards/activeBoard/ShowActiveBoard";
import NotFound from "./NotFound";
import Header from "./Header";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import LoginForm from "../loginform/LoginForm";
import { initializeBoards } from "../Actions/SubmitNewBoard";
@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* Define routes without the Header */}
          <Route
            exact
            path="/"
            render={(props) => (
              <LoginForm
                onLogin={this.onLogin}
                onRegister={this.onRegister}
                {...props}
              />
            )}
          />
          <Route component={WithHeader} />
        </Switch>
      </div>
    );
  }
}
const WithHeader = () => (
  <div>
    <Header />
    <Switch>
      {/* Define routes with the Header */}
      <Route exact path="/mainboard" component={BoardContainer} />
      <Route path="/b/:id" component={ShowActiveBoard} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
