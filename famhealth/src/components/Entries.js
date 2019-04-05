import React, { Component } from "react";
import Entry from "./Entry";

class Entries extends Component {
  state = {
    entries: [{}]
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

  //works for all but first one;
  editEntry = (id) => {
    var copy = this.state.entries;
    copy[id].saved = false;
    this.setState({
      copy
    });
  };
  //TODO create saveEntry method
  //Takes in an that has all of the id, name, etc.
  //Saves it and updates the singluar entry

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
