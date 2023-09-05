import React from 'react'

const Botones = () => {

  const clickbusuqeda = () => {

  }

  return (
    <div   >
      <div className='h-100 d-flex align-items-center mt-3'>
        <button onClick={clickbusuqeda}className="btn fondoBusqueda" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> </button> 
        <button className="btn fondoUsuario" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> </button> 
        <button className="btn fondoCarrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> </button> 
       </div>
  
 
      
        
    
        <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">hola</div>
        </div>

     </div>

  )
}

export default Botones