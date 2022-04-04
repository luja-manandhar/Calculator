import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const ops = ['/', '*', '+', '-'];
  
  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ) {
        return;
      }
      setCalc(calc + value);
    }

    const calculate = () => {
      setCalc(eval(calc).toString());
    }
    
    const del = () => {
      setCalc("");
    }

  return (
    <div className='App'>
     <div  style={{width: '300px'}}> 
      <div style={{backgroundColor: 'lightgray'}}>
        {calc || 0}
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('0')}>0</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('1')}>1</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('2')}>2</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('3')}>3</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('4')}>4</button>
        <button type="button" class="btn btn-danger" onClick = {del}>C</button>
      </div><br />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('5')}>5</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('6')}>6</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('7')}>7</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('8')}>8</button>
        <button type="button" class="btn btn-primary" onClick = {() => updateCalc('9')}>9</button>
      </div><br />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success" onClick = {() => updateCalc('-')}>-</button>
        <button type="button" class="btn btn-success" onClick = {() => updateCalc('+')}>+</button>
        <button type="button" class="btn btn-success" onClick = {() => updateCalc('*')}>*</button>
        <button type="button" class="btn btn-success" onClick = {() => updateCalc('/')}>/</button>
        <button type="button" class="btn btn-secondary" onClick = {calculate}>=</button>
      </div>   
    </div>
   </div>
  );
}

export default App;
