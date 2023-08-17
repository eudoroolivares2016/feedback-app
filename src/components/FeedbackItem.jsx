import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItem({item}) {
  const {handleDelete, handleEdit} = useContext(FeedbackContext)
  const {rating, text} = item


  return (
    <Card>
    <div className='num-display'>{rating}</div>
    <button className='close' onClick={() => handleDelete(item)}>
        <FaTimes color='purple' /> </button>
    <button className='edit' onClick={() => handleEdit(item)}> 
      <FaEdit color='purple'></FaEdit> </button>
    <div className='text-display '>
        {text}
    </div>
    </Card>
  )
}

export default FeedbackItem