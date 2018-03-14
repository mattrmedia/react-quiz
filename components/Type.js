import React from 'react';

const Type = (props) => {
  let style = 'type';

  if (props.style === true) {
    style += ' type--correct';
  } else if (props.style === false) {
    style += ' type--incorrect';
  } else {
    style;
  }
  return <h1 className={style}>{props.type}</h1>;
}

export default Type;
