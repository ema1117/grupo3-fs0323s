import React from 'react'
import './cards.css'

const Cards = ({productos,addToCart}) => {
const {nombre,imagen,descripcion} = productos

  return (
    <div className="card text-center noBorde mb-4 mb-0 gap-0">
        <h5 className="card-title">{nombre}</h5>
        <img src={imagen} className="card-img-top" alt="..." width={'150px'} height={'180px'}/>
        <div className="card-body ">            
            <p className="card-text altura96">{descripcion}</p>           
            <a onClick={() => addToCart(productos.id)} className="btn btn-primary">Añadir a Carrito</a>
        </div>
    </div>
       
  )
}

export default Cards
