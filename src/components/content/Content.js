import React from 'react';
import './Content.scss';
const Content = ({data}) => {
  return (
    
    <div className="col-md-4 mx-auto">
    <div className="mt-5 content">
        <h5>{data.title} </h5>
        <p>{data.paratop} </p>
        <p>{data.parabottom} </p>
        </div>
    </div>
  )
}

export default Content