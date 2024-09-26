/*
Create a hook to easily use setTimeout(callback, delay).

reset the timer if delay changes
DO NOT reset the timer if only callback changes
*/


import {useEffect,useRef} from 'react';
export function useTimeout(callback,delay) {
  // your code here

  const callbackRef = useRef(callback);
  useEffect(()=>{
  callbackRef.current = callback;
  },[callback])

  useEffect(()=> {
    const id = setTimeout(()=>callbackRef.current(),delay);
    return () => clearTimeout(id)
  }, [delay])
  

}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }


/*test cases*/
/*
callback should be triggered after the delay  

timeout should be cleared when unmounted  

reset timeout when delay changes  

NOT reset timeout when callback changes  
*/

