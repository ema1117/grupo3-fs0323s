import React from 'react'

const Pie = () => {
  return (
    <div className='d-flex flex-column flex-lg-row justify-content-center align-items-lg-start gap-5 mt-5 '> 
      <div>
        <a href="">
          <img src="../../src/assets/img/logo.png" alt="" />
        </a>
      </div>  


      <div className='d-flex gap-4 letraRosa justify-content-center'>
        <div className='text-start'>
          <ul className="text-decoration-none list-unstyled ">
            <li><a className="text-decoration-none colorRosa" href="#">Pc's Armadas</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Placas de video</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Almacenamiento</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">MotherBoards</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Memoria Ram</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Fuentes</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Perifericos</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Monitores</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Otros</a></li>
          </ul>
        </div>

        <div className='text-start'>
          <a className='text-decoration-none colorRosa' href="">Arma tu PC</a>
        </div>  

        <div className='text-start'>
          <ul className="list-style-none  list-unstyled">
            <li><a className="text-decoration-none colorRosa" href="#">Nintendo</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Playstation</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Xbox</a></li>
            <li><a className="text-decoration-none colorRosa" href="#">Sega</a></li>
          </ul>
        </div>  

        <div className='text-start'>
          <a className='text-decoration-none colorRosa' href="">Marcas</a>
        </div>  

        <div className='text-start'>
          <a className='text-decoration-none colorRosa' href="">Sobre Nosotros</a>
        </div>  
      
      </div>


    </div>
  )
}

export default Pie