import React from 'react';

const QuestionText = (props) => {
  let text = '';

  if (props.answered === true) {
    text = props.explanation;
  } else {
    text = props.question;
  }

  return <h1 className="question">{text}</h1>;
}

export default QuestionText;
