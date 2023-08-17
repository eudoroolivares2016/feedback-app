import Header from "./components/Header"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import AboutIconLink from "./components/AboutIconLink"
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

import AboutPage from "./pages/AboutPage"

import {FeedbackProvider} from "./Context/FeedbackContext"

function App(){
return(
    <FeedbackProvider>
 <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={
                <>
                  <div className='container'>
                    <FeedbackForm />
                    <FeedbackStats/>
                    <FeedbackList  />
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

    </FeedbackProvider>
    )
}
export default App
