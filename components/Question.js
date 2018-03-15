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
    this.state = {
      index: 0,
      data: data,
      isVisible: true,
      result: 0,
      style: 'default',
      answered: false,
      resultText: '',
    };

    this.checkSolution = this.checkSolution.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const index = this.state.index + 1;
    let state = { ...this.state };
    if (index < data.length) {
      state.index = index;
      state.isVisible = true;
      state.style = 'default';
      state.answered = false;
      this.setState({ ...state });
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
    const { index } = this.state
    const { answer } = this.state.data[index];
    let state = { ...this.state };

    if (solution === answer) {
      state.resultText = 'Correct!';
      state.isVisible = false;
      state.style = true;
      state.answered = true;
      this.setState({ ...state });
      this.incrementResult();
    } else {
      state.resultText = 'Incorrect!';
      state.isVisible = false;
      state.style = false;
      state.answered = true;
      this.setState({ ...state });
    }
  }

  render() {
    const { style, isVisible, index, resultText, answered  } = this.state;
    const { image, type, solutions, question, explanation } = this.state.data[index];
    console.log(this.state)
    return (
      <div>
        <div className="quiz__question">
          <Image image={image} />
          <div className="question__text">
            <Type type={type} style={style} resultText={resultText} answered={answered} />
            <QuestionText question={question} explanation={explanation} answered={answered} />
          </div>
        </div>
        { isVisible && <Solutions solutions={solutions} checkSolution={this.checkSolution} /> }
        { !isVisible && <Button text="Next" nextQuestion={this.nextQuestion} /> }
      </div>
    )
  }
}
