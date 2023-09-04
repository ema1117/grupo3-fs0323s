import React from 'react'
import './header.css'
import Logo from './Logo'
import Menu from './Menu'
import Botones from './Botones'  

const Header = () => {
  return (
   
    //utilizo navbar de bootstrap
    <nav className="navbar navbar-expand-lg  bordeRosa">
      <div className="ms-5 me-5 container-fluid  align-items-start align-items-lg-center ">        
       <Logo/>
       <Menu/> 
       <Botones/>
    </div>
  </nav>


  )
}

export default Header