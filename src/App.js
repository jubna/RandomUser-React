import React, { Component } from 'react'
import ReactDOM from "react-dom";

class App extends Component
{
  constructor(props){
    super(props)
    // this.state = {value: ''};

   
    this.state={
      items:[],
      loading:false
    }
      this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    fetch(`https://randomuser.me/api?results=${this.state.value}`)
    .then((response)=>
      response.json())
    .then((response)=>{
      // let name=response.results.map((person)=>{
      //   let age=person.dob.age;
        

      this.setState({
        items:response.results,
        loading:true
      })
      console.log(response.results.dob);
    })
  
  }
  componentDidMount(){
    
  }
  render(){
    var {items,loading}=this.state;
    console.log(items);
    let inputStyle = {
      backgroundColor:""
    };
  console.log(age);
    if(age >=0 && age<=18) {
      inputStyle = {
        backgroundColor:"blue"
      }
  
    }
    else if(age>=19 && age<=36){
      inputStyle = {
        backgroundColor:"green"
      }
    
    }
    else{
      inputStyle = {
        backgroundColor:"red"
      }
      
    }
       

  
 
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
        <label>
          Number of Users: 
           <input type="text" id="value" value={this.state.value} onChange={this.handleChange} /> 
        
        </label>
        <input type="submit" value="Submit"/>
      </form>
        {items.map(item=>(<div className="card" style={inputStyle} >
           <div class="card-body">
        <h5 className="card-title">{item.name.first}{item.name.last}</h5> 
        <p class="card-text"  id="age">{item.dob.age}</p>
        </div>
        </div>))}
      </div>
    )
  }
}
export default App;