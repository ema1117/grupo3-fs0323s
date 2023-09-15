import React from 'react'
import './carrousel.css'

const Carrousel = () => {
  return (

<div className="container text-center my-3 mt-5"> 
      
      <h2><span className='letraRoja'>@allgamers</span> en Instagram</h2>  

  <div className='w-75 m-auto bordeRosaCards'>     
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bgOscuro" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='bgOscuro'></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='bgOscuro'></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"className='bgOscuro' ></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"className='bgOscuro' ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../../src/assets/img/carrousel-notebook-lenovo-i3.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/img/carrousel-notebook-dell-i5.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/img/CARROUSEL-notebook-DELL-I3.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/img/carrousel-notebook-hp-i3.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/img/carrousel-notebook-asus-i5.png" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="flechaIzquierda" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="flechaDerecha" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </div>
  </div>  

  ) 
}
export default Carrousel