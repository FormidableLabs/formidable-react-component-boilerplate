// BUG: babel-eslint fails to honor control comment globals.
// github.com/FormidableLabs/formidable-react-component-boilerplate/issues/19
/*global document:false*/
import React from "react";
import BoilerplateComponent from "../src/index";

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
