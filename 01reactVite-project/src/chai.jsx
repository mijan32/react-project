import { useState } from 'react';
 function Chai(){
    let [count,setCount]=useState(15)
    function addNumber(){
   setCount(count=>count+1)
   setCount(count=>count+1)
   setCount(count=>count+1)
   setCount(count=>count+1)
   
}
  function removeNumber() {
    setCount(--count)
  }
    return(
        <>
        <h1>Wellcome {count}</h1>
         <button onClick={addNumber} > add Value {count}</button>
        <br/>
        <button onClick={removeNumber}> remove value {count} </button>
        </>
         
    )
}
export default Chai