import React from "react"; //importing React Library
import ReactDOM from "react-dom";
import App from "./App"; //import main app component that wraps around everything

ReactDOM.render(<App />, document.getElementById("meds"));
//grabs the div from index.html and inserts <App />
