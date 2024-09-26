/*
Create a hook to tell if it is the first render.

function App() {
  const isFirstRender = useIsFirstRender()
  // only true for the first render
  ...
}
*/


import {useRef,useEffect} from 'react';
export function useIsFirstRender() {
  const isFirstRender = useRef(true);
  useEffect(()=>{
    if(isFirstRender.current)
    isFirstRender.current=false
  },[]);
  return isFirstRender.current
  // your code here
}