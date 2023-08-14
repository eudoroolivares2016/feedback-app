import Header from "./components/Header"

import {v4 as uuidv4} from "uuid"
import { useState } from "react"

import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App(){
    // default to using base-data
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const handleDelete = (item) =>{
        if (window.confirm('Are you sure you want to delete?')) {
            const removedList = feedback.filter((feedbackItem) => 
            feedbackItem.id !== item.id
            )
            setFeedback(removedList) 
        }
    }

    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log('🚀 ~ file: App.js:25 ~ handleAdd ~ newFeedback:', newFeedback)
        // spread operator create a new array with the
        // value that we are passing in there as well
        setFeedback([newFeedback, ...feedback])
    }

return( 
        <>
        <Header />4
        <div className='container'>
        <FeedbackForm handleAdd={handleAdd} />
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={handleDelete}  />
        </div>
        </>
    )
}
export default App
