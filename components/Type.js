import React from 'react';

const Type = (props) => {
  let style = 'type';
  let text = '';

  if (props.style === true) {
    style += ' type--correct';
  } else if (props.style === false) {
    style += ' type--incorrect';
  } else {
    style;
  }

  if (props.answered === true) {
    text = props.resultText;
  } else {
    text = props.type;
  }

  return <h1 className={style}>{text}</h1>;
}

export default Type;
