import React from 'react'
import Cards from './Cards'

const Productos = ({productos,addToCart}) => {
  return (
    <div className='d-flex flex-column gap-5 mt-2'>
    <div className='p-5 pb-0'>
     <div className='text-start borde-inferior mb-3'>
        <h4 className='mb-3 fs-2'>Nuevos Ingresos</h4>
     </div>        

      <div className='row '>
          { productos.map((productos) => 
            
              <div className='col-6 col-lg-3' key={productos.id}>
              {productos.tipoProductos === "ultimos Ingresos" && (
              <Cards productos = {productos} addToCart={addToCart}></Cards>)            }  
              </div>   
          )}
      </div> 
    </div>
    <div className='p-5 pt-0'>   
      <div className='text-start borde-inferior mb-3'>
          <h4 className='mb-3 fs-2'>Nuevos Ingresos</h4>
      </div>        

      <div className='row '>
          { productos.map((productos) => 
            
              <div className='col-6 col-lg-3' key={productos.id}>
              {productos.tipoProductos === "Mas Vendidos" && (
              <Cards productos = {productos} addToCart={addToCart}></Cards>)            }  
              </div>   
          )}
        </div> 
    </div>            
  </div>


  )
}

export default Productos