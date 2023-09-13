import React from 'react'
import './redes.css'

const RedesSociales = () => {
  return (
    
    <div className='fondoRosaOpaco d-flex flex-column gap-4 mt-5'>   
        <h2>Buscanos en</h2>
        <div className='d-flex justify-content-center align-items-center gap-3 pb-3'>
          <a href=""><img src="../../src/assets/img/icono-facebook.png" alt="" /></a>
          <a href=""><img src="../../src/assets/img/icono-instagram.png" alt="" /></a>
          <a href=""><img src="../../src/assets/img/icono-twiter.png" alt="" /></a>
          <a href=""><img src="../../src/assets/img/icono-wp.png" alt="" /></a>
          <a href=""><img src="../../src/assets/img/icono-messenger.png" alt="" /></a>
          <a href=""><img src="../../src/assets/img/icono-telegram.png" alt="" /></a>
        </div>
    </div>
  )
}

export default RedesSociales