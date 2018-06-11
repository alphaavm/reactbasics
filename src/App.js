import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {
  state ={
    persons: [
      {name:'alpha',age:21},
      {name:'beta',age:22},
      {name:'gama',age:23}
    ],
   othereg:'Some value'
  }

  switchNameHandler=(newName)=>{
  //  console.log("This was clicked");
  //wrong mutaion this.state.person[0].name="alphavm";
  this.setState({persons: [
    {name:"alphavm",age:21},
    {name:newName,age:22},
    {name:"gama",age:33}
]
  })
  }


  nameChangedHandler=(event)=>{

  this.setState({persons: [
    {name:event.target.value,age:21},
    {name:'Beta',age:22},
    {name:"gama",age:33}
  ]
  })
  }
  render() {
    const style={
      'background-color':'White',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };
    return (

      <div className="App">
    <h1>Hey,Hii whats up</h1>
    <button style={style} onClick={()=>this.switchNameHandler('betatest')}>Click to Switch</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'lol')}
  changed={this.nameChangedHandler}/>

      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I am pretty Dont you think </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       <Person value={this.state.othereg}/>

      </div>
    );//the person tag is the variable we declared at the time of import
    //return react.createElement('div',{className:'App'},ReactcreateElement{})
  }
}

export default App;
