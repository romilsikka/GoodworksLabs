import React, { Component } from "react";
import "./App.css";

class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputValues: {},
      jsonObject: {}
    };
  }
  userInput = e => {
    this.setState(
      {
        userInputValues: { ...this.state.userInputValues, [e.target.name]: e.target.value }
      },
      () => {
        this.setState({
          jsonObject: JSON.stringify(this.state.userInputValues)
        });
      }
    );
  };
  render() {
    const {jsonObject} = this.state;
    return (
      <form onSubmit={e => {this.props.onSubmit(e, jsonObject)}}>
        {this.props.config && this.props.config.items.map((item, index) => {
            return (
              <div key={index} className="App">
                <label>{item.label}</label>
                {item.type === "TextField" ? (
                  <input
                    onChange={this.userInput}
                    type="text"
                    name={item.name}
                  />
                ) : item.type === "DropDown" ? (
                  <select onChange={this.userInput} name={item.name}>
                    {item.values && item.values.map((value, i) => {
                        return (
                          <option key={i} value={value}>
                            {value}
                          </option>
                        );
                      })}
                  </select>
                ) : null}
              </div>
            );
          })}
        <input type="submit" value="AddUser" />
      </form>
    );
  }
}

export default Flexi;
