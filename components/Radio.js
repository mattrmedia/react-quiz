import React from 'react';

const Radio = (props) => {
  return (
    <div key={props.id}>
      <input id={props.type + "_" + props.id} type="radio" name="solution" value={props.data} />
      <label className="quiz__btn" htmlFor={props.type + "_" + props.id} onClick={props.handleClick} >
        {props.data}
      </label>
    </div>
  );
};

export default Radio;
