import React,{Component} from 'react';
import './App.css';
class App extends Component {
constructor(props){
  super(props)
  this.state = {
    todo:[false,false,false,false,false,false,false,false,false],
    arr:[]
  }
}

// 1,,3,4,5,,7,8,9

toggle=(id,e)=>{
  if(e.shiftKey){
    this.setState({
      arr:[...this.state.arr,id]
    },()=>{
      let count = Math.min(...this.state.arr);
      let max = Math.max(...this.state.arr);
      const tog = this.state.todo.map((item,i)=>{
        if(i===count && count < max ){
          count++;
          return true;
        }
        return item;
      })
      this.setState({
        todo:tog
      })
    });
  }

  const toggle = this.state.todo.map((item,i)=>{
    if(i === id) {
      return !item;
    }
  return item;

  });
  this.setState({
    todo:toggle
  })
}
clearall=()=>{
  const clear = this.state.todo.map((item,i)=>{
    return item = false;
  });
  this.setState({
    arr:[],
    todo:clear
  })
}
render(){
  return (
    <div className="App">
      <button onClick={this.clearall}>clearall</button>
{this.state.todo.map((item,id)=>{
  return <li key={id}><input type="checkbox" checked={item} onClick={(e)=>this.toggle(id,e)}/>{item ? 'True' : 'False'}</li>
})}
    </div>
  )
}
}

export default App;
