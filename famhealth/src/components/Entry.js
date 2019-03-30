import React, { Component } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

export class Entry extends Component {
  //can use function to return style

  entryStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      width: "70%",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: "none",
      marginBottom: "5px"
    };
  };

  titleStyle = () => {
    return {
      fontSize: "18px"
    };
  };

  editButtonStyle = () => {
    return {
      backgroundColor: "#245ac6",
      marginTop: "2px",
      marginBottom: "10px",
      marginRight: "5px",
      padding: "9px",
      borderColor: "#759eef",
      borderWidth: "1.2px",
      borderRadius: "3px",
      borderStyle: "solid",
      textDecoration: "none",
      color: "white",
      fontFamily: "Tahoma"
    };
  };

  editTitleStyle = () => {
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
    this.props.entry.title = document.getElementById("title").value;
    this.props.entry.text = document.getElementById("entry").value;
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
    return this.props.entry.saved && this.props.entry.key != -1 ? (
      <div style={this.entryStyle()}>
        <div style={{ opacity: this.props.entry.text === "" ? 0.5 : 1 }}>
          <p style={this.titleStyle()}>
            {this.props.entry.title === "" ? "Title" : this.props.entry.title}
          </p>
          <p
            style={{ marginBottom: "3px", marginTop: "3px", fontSize: "14px" }}
          >
            {this.props.entry.text === "" ? "Text" : this.props.entry.text}
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
          onClick={this.deleteClick}
        >
          Delete
        </button>
      </div>
    ) : this.props.entry.key != -1 ? (
      <div style={this.entryStyle()}>
        {/*One button is clicked, the component updates to the saved version*/}
        <form>
          <TextareaAutosize
            minRows="1"
            maxRows="1"
            id="title"
            placeholder="Title"
            defaultValue={
              this.props.entry.title === "" ? "" : this.props.entry.title
            }
            style={this.editTitleStyle()}
          />
          <br />
          <TextareaAutosize
            minRows="10"
            maxRows="20"
            id="entry"
            placeholder="Text"
            defaultValue={
              this.props.entry.text === "" ? "" : this.props.entry.text
            }
            style={this.editTextStyle()}
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
