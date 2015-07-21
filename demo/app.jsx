/*global document*/

import React from "react";
import BoilerplateComponent from "../src/components/boilerplate-component";

class App {
  render() {
    return (
      <div className="demo">
        < BoilerplateComponent />
      </div>
    );
  }
}

const content = document.getElementById("content");

React.render(<App/>, content);
