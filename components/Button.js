import React from 'react';

const Button = (props) => <button className="quiz__btn" onClick={props.nextQuestion}>{props.text}</button>;

export default Button;
