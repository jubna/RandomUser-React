import React, { Component } from 'react'
import ReactDOM from "react-dom";

class App extends Component
{
  constructor(props){
    super(props)
   
   
    this.state={
      items:[]
    }
      this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
   
    event.preventDefault();
    fetch(`https://randomuser.me/api?results=${this.state.value}`)
    .then((response)=>
      response.json())
    .then((response)=>{

      this.setState({
        items:response.results
      })
     
    })
  
  }
  componentDidMount(){
    
  }
  render(){
    var {items}=this.state;
  
  
 
    return(
      <div className="container">
        <h1>Random User Generator</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Number of Users: 
           <input type="text" id="value" value={this.state.value} onChange={this.handleChange} /> 
        
        </label>
        <input type="submit" value="Submit"/>
      </form>
        {items.map(item=>(<div className="card" style={item.dob.age>0&&item.dob.age<=18?{backgroundColor:"blue"}:item.dob.age>18&&item.dob.age<36?{backgroundColor:"green"}:{backgroundColor:"red"}} >
           <div className="card-body">
        <h5 className="card-title">Name: {item.name.first} {item.name.last}</h5> 
        <p className="card-text"  id="age">Age:{item.dob.age}</p>
        </div>
        </div>))}
      </div>
    )
  
}
}
export default App;