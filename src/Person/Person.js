import React from 'react';
import './Person.css';

const Person = props => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age}
      </p>
      <p>{props.children}</p>
      {/* two way binding using props passed from state changes */}
      <input type="text" value={props.name} onChange={props.change} />
    </div>
  );
};

export default Person;
