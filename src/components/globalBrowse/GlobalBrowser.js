import React from 'react';
import './GlobalBrowse.scss';
const GlobalBrowser = () => {
  return (
    <div className='global pt-5'>
      <h2>Browser globals</h2>
      <p>We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on jsDelivr, as well as in the npm package.</p>
      <div className="link">
        <h2>Themes</h2>
        <p>React-Bootstrap is compatible with existing Bootstrap themes. Just follow the installation instructions for your theme of choice.</p>
        <div className="watch mt-4">
          <h4>Watch out!</h4>
          <p>Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors.</p>
        </div>

        <div className="create_app mt-4">
          <h4>Create React App</h4>
          <p>If you would like to add a custom theme on your app using Create React App, they have additional documentation for Create React App and Bootstrap here</p>
        </div>

        <div className="support mt-4">
          <h2>Browser support</h2>
          <p>We aim to support all browsers supported by both React and Bootstrap.</p>
        </div>
        
      </div>
    </div>
  )
}

export default GlobalBrowser;






