import React from 'react';

const Radio = (props) => {
  return (
    <div key={props.id}>
      <input id={"solution_" + props.id} type="radio" name="solution" value={props.data} />
      <label className="quiz__btn" htmlFor={"solution_" + props.id} onClick={props.handleClick} >
        {props.data}
      </label>
    </div>
  );
};

export default Radio;
