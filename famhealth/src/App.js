import React, { Component } from "react";
import Entries from "./components/Entries";
import "./App.css";

//same as:
//import React from 'react'
// class App extends React.Component

class App extends Component {
  //life cycle method, only one required: used to render component
  //returns JSX (html {javascript}), can't use class="", must use className;

  render() {
    return (
      <div className="App" style={{ marginBottom: "300px" }}>
        <center>
          <Entries />
        </center>
      </div>
    );
  }
}

export default App;
