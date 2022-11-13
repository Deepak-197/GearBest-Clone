import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Footer } from '../Component/Footer'
import { LandingPage } from '../Component/landingPage'
import { Navbar } from '../Component/Navbar'

import Login from './Login'

import SignUp from './SignUp'

const AllRoutes = () => 
{
  return (
    <>
    <Routes>
          
            <Route path = "/navbar" element = {<Navbar />} />
            <Route path = "/" element = {<LandingPage />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/signAuth" element = {<SignUp/>} />
            <Route path = "/footer" element = {<Footer />} />

           
    </Routes>
   </>
  )
}
export default AllRoutes