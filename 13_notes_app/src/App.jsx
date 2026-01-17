import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHander = (e) =>{
    e.preventDefault();

    const copyTask = [...tasks];
    copyTask.push({title,details});
    setTasks(copyTask);

    setTitle('');
    setDetails('');
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        submitHander(e);
      }} 
          className='flex flex-col lg:w-1/2 gap-4  items-start p-10 '>
        
          <h1 className='text-4xl font-bold'>Add Notes</h1>

          {/* First Input for heading */}
          <input 
          type="text" 
          placeholder='Enter Task'
          className='px-5 w-full font-medium py-2 border-2 rounded outline-none'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          
          />

          {/* Detailed Note input */}
          <textarea 
          type="text" 
          placeholder='Write notes'
          className='px-5 w-full h-35 py-2 border-2 font-medium rounded outline-none'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
      
          />
        
         <button className='bg-white w-full text-black px-5 py-2 font-medium rounded outline-none active:bg-gray-400'>
            Add Note
          </button>

        {/* <img className='h-50' src="https://gallery.yopriceville.com/downloadfullsize/send/14426" alt="" /> */}
      </form>

      <div className='lg:w-1/2 lg:border-l-2 bg-gray-900 p-10'>
        
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        
        <div className='flex flex-wrap items-start h-full overflow-auto gap-5 mt-5'>
          {tasks.map((elem, idx)=>{

            return (  <div key={idx} className='h-52 w-40 leading-tight rounded-2xl bg-white text-black p-4'>
                        <h3 className='font-bold'>{elem.title}</h3>
                        <p className='leading-tight text-gray-600 font-medium mt-2'>{elem.details}</p>
                      </div>
                  )

          })}
        </div>
      
      </div>
    </div>
  )
}

export default App