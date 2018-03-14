import React from 'react';

const Type = props => <h1 className={"type " + ((props.style === true) ? 'type--correct' : (props.style === false) ? 'type--incorrect' : '')}>{ props.type }</h1>;

export default Type;
