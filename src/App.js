import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{
      name: 'Andrzej', age:24},{name: 'Wiktoria',age: 22}, {name:'Mateusz',age:25}
    ]
  }
switchNameHandler = (newName) => {
  this.setState({persons: [{
    name: newName, age:24},{name: 'Wiktoria',age: 28}, {name:'Mati',age:25}
  ]
})
}

nameChangedHandler = (event) => {
  this.setState({persons: [{
    name: 'Andrzej', age:24},{name: 'Wiktoria',age: 28}, {name:event.target.value,age:25}
  ]
})
}

  render() {
      const style={
        backgroundColor:"white",
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
      <div className="App">
      <h1>Siemanko, jestem Andrzej</h1>
      <p>I love you</p>
      <button style={style} onClick={() => this.switchNameHandler('Andrzejek!')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person click={this.switchNameHandler.bind(this,'Szemkel')} name={this.state.persons[1].name} age={this.state.persons[1].age}>Lubię jeść babeczki!</Person>
      <Person changed={this.nameChangedHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi! I\'m Andrzej!!!'));
  }
}

export default App;
