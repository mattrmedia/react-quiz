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
    const { explanation, answer } = this.state.data[index];
    let state = { ...this.state };

    if (solution === answer) {
      state.data[index].type = 'Correct!';
      state.data[index].question = explanation;
      state.isVisible = false;
      state.style = true;
      this.setState({ ...state });
      this.incrementResult();
    } else {
      state.data[index].type = 'Incorrect!';
      state.data[index].question = explanation;
      state.isVisible = false;
      state.style = true;
      this.setState({ ...state });
    }
  }

  render() {
    const { style, isVisible, index } = this.state;
    const { image, type, solutions, question } = this.state.data[index];
    return (
      <div>
        <div className="quiz__question">
          <Image image={image} />
          <div className="question__text">
            <Type type={type} style={style}/>
            <QuestionText question={question} />
          </div>
        </div>
        { isVisible && <Solutions solutions={solutions} checkSolution={this.checkSolution} /> }
        { !isVisible && <Button text="Next" nextQuestion={this.nextQuestion} /> }
      </div>
    )
  }
}
