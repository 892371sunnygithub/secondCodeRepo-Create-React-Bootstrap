import React from 'react'
import './ImportantCom.scss';
const ImportantCom = () => {
    return (
        <div className="important pt-5">
            <h2>Installation</h2>
            <p className='para'>You should import individual components like: <code> react-bootstrap/Button </code> rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.</p>

            <div className='link'>
                <p className='m-0'>
                    <span className='lightblue'>  import </span> Button <span className='lightblue'> from </span> <span className='lightgreen'> 'react-bootstrap/Button' </span> ; <br /> <br />
                    <span className='lightgray'>
     // or less ideally </span> <br />
                    <span className='lightblue'> import </span>  Button  <span className='lightblue'>from</span>     <span className='lightgreen'>  'react-bootstrap' </span>;
                </p>
            </div>
        </div>
    )
}


export default ImportantCom;