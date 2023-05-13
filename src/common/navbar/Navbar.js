import React from 'react'
import { NavLink } from 'react-router-dom'
import NavData from './NavData'
import './Navbar.scss';

const Navbar = () => {
    
const {navlist, version, versionData, logo,}= NavData;

  return (
<nav className="navbarwrapper navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}><img src={logo} alt="logo"  className='img-fluid navbarwrapper__img' /> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        {
            navlist.map((curElm)=>{
                return(
                    <>
                    <li className="nav-item">
                    <NavLink className="nav-link navbarwrapper__link" aria-current="page" to={curElm.path}>{curElm.name} </NavLink>
                    </li>

                    </>
                )
            })
        }
        
    </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar