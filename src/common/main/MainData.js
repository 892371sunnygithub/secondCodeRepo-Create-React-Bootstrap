import React from 'react'
import "./MainData.scss";
import HeroSection from '../../components/herosection/HeroSection';
import Content from '../../components/content/Content';
import ContentData from '../../components/content/ContentData';

const MainData = () => {

  return (
    <>
        <div className='mainWrapper container-fluid'>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <HeroSection/>
        </div>
      </div>

    </div>

          <div className="container">
        <div className="row">
        {
          ContentData.map((data)=><Content data={data}/>)
        }
          
          
        </div>
      </div>
      </>

  )
}

export default MainData