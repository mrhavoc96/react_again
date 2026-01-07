import React from 'react'
import RightCardContent from './RightCardContent'


const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 overflow-hidden rounded-4xl relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        
        <RightCardContent idx = {props.idx} status = {props.status} tags = {props.tags} color = {props.color}/>
    </div>
  )
}

export default RightCard