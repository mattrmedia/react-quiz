import React from 'react';

const styleEnum = {
  default: 'type',
  false: 'type type--incorrect',
  true: 'type type--correct',
};

const Type = props => <h1 className={ styleEnum[props.style] }>{ props.answered ? props.resultText : props.type }</h1>;

export default Type;
