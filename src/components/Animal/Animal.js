import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return <div className="animal" style={{ top: props.top, left: props.left }}>
    <img alt={`${props.name}`} src={`./animals/${props.typ}.svg`}></img>
    <span className="name">{`${props.name}`}</span>
    <span>{`${props.says}`}</span>
  </div>;
}
