import React from 'react'
import './elegirnos.css'
const Elegirnos = () => {
  return (
    <section className='container-fluid bg-black gap-5 elegir'>
      <div className='row m-4'>
        <div className='col'>
          <h2>Por que comprar con nosotros</h2>
        </div>
      </div> 
      <div className='row d-flex m-5'>
        <div className='col-6 col-md-3'>
          <img src="../../src/assets/img/seguimiento-del-tiempo.png" alt="envios" />
          <h3>Envios a todo el pais</h3>
          <p>Realizamos envíos a todo el País por medio de OCA. Recibí tu producto donde sea que estés.</p>
        </div>
        <div className='col-6 col-md-3'>
          <img src="../../src/assets/img/shop.png" alt="shop" />
          <h3>Retiro gratis</h3>
          <p>En nuestra sucursal en Juramento 2786, Capital Federal, Argentina de Lun a Vie de 10 a 18hs.</p>
        </div>
        <div className='col-6 col-md-3'>
          <img src="../../src/assets/img/producto.png" alt="producto" />
          <h3>Garantía y respaldo</h3>
          <p>Todos nuestros productos cuentan con garantía oficial</p>
        </div>
        <div className='col-6 col-md-3'>
          <img src="../../src/assets/img/credit-cards.png" alt="credit-card" />
          <h3>Financiación</h3>
          <p>Tarjetas de crédito VISA y MASTER con 3, 6, 12 y 18 cuotas sin interés</p>
        </div>

      </div>   
      
      
    </section>
  
  
    )
}

export default Elegirnos