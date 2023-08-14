import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'


function FeedbackItem({item, handleDelete}) {
  const {rating, text} = item


  return (
    <Card>
    <div className='num-display'>{rating}</div>
    <button className='close' onClick={() => handleDelete(item)}> <FaTimes color='purple' /> </button>
    <div className='text-display '>
        {text}
    </div>
    </Card>
  )
}

export default FeedbackItem