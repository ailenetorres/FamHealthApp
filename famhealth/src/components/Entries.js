import React, { Component } from "react";
import Entry from "./Entry";

class Entries extends Component {
  state = {
    entries: [
      {
        saved: true,
        id: 0,
        dosage: "TestDosage",
        method: "TestMethod",
        time: "TestTime",
        name: "TestName"
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
      color: "white"
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

  deleteEntry = (entry) => {
    //creates a copy of entries
    var copy = this.state.entries.slice();
    //removes the desired element from the entry
    copy = copy.slice(0, entry.id).concat(copy.slice(entry.id + 1));

    //updates the id of each element to match its position on the list
    for (var i = 0; i < copy.length; i++) {
      copy[i].id = i;
    }
    //sets entries to the modified array
    this.setState({
      entries: copy
    });
  };

  editEntry = (entry) => {
    //creates a copy of entries
    var copy = this.state.entries;
    copy[entry.id].saved = false;
    this.setState({
      entries: copy
    });
  };

  saveEntry = (entry) => {
    var copy = this.state.entries;
    copy[entry.id] = {
      saved: true,
      id: entry.id,
      name: document.getElementById("name").value,
      dosage: document.getElementById("dosage").value,
      method: document.getElementById("method").value,
      time: document.getElementById("time").value
    };
    this.setState({
      entries: copy
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.entries.map((entry) => (
            <Entry
              key={entry.id}
              entry={entry}
              deleteEntry={this.deleteEntry}
              editEntry={this.editEntry}
              saveEntry={this.saveEntry}
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
