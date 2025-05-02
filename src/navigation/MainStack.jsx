import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Offers from '../page/Offers'
import LoginForm from "../components/LoginForm";
import Register from "../components/Register";

function MainStack() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/offers' element={<Offers />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<Register />} />
   </Routes>
  )
}

export default MainStack