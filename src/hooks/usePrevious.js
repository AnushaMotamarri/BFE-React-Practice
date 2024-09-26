/*
Create a hook usePrevious() to return the previous value, with initial value of `undefined.
*/
import {useRef} from 'react';
export function usePrevious(value){
  // your code here
  const prev = useRef();
  const retValue = prev.current;
 prev.current = value;
 return retValue
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }


