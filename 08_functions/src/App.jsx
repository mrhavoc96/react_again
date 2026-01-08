import React from 'react'

const App = () => {

  const buttonClicked = () => {
    console.log("Button Clicked");
  };

  function inputChanging(val){
    console.log(val);
        
  }

  return (
    <div>
      <div className="events">

        {/* function written separate   Note: we are using arrow function, calling function using braces will execute it as soon as the page loads, unintentionally*/}
        <button onClick={buttonClicked}> Click it! </button>
        
        {/* Function written within the button tag */}
        <button onMouseOver={() => {
            console.log("Mouse over button")

        }}> Mouse over </button>

        <input type="text" placeholder='Enter text' onChange={function(e){
          inputChanging(e.target.value);
        }}/>
      
      </div>

      <div className='box' onMouseMove={(e) => {
        console.log(e.clientX, e.clientY)
      }}>  </div>


      <div onWheel={(e) => {
        console.log("Page scrolling at speed:", e.deltaY);
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>


    </div>
  )
}

export default App