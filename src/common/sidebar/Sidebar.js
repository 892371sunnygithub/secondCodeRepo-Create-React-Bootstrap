import React from 'react'
import SidebarData from './SidebarData'
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
const Sidebar = () => {
  return (
    <div className='sidebarWrapper'>
      <div className="sidebarWrapper__input">
         <input type="text" name='search' id='search' placeholder='Search' />
         <span><FiSearch/> </span>
         <div className='ctrl_button'><button>CTRL</button> <button>K </button> </div>
      </div> 

    <div className="sidebarWrapper__list">
      <ul className='navbar-nav'>
        {
          SidebarData.map((list, index)=> <li className="nav-item" key={index}><NavLink  className='nav-link' > {list.menuName} </NavLink> </li>)
        }
      </ul>   
    </div>  
    </div>
  )
}

export default Sidebar