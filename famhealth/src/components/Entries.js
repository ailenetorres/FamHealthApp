import React, { Component } from "react";
import Entry from "./Entry";

class Entries extends Component {
  state = {
    entries: []
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
    //creates a copy of entries
    var list = this.state.entries.slice();
    //creates a new object to input
    const newEntry = {
      saved: false,
      id: this.state.entries.length,
      dosage: "",
      method: "",
      time: "",
      name: ""
    };
    //adds new object to copy of array
    list.push(newEntry);
    //sets entries to the modified array
    this.setState({
      entries: list
    });
  };

  deleteEntry = (deletedId) => {
    //creates a copy of entries
    var list = this.state.entries.slice();
    //removes the desired element from the entry
    list = list.slice(0, deletedId).concat(list.slice(deletedId + 1));

    //updates the id of each element to match its position on the list
    for (var i = 1; i < list.length; i++) {
      list[i].id = i;
    }
    //sets entries to the modified array
    this.setState({
      entries: list
    });
  };

  render() {
    //this refers to the specfic component 'Entries' created in App.js
    // entry refers to the specific entry props(states)'entries' in App.js
    //for object in entires (App.js) that we map through (list) we want to return:
    //entry={entry}, the specifc Entry component will have an entry (object in App.js states) that can be referred to by the attribute/prop .entry
    // similar for key
    return (
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
    );
  }
}

export default Entries;
