import React from 'react'
import './RightSidebar.scss'
import RightSidebarData from './RightSidebarData'
import { NavLink } from 'react-router-dom'
const RightSidebar = () => {
  return (
    <div className='rightSidebar'>
      <ul>
        {RightSidebarData.map((menu, index)=> <li key={index} className='list-item'><NavLink className='nav-link'>{menu.menuName} </NavLink> </li>)}
      </ul>
    </div>
  )
}

export default RightSidebar;