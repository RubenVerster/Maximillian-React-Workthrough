import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'Steve', age: 44 },
      { name: 'Beth', age: 90 }
    ],
    otherState: 'some values',
    showPersons: false
  };

  switchUserHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Steve', age: 44 },
        { name: 'Beth', age: 90 }
      ]
      //setState doesn't copy the other data from the previous state. So make sure you add other state elements in the new state
      // personState comes from the array destructuring done above
      // otherState: personsState.otherState
    });
    // const [otherState, setOtherState] = useState('some other values');
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 27 },
        { name: event.target.value, age: 44 },
        { name: 'Beth', age: 90 }
      ]
    });
  };

  togglePersonDisplayHandler = () => {};

  render() {
    const style = {
      backGround: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>This is my React App</h1>
        <button style={style} onClick={this.togglePersonDisplay}>
          Switch Name
        </button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // here we use a property to bind an onClick event with this component
            click={this.switchUserHandler.bind(this, 'Max!!')}
            change={this.nameChangedHandler}
          >
            My Hobbies: Driving
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].name}
          />
        </div>
      </div>
    );
  }
}

export default App;
