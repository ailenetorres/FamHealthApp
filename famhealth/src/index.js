import React from "react"; //importing React Library
import ReactDOM from "react-dom";
import App from "./App"; //import main app component that wraps around everything
import MapContainer from "./MapContainer";

ReactDOM.render(<App />, document.getElementById("meds"));
ReactDOM.render(<center><MapContainer /></center>, document.getElementById("maps"));

//grabs the div from index.html and inserts <App />
