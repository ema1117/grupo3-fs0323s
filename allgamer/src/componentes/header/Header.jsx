import React from 'react'
import './header.css'
import Logo from './Logo'
import Menu from './Menu'
import Botones from './Botones'  

const Header = ({carrito,clearCart,deleteFromCart}) => {
  return (
   
    //utilizo navbar de bootstrap
    <div className='d-flex justify-content-between align-items-start bordeRosa p-1 pe-5 ps-5'>
      <Logo/>
      <nav className="navbar navbar-expand-lg mt-1">
        <div className="ms-5 me-5 align-items-start align-items-lg-center ">         
        <Menu/>        
       </div>
      </nav>
      <Botones carrito = {carrito}  clearCart={clearCart} deleteFromCart={deleteFromCart}/>
  </div>

  )
}

export default Header