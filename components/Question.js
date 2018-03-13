import React from 'react';
import Type from './Type';
import QuestionText from './QuestionText';
import Solutions from './Solutions';
import Image from './Image';
import data from '../questions.json';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: data[0].type,
      image: data[0].image,
      question: data[0].question,
      solutions: data[0].solutions,
      answer: data[0].answer,
    };
    this.checkSolution = this.checkSolution.bind(this);
  }

  checkSolution(e) {
    const solution = e.target.previousSibling.value;
    if (solution === this.state.answer) {
      this.setState({
        type: 'Correct',
        question: data[0].explanation,
      });
    }
  }

  render() {
    return (
      <div className="quiz__question">
        <Image data={ this.state.image } />
        <div className="question__text">
          <Type type={ this.state.type } />
          <QuestionText question={ this.state.question } />
        </div>
        <Solutions solutions={ this.state.solutions } checkSolution={this.checkSolution} />
      </div>
    )
  }
}
