import React from "react";
import "./App.css";

const Flexi = (props)=>{
let object;

  const userInput = (e) => {
      const index = props.config.items.findIndex((item)=>{
        return item.type === e.target.name
      })
      let obj = props.config.items;
          obj[index].name = e.target.value;
          object = JSON.stringify(obj);
  }
    return (
      <form onSubmit={e => {props.onSubmit(e, object)}}>
        {props.config && props.config.items.map((item, index) => {
            return (
              <div key={index} className="App">
                <label>{item.label}</label>
                {item.type === "TextField" ? (
                  <input
                    onChange={(e)=>{userInput(e)}}
                    type="text"
                    name={item.type}
                  />
                ) : item.type === "DropDown" ? (
                  <select onChange={(e)=>{userInput(e)}} name={item.type}>
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

export default Flexi;
