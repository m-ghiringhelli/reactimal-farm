import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';


export default function Main() {
  return (
    <main>
      {animals.map((animal) => (
        <Animal key={animal.name} name={animal.name} typ={animal.type} says={animal.says} top={animal.top} left={animal.left}/>
      ))}
    </main>
  );
}
