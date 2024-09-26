/*
Create a PhoneNumberInput component.

only accepts numerical digits
format the number automatically as (123)456-7890 by
adding the parenthesis when the 4th digit is entered
also adding - before 7th digit
You can use the default text input without any styling.
*/
import React from 'react'
export function PhoneNumberInput() {
  let [value,setValue] = React.useState<string>("");
  let formatNumber = (event) => {
    let curr = event.currentTarget.value.replace(/\D/g,'');
    if(curr.length > 10) curr = curr.slice(0,10)
    if(curr.length > 6) curr = `${curr.slice(0,6)}-${curr.slice(6)}`
    if(curr.length > 3) curr = `(${curr.slice(0,3)})${curr.slice(3)}`
    setValue(curr);
  } 
  return <input data-testid="phone-number-input" value={value} onChange={formatNumber}/>
}
// if you want to try your code on the right panel
// remember to export App() component like below









