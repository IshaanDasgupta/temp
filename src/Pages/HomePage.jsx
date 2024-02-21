import React from 'react'
import Navbar from '../components/Navbar'
import Left from '../components/homepage/Left'
import Middle from '../components/homepage/Middle'
import Right from '../components/homepage/Right'
import './homepage.css'

const HomePage = () => {
  return (
    <div className='home'>
     <div className='one'> <Navbar /> </div> 
      <div className='two'><Left/></div>
      <div className='three'><Middle/></div>
      <div className='four'><Right/></div>
    </div>
  )
}

export default HomePage