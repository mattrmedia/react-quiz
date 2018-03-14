import React from 'react';
import Type from './Type';
import QuestionText from './QuestionText';
import Solutions from './Solutions';
import Image from './Image';
import Button from './Button';
import data from '../questions.json';

export default class Question extends React.Component {

  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {
      data: data[this.index],
      isVisible: true,
      result: 0,
      style: 'default',
    };

    this.checkSolution = this.checkSolution.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion(e) {
    this.index += 1;
    if (this.index < data.length) {
      this.setState({
        data: data[this.index],
        isVisible: true,
        style: 'default',
      });
    } else {
      alert("You're all done. You got " + this.state.result + " correct!")
    }
  }

  incrementResult() {
    this.setState((prevState) => {
      return { result: prevState.result + 1 }
    });
  }

  checkSolution(e) {
    const solution = e.target.previousSibling.value;
    const trueState = {
      data: {
        type: 'Correct!',
        question: this.state.data.explanation,
        image: this.state.data.image,
      },
      isVisible: false,
      style: true,
    };

    const falseState = {
      data: {
        type: 'Incorrect!',
        question: this.state.data.explanation,
        image: this.state.data.image,
      },
      isVisible: false,
      style: false,
    };

    if (solution === this.state.data.answer) {
      this.setState({ ...this.state, ...trueState });
      this.incrementResult();
    } else {
      this.setState({ ...this.state, ...falseState });

    }
  }

  render() {
    return (
      <div>
        <div className="quiz__question">
          <Image image={this.state.data.image} />
          <div className="question__text">
            <Type type={this.state.data.type} style={this.state.style}/>
            <QuestionText question={this.state.data.question} />
          </div>
        </div>
        { this.state.isVisible && <Solutions solutions={this.state.data.solutions} checkSolution={this.checkSolution} /> }
        { !this.state.isVisible && <Button text="Next" nextQuestion={this.nextQuestion} /> }
      </div>
    )
  }
}
