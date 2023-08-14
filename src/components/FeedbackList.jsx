import React from 'react'

import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length=== 0){
    return <p> No feedback yet</p>
     
  }

  return (
    feedback.map( (item) => (<div>
        <FeedbackItem 
        handleDelete={handleDelete}
        key={item.id} item={item}  />
    </div>) 
    )
  )
}

export default FeedbackList