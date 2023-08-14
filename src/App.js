import Header from "./components/Header"

import {v4 as uuidv4} from "uuid" 
import { useState } from "react"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import AboutIconLink from "./components/AboutIconLink"
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

import AboutPage from "./pages/AboutPage"




function App(){
    // browser Router is doing routing without needing to have hashing in place
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
        // spread operator create a new array with the
        // value that we are passing in there as well
        setFeedback([newFeedback, ...feedback])
    }

return( 
    <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={
                <>
                  <div className='container'>
                    <FeedbackForm handleAdd={handleAdd} />
                    <FeedbackStats feedback={feedback}></FeedbackStats>
                    <FeedbackList feedback={feedback} handleDelete={handleDelete}  />
                    </div>  
                </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage/>}>
                </Route>
        </Routes>
        <Link to="/about">
             
        <AboutIconLink/>
        </Link>
    </Router>
    )
}
export default App
