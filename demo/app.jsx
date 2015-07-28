/*global document:false*/
import React from "react";
import {Component} from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        < Component />
      </div>
    );
  }
}

const content = document.getElementById("content");

React.render(<App/>, content);
