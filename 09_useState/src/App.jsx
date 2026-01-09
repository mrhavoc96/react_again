import React, { useState } from 'react'
import Counter from './components/Counter';

const App = () => {
  
  //  Does not work like this
  // let a = 20;
  // function changeA(){
  //   a++;
  // }

  // What works (useState hook)
  const [num, setNum] = useState(20)

  function changeNum(){
    setNum(30);
  }

  return (
    //  Does not work like this 
    // <div>
    //   <h1>Value of a is {a}</h1>
    //   <button onClick={changeA}> Click </button>
    // </div>

    <>
    
    
    {/* This works */}
      <div className='example'>
        <h1>Value of num is {num}</h1>
        <button onClick={changeNum}>Click</button>
      </div>

      {/* seperate mini-project counter */}
      <Counter/>
    </>
  )
}

export default App