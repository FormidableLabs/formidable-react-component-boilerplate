"use strict";

import React from "react/addons";
import BoilerplateComponent from "../src/boilerplate-component";

const App = React.createClass({

  render() {
    return (
      <div className="demo">
        < BoilerplateComponent >
        </ BoilerplateComponent >
      </div>
    )
  }
});

const content = document.getElementById("content");

React.render(<App/>, content)

