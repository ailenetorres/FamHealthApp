import React, { Component } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

export class Entry extends Component {
  //can use function to return style

  entryStyle = () => {
    return {
      backgroundColor: "#fff5ee",
      width: "70%",
      padding: "10px",
      textDecoration: "none",
      marginBottom: "5px"
    };
  };

  nameStyle = () => {
    return {
      fontSize: "18px"
    };
  };

  editButtonStyle = () => {
    return {
      backgroundColor: "#57cbcc",
      marginTop: "2px",
      marginBottom: "10px",
      marginRight: "5px",
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

  editNameStyle = () => {
    return {
      resize: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontFamily: "Tahoma",
      padding: "2px",
      outline: "none",
      borderRadius: "2px",
      width: "100%",
      lineHeight: "1.4",
      fontSize: "1.17em"
    };
  };

  editTextStyle = () => {
    return {
      resize: "none",
      overflow: "hidden",
      fontFamily: "Tahoma",
      padding: "2px",
      outline: "none",
      borderRadius: "2px",
      width: "100%",
      lineHeight: "1.4",
      marginBottom: "3px",
      marginTop: "3px",
      fontSize: "14px"
    };
  };

  saveClick = () => {
    //changes state and then re-renderds the component
    this.props.entry.saved = true;
    this.props.entry.name = document.getElementById("name").value;
    this.props.entry.dosage = document.getElementById("dosage").value;
    this.props.entry.method = document.getElementById("method").value;
    this.props.entry.time = document.getElementById("time").value;
    this.forceUpdate();
  };

  editClick = () => {
    this.props.entry.saved = false;
    this.forceUpdate();
  };

  deleteClick = () => {
    this.props.entry.key = -1;
    this.forceUpdate();
  };

  render() {
    return this.props.entry.saved && this.props.entry.key !== -1 ? (
      <div style={this.entryStyle()}>
        <div style={{ opacity: this.props.entry.dosage === "" ? 0.5 : 1 }}>
          <p style={this.nameStyle()}>
            {this.props.entry.name === "" ? "Name" : this.props.entry.name}
          </p>
          <p
            style={{ marginBottom: "3px", marginTop: "3px", fontSize: "14px" }}
          >
            {this.props.entry.dosage === ""
              ? "Dosage"
              : this.props.entry.dosage}
          </p>
          <p
            style={{ marginBottom: "3px", marginTop: "3px", fontSize: "14px" }}
          >
            {this.props.entry.method === ""
              ? "Method"
              : this.props.entry.method}
          </p>
          <p
            style={{ marginBottom: "3px", marginTop: "3px", fontSize: "14px" }}
          >
            {this.props.entry.time === "" ? "Time" : this.props.entry.time}
          </p>
        </div>
        <button
          type="button"
          style={this.editButtonStyle()}
          onClick={this.editClick}
        >
          Edit
        </button>
        <button
          type="button"
          style={this.editButtonStyle()}
          onClick={this.props.deleteEntry.bind(this, this.props.key)}
        >
          Delete
        </button>
      </div>
    ) : this.props.entry.key !== -1 ? (
      <div style={this.entryStyle()}>
        {/*One button is clicked, the component updates to the saved version*/}
        <form>
          <p>Medication Name:</p>
          <TextareaAutosize
            minRows="1"
            maxRows="1"
            id="name"
            placeholder="Name"
            defaultValue={
              this.props.entry.name === "" ? "" : this.props.entry.name
            }
            style={this.editNameStyle()}
          />
          <br />

          <p>Dosage:</p>
          <TextareaAutosize
            minRows="1"
            maxRows="1"
            id="dosage"
            placeholder="Dosage"
            defaultValue={
              this.props.entry.dosage === "" ? "" : this.props.entry.dosage
            }
            style={this.editTextStyle()}
          />
          <br />
          <p>Method of Administration:</p>
          <select
            id="method"
            style={{ marginTop: "3px", marginBottom: "3px" }}
            defaultValue={
              this.props.entry.method === "" ? "" : this.props.entry.method
            }
          >
            <option value="Mouth">Mouth</option>
            <option value="Injection">Injection</option>
            <option value="Dropper">Dropper</option>
            <option value="nasal spray">Nasal Spray</option>
            <option value="inhalation">Inhalation</option>
            <option value="topical">Topical</option>
            <option value="IV">IV</option>
          </select>
          <br />
          <p>Time:</p>
          <input
            type="time"
            id="time"
            name="time"
            min="0:00"
            max="24:00"
            required
            defaultValue={
              this.props.entry.time === "" ? "" : this.props.entry.time
            }
            style={{ marginTop: "3px", marginBottom: "3px" }}
          />
          <br />
          <button
            type="button"
            style={this.editButtonStyle()}
            onClick={this.saveClick}
          >
            Save
          </button>
        </form>
      </div>
    ) : (
      <p />
    );
  }
}

// PropTypes
Entry.propTypes = {
  entry: PropTypes.object.isRequired
};

/*
CAN USE VARIABLES AS STYLES
const entryStyle = {
  fontFamily: "Times New Roman",
  backgroundColor: "#184860"
};
*/

export default Entry;
