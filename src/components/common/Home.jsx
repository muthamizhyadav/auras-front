import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div className='font'>
      <Navbar/>
      <div style={{ paddingTop: '120px' }}> 
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
