import React from 'react';
import './carrousel.css';

const Carrousel = () => {
  return (
 
    <div className="container text-center my-3 mt-5">
      <h2>
        <span className="letraRoja">@allgamers</span> en Instagram
      </h2>
      <div className="w-50 m-auto bordeRosaCards">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="../../src/assets/img/carrousel-notebook-asus-i5.png"
                className="d-block w-100"
                alt="img1"
              />
            </div>

            <div className="carousel-item  ">
              <img
                src="../../src/assets/img/CARROUSEL-notebook-DELL-I3.jpg"
                className="d-block w-100"
                alt="img2"
              />
            </div>
            
            <div className="carousel-item  ">
              <img
                src="../../src/assets/img/carrousel-notebook-dell-i5.jpg"
                className="d-block w-100"
                alt="img3"
              />
            </div>
            
            <div className="carousel-item ">
              <img
                src="../../src/assets/img/carrousel-notebook-hp-i3.png"
                className="d-block w-100"
                alt="img4"
              />
            </div>
            
            <div className="carousel-item ">
              <img
                src="../../src/assets/img/carrousel-notebook-lenovo-i3.jpg"
                className="d-block w-100"
                alt="img5"
              />
            </div>
            
            <div className="carousel-item ">
              <img
                src="../../src/assets/img/Carrousel-pc-core-i3.jpg"
                className="d-block w-100"
                alt="img6"
              />
            </div>
            
            <div className="carousel-item">
              <img
                src="../../src/assets/img/Carrousel-pc-corei5.jpeg"
                className="d-block w-100"
                alt="img7"
              />
            </div>
            
            <div className="carousel-item">
              <img
                src="../../src/assets/img/Carrousel-pc-corei7.jpg"
                className="d-block w-100"
                alt="img8"
              />
            </div>
            
            <div className="carousel-item">
              <img
                src="../../src/assets/img/Carrousel-pc-rayzen5.jpg"
                className="d-block w-100"
                alt="img9"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../src/assets/img/Carrousel-pc-ryzen7.jpg"
                className="d-block w-100"
                alt="img10"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../src/assets/img/Carrousel-pc-ryzen9.jpg"
                className="d-block w-100"
                alt="img11"
              />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">           
            <span className="flechaIzquierda" aria-hidden="true" > </span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">            
            <span className="flechaDerecha" aria-hidden="true"> </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
