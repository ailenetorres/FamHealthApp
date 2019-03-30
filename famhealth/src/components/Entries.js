import React, { Component } from "react";
import Entry from "./Entry";
import PropTypes from "prop-types";

class Entries extends Component {
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

  handleClick = () => {
    this.props.entries.push({
      saved: false,
      id: 4,
      dosage: "",
      method: "",
      time: "",
      name: "",
      text: ""
    });
    this.forceUpdate();
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
          {this.props.entries.map((entry) => (
            <Entry key={entry.id} entry={entry} />
          ))}
        </div>
        <button
          id="button"
          onClick={this.handleClick}
          style={this.buttonStyle()}
        >
          Add New Medication
        </button>
      </div>
    ) : (
      <p />
    );
  }
}

// PropTypes
Entries.propTypes = {
  entries: PropTypes.array.isRequired
};

export default Entries;
