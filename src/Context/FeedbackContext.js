import { createContext, useState } from "react"
import {v4 as uuidv4} from "uuid" 


 
 const FeedbackContext = createContext()

 // we need to create a provider so that the components can get context
 // as a subscriber to that provider
 // children in this context are the components which all need access
 // to our context
export const FeedbackProvider = ({children}) => {
const [feedbackEdit, setFeedbackEdit] = useState(({item: {},
edit: false}))

const [feedback, setFeedback] = useState([{
    id: 1,
    text: 'This is feedback item 1',
    rating: 10
},
{
  id: 2,
  text: 'This is feedback item 2',
  rating: 2
},
{
  id: 3,
  text: 'This is feedback item 3',
  rating: 5
}])

// Set to be edited
const handleEdit = (item) => {
  setFeedbackEdit({item, edit: true})
}

// Handle deletes to the data
const handleDelete = (item) =>{
  if (window.confirm('Are you sure you want to delete?')) {
      const removedList = feedback.filter((feedbackItem) => 
      feedbackItem.id !== item.id
      )
      setFeedback(removedList) 
  }
}

// Handle updates to the data

const handleUpdates = () => {
  // updating will mean that we delete old one with same item

  console.log("handleUpdate")
  
}

// Handle adds to the data
const handleAdd = (newFeedback) => {
  newFeedback.id = uuidv4()
  // spread operator create a new array with the
  // value that we are passing in there as well
  setFeedback([newFeedback, ...feedback])
}

  return <FeedbackContext.Provider value={{feedback,feedbackEdit,
    handleAdd, handleDelete, handleEdit}}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext