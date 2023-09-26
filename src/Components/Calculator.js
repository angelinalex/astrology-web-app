import React from 'react';
import './Calculator.css';
import CalculatorBox from './CalculatorBox';
import etching from '../assets/etching.png';

const Calculator = () => {
  return (
    <div className='calculator-container'>
      <div className='calc'>
      <CalculatorBox/>
      </div>
 
    </div>
  )
}

export default Calculator;
