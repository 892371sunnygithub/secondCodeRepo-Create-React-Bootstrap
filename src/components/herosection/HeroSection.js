import React from 'react'
import heroImage from '../../assets/herocardimage.jpg'
import data from './HeroSectionData'
import './HeroSection.scss'
const HeroSection = () => {
  const buttonData=["Get Started","Components"]
  return (
   <div className='herosection'>
     <h1>{data.head}  </h1>
     <p>{data.paraone} <br /> {data.paraonebr} </p>
     <div className="herosection__buttonsec">
       
        {
          buttonData.map((data)=> <button className={data==="Get Started" && " herosection__buttonsec__first" || data==="Components" && "herosection__buttonsec__second"}>{data} </button>) 
        }
       
     </div>   
     <div className="herosection__bootom">
      <span>{data.version} </span>
       <div className="herosection__bootom__data">
         <figure>
         <img src={data.url} alt="herosectionimage"  />
          <figcaption></figcaption>
         </figure>
        <div className="herosection__bootom__data__text">
         <p>{data.para} <br />{data.parabr} </p>
         <span>{data.imagebtn} </span>
        </div> 
         
       </div>
     </div>
   </div>
  )
}

export default HeroSection