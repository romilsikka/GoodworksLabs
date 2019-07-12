import React,{Component} from "react";
import "./App.css";

class Flexi extends Component {
  constructor(props){
    super(props);
this.state = {
  userInput:{},
  jsonObject:{}
}
  }
  userInput=(e)=>{
    this.setState({
      userInput:{...this.state.userInput,[e.target.name]:e.target.value}
    },()=>{
      this.setState({
        jsonObject:JSON.stringify(this.state.userInput)
      })
    })

}
  render(){
    return (
      <form onSubmit={(e)=>{this.props.onSubmit(e,this.state.jsonObject)}}>
        {this.props.config &&
        this.props.config.items.map((item, index) => {
            return (
              <div key={index} className="App">
                <label>{item.label}</label>
                {item.type === "TextField" ?
                  <input onChange={this.userInput} type="text" name={item.name} />
                       : item.type === "DropDown" ?
                  <select onChange={this.userInput} name={item.name}>
                    {item.values &&
                      item.values.map((value, i) => {
                        return (
                          <option key={i} value={value}>
                            {value}
                          </option>
                        );
                      })}
                  </select>
                : null}
              </div>
            );
          })}
        <input type="submit" value="AddUser" />
      </form>
    );
  }

};

export default Flexi;
