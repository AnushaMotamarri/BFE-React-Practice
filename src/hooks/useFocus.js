
import { useEffect, useRef, useState } from 'react'
export function useFocus() {
  const [isFocused, setFocused] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const currentElement = ref.current
      if (!currentElement)
      return
    // !!IMPORTANT!! 
    // initialize the focus state when currentElement changes.
    setFocused(document.activeElement === currentElement)
    currentElement.addEventListener('focus', () => setFocused(true))
    currentElement.addEventListener('blur', () => setFocused(false))
    return () => {
      currentElement.removeEventListener('focus', () => setFocused(true))
      currentElement.removeEventListener('blur', () => setFocused(false))
    }
  }, [ref.current]) // now we can pass a dependency array to get much better performance.
  return [ref, isFocused]
}