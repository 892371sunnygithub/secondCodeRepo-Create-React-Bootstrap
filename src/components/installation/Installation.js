import React from 'react'
import InstallationData from './InstallationData'
import './Installation.scss'
const Installation = () => {
  return (
    <div className='installation pt-5'>
        <h2>{InstallationData.head} </h2>
        <p className='para'>{InstallationData.para} </p>
        <div className='link'>
           <p className='m-0'>{InstallationData.link} </p>
        </div>    
    </div>
  )
}

export default Installation