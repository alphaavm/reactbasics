import React from 'react';
import './Personcss.css';
const person = (props) => {
return (
<div className="Person">
  <p onClick={props.click}> Hi, I am {props.name} and I am new here and my age is {props.age}</p>
 {props.children}
{props.value}
<input type="text" onChange={props.changed} value={props.name}/>
</div>
);
};

export default person;
