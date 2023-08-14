import React from 'react'
import { useState } from 'react'

import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
const [text, setText] = useState('')
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')
const [selectedRating, setSelectedRating] = useState(10)

const handleTextChange = (event) => {
    const userText = event.target.value
    setText(userText)
    if (userText.length < 10){
        setMessage('Your review is not long enough must be at least 10 characters')
        setBtnDisabled(true)
    }
    else{
        setMessage('')
        setBtnDisabled(false)
    }
}
const handleSubmit = (e) => {
    // prevents from writing to the actual file
    e.preventDefault()
    const newFeedback = {
        rating: selectedRating,
        text: text
    }
    handleAdd(newFeedback)
}
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2> How would you rate your service with us</h2> 
            <RatingSelect setSelectedRating={setSelectedRating} selectedRating={selectedRating} />
            <div className='input-group'>
                <input onChange={handleTextChange} 
                type="text" name="Submit button" 
                placeholder='Enter your review'
                value={text} />
                <Button type="submit" isDisabled={btnDisabled} version="secondary">
                    Send 
                </Button>
            </div>
                {message && <div className='message'> {message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm