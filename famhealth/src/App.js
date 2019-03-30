import React, { Component } from "react";
import Entries from "./components/Entries";
import MapContainer from "./MapContainer";
import "./App.css";

//same as:
//import React from 'react'
// class App extends React.Component

class App extends Component {
  //life cycle method, only one required: used to render component
  //returns JSX (html {javascript}), can't use class="", must use className;
  state = {
    entries: []
  };

  render() {
    return (
      <div className="App" style={{marginBottom: "300px"}}>
        <center><Entries entries={this.state.entries}></ Entries></center>
      </div>
    );
  }
}

export default App;
