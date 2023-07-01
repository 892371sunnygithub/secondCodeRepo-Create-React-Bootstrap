import React from 'react'
import './Introduction.scss';
import IntroductionData from './IntroductionData'
const Introduction = () => {
  return (
    <div className='introduction'>
      <div className="introduction__inner">
        <h1>{IntroductionData.heading} </h1>
        <p className='paraone'>{IntroductionData.para} </p>
      <div className="introduction__inner__card">
        <div className="data">
          <img src={IntroductionData.cardImage} alt="cardImage"/>
         <p>{IntroductionData.cardPara} </p>
          
        </div>
      <div className="button">
        <span>{IntroductionData.cardButton} </span>
      </div>
      </div>  
      </div>
    </div>
  )
}

export default Introduction