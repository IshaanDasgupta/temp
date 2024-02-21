import React from 'react'
import './score.css'
import Navbar from '../components/Navbar'
import ImgSec from '../components/scorepage/ImgSec'

const Score = () => {
  return (
    <div className='score'>      
        <div className='midCompo'>
            <Navbar />
            <ImgSec />
        </div>
    </div>
  )
}

export default Score