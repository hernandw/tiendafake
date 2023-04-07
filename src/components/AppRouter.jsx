import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Contact from '../pages/Contact'
import Details from '../pages/Details'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default AppRouter
