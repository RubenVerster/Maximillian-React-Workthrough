import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { isTSAnyKeyword } from '@babel/types';
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

  // switchUserHandler = newName => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 27 },
  //       { name: 'Steve', age: 44 },
  //       { name: 'Beth', age: 90 }
  //     ]
  //     //setState doesn't copy the other data from the previous state. So make sure you add other state elements in the new state
  //     // personState comes from the array destructuring done above
  //     // otherState: personsState.otherState
  //   });
  //   // const [otherState, setOtherState] = useState('some other values');
  // };

  deletePersonHandler = personIndex => {
    // this is bad practice for manipulating this.state. so rather make a copy of the original state before manipulating isTSAnyKeyword. use slice to copy the array. but the best is using the spread opertator
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  //here we sdynamically update the specific person by retrieving the id from the paramaters provided in the methods used to change the values
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  //this is how you add toggle functionality to a bool
  togglePersonDisplayHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      background: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* the map function can take two arguments */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                // here we use a property to bind an onClick event with this component
                click={() => this.deletePersonHandler(index)}
                change={this.nameChangedHandler}
                changed={event => this.nameChangedHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );

      style.background = 'red';
    }

    // these classes are joined into one array
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>This is my React App</h1>
        <p className={classes.join(' ')}>It's... ALIVE!!!</p>
        <button style={style} onClick={this.togglePersonDisplayHandler}>
          Toggle Names
        </button>
        {/* you can add JS functionality in componetns by wrapping them in '{}' brackets */}
        {/* ternary operator used to conditionally render content */}
        {/* its not the best method of doing so, so there is a better way applied */}
        {/* {this.state.showPersons === true ? ( */}
        {/* PERSONS COMPONENT CODE */}
        {/* ) : null} */}

        {/* this is the better way to do it
          this is coming from the if statement above */}
        {persons}
      </div>
    );
  }
}

export default App;
