import React from 'react'
import './anuncio.css'

const Anuncio = () => {

  //funcion para remover la div contenedor del anuncio cuando hago click en X
  const cerrarAnuncio = () => {
    console.log('click')
    const anuncio = document.querySelector('#anuncio')
    anuncio.remove()

  }


  return (
    //div contenedor anuncio
    <div id='anuncio' className='w-100 fondoRosa p-1 d-flex justify-content-center align-items-center gap-1'>     
      <h4 className='letraRosa mb-0' >10%  de descuento pagando en efectivo o transferencia</h4>      
      <label onClick={cerrarAnuncio} id='cerrarAnuncio' className='ms-4 letraRosa'  >X</label>
    </div>
  )
}

export default Anuncio