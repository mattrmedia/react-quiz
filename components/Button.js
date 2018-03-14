import React from 'react';

const Button = (props) => {
  return (
    <button className="quiz__btn" onClick={props.nextQuestion}>{props.text}</button>
  );
};

export default Button;
