import React from 'react';

const QuestionText = props => <h1 className="question">{ props.answered ? props.explanation : props.question }</h1>;

export default QuestionText;
