import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id = 'right' className='h-full flex rounded-4xl flex-nowrap overflow-x-auto gap-10 p-6 w-2/3'>
        {props.users.map(function(elem, idx){
            return <RightCard color = {elem.color} idx = {idx} img = {elem.img} status = {elem.status} tags = {elem.tag}/>
        })}
    </div>
  )
}

export default RightContent