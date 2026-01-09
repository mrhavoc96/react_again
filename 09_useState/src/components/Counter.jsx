import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [num, setnum] = useState(0)

	function increaseNum(){
		setnum(num + 1);
	}
	
	function decreaseNum(){
		setnum(num - 1);
	}

	function increaseFive(){
		setnum(num + 5);
	}

	return (
    	<div className='counter'>
        	<h1>{num}</h1>

			<div className="buttons">
				<button onClick={increaseNum}>Increase</button>
				<button onClick={decreaseNum}>Decrease</button>
				<button onClick={increaseFive}>Increase by 5</button>
			</div>
    	</div>
  	)
}

export default Counter