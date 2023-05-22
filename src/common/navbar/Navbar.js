import React from 'react'
import { NavLink } from 'react-router-dom'
import NavData from './NavData'
import './Navbar.scss';
import {BsDiscord} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
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
    <div className='navbarwrapper__rightdata'>
    <ul className='navbarwrapper__rightdata__dropdown m-0'>
    <li class="nav-item dropdown ">
          <span class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {version}
          </span>
          <ul class="dropdown-menu">
          {
            versionData.map((data)=><li><span class="dropdown-item" href="#">{data} </span></li>)
          }
            
            
          </ul>
          
        </li>
        </ul>

      <span className='navbarwrapper__rightdata__github'><AiFillGithub/> </span>
      <span className='navbarwrapper__rightdata__discord'><BsDiscord/> </span>  
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar