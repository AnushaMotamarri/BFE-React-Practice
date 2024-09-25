/*
As the first React problem, you are asked to create the famous Counter app.

counter starts from 0.
click the '+' button to increment.
click the '-' button to decrement.
*/

import React,{useState} from 'react'

export default function CounterApp() {
    const [counter,setCounter] = useState(0);
    return (
      <div>
        <button data-testid="decrement-button" onClick={()=>{setCounter(counter-1)}}>-</button>
        <button data-testid="increment-button" onClick={()=>{setCounter(counter+1)}}>+</button>
        <p>clicked: {counter}</p>
      </div>
    )
}

/* Test Cases */
//able to increment and decrement  

