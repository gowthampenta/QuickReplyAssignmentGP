// src/App.js

import React from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import "./App.css";

const App = () => {
  const handleSelect = (item) => {
    console.log("Selected item:", item);
  };

  return (
    <div className="App">
      <h1>Dropdown Component Demo</h1>
      <Dropdown
        label="Select an option"
        labelVisibility="Visible"
        status="Unfilled"
        labelIconVisibility="Visible"
        leftIconVisibility="Visible"
        helperText="Please select an option from the dropdown"
        required="No"
        text=""
        type="SingleNoIcon"
        activeItemIndex={-1}
        items={["Option 1", "Option 2", "Option 3"]}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
