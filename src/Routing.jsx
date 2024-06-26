import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './common-features/Header'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'
import TourDetails from './components/TourDetails/TourDetails'

function Routing () {
  return (
    <Router>
        <Header/>
        <div className='body-main'>
            <Routes>
                <Route exact path='/' element={<Home></Home>} />
                <Route exact path='/login' element={<Login></Login>} />
                <Route exact path='/contact' element={<Contact></Contact>} />
                <Route path="/bookings/:id" element={<TourDetails></TourDetails>} />
            </Routes>
        </div>
    </Router>
  )
}

export default Routing
