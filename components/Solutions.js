import React from 'react';
import Radio from './Radio';

const Solutions = (props) => {

  const radios = props.solutions.map((solution, id) => <Radio data={ solution } id={ id } key={ id } handleClick={ props.checkSolution } />);

  return (
    <div className="quiz__solutions">
      { radios }
    </div>
  );
};

export default Solutions;
