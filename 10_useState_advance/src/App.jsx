import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState({user:"Vikas", age: 23});
  const [dum, setDum] = useState([10,20,30,40,50]);
  const [gum, setGum] = useState(0);

  

  const btnClickedArr = () => {
    
    const newDum = [...dum];
    newDum.push(99);

    setDum(newDum);

  }



  const btnClicked = () => {
    
    const newNum = {...num};
    newNum.user = "Akash";
    newNum.age = 21; 
    setNum(newNum);

  }
  // Another method for handling immutable state updates 
  const btnClicked2 = () => {
    // short method.
    setNum(prev=>({...prev, age:50}))
  }

  const btnClicked3 = () => {
    // This doesn't increment the number gum by 3 
    // setGum(num + 1);    
    // setGum(num + 1);    
    // setGum(num + 1);    

    // This does increment number gum by 3
    setGum(prev=>(prev + 1));
    setGum(prev=>(prev + 1));
    setGum(prev=>(prev + 1));
    // These are called batch updates

  }

  return (
    <>
      <div>
          <h1>Object: {num.user}, {num.age}</h1>
          <button onClick={btnClicked }>Click</button>
      </div>
      
      <div>
          <h1>Array: {dum}</h1>
          <button onClick={btnClickedArr}>Click</button>
      </div>

      <div>
          <h1>Batch update on number: {gum}</h1>
          <button onClick={btnClicked3}>Click</button>
      </div>

    </>
  )
}

export default App