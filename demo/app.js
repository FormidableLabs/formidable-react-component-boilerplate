/*global document*/

import React from "react/addons";
import BoilerplateComponent from "../src/components/boilerplate-component";

const App = React.createClass({

  render() {
    return (
      <div className="demo">
        < BoilerplateComponent />
      </div>
    );
  }
});

const content = document.getElementById("content");

React.render(<App/>, content);

