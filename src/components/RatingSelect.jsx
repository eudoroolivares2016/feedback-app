import React from 'react'
import { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


function RatingSelect() {
const [selectedRating, setSelectedRating] = useState(10)

  const {feedbackEdit} = useContext(FeedbackContext)
    const handleChange = (e) => {
        setSelectedRating(+e.currentTarget.value)
      }

    useEffect(() => {
      setSelectedRating(feedbackEdit.item.rating)
    }, [feedbackEdit])
      
    return (
    <div>
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                    type='radio'
                    id={`num${i + 1}`}
                    name='rating'
                    value={i + 1}
                    onChange={handleChange}
                    checked={selectedRating === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
    </ul>
  </div>
  )
}

export default RatingSelect