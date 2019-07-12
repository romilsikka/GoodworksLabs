import React, { Component } from "react";
import "./App.css";
import Flexi from "./flexi";

const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField"
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: []
    };
  }
  onFlexSubmit = (e, object) => {
    e.preventDefault();
      this.setState({
        Person:object
      })
  };
  render() {
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexSubmit} config={flexiConfig} />
      </div>
    );
  }
}

export default App;
