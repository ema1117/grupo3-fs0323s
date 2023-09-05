import React from 'react'
import './header.css'
import Logo from './Logo'
import Menu from './Menu'
import Botones from './Botones'  

const Header = () => {
  return (
   
    //utilizo navbar de bootstrap
    <div className='d-flex justify-content-evenly align-items-start bordeRosa p-1'>
      <Logo/>
      <nav className="navbar navbar-expand-lg mt-1">
        <div className="ms-5 me-5 align-items-start align-items-lg-center ">         
        <Menu/>        
       </div>
      </nav>
      <Botones/>
  </div>

  )
}

export default Header