import React, { Component } from "react";
import Entry from "./Entry";
import PropTypes from "prop-types";

class Entries extends Component {
  state = {
    entries: [
      {
        id: -1,
        dosage: "test_dosage",
        method: "test_dosage",
        time: "00:00",
        name: "test_dosage",
        saved: true,
        hidden: true
      }
    ]
  };

  buttonStyle = () => {
    return {
      backgroundColor: "#57cbcc",
      marginTop: "2px",
      marginBottom: "10px",
      padding: "9px",
      borderColor: "#57cbcc",
      borderWidth: "1.2px",
      borderRadius: "3px",
      borderStyle: "solid",
      textDecoration: "none",
      color: "white",
      fontFamily: "Tahoma"
    };
  };

  addNew = () => {
    this.state.entries.push({
      saved: false,
      id: this.state.entries.length,
      dosage: "",
      method: "",
      time: "",
      name: ""
    });
    this.forceUpdate();
  };

  deleteEntry = (id) => {
    this.setState({ entries: this.state.entries.splice(id, 1) });
  };

  render() {
    //this refers to the specfic component 'Entries' created in App.js
    // entry refers to the specific entry props(states)'entries' in App.js
    //for object in entires (App.js) that we map through (list) we want to return:
    //entry={entry}, the specifc Entry component will have an entry (object in App.js states) that can be referred to by the attribute/prop .entry
    // similar for key
    return true ? (
      <div>
        <div>
          {this.state.entries.map((entry) => (
            <Entry
              key={entry.id}
              entry={entry}
              deleteEntry={this.deleteEntry}
            />
          ))}
        </div>
        <button id="button" onClick={this.addNew} style={this.buttonStyle()}>
          Add New Medication
        </button>
      </div>
    ) : (
      <p />
    );
  }
}

export default Entries;
