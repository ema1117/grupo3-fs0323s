import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    



  <div className='container-fluid bordes'>
    <div className='col position-relative'>
      <img className='img-fluid' src="./src/assets/img/Banner.jpg" alt="banner" />
      <div className='position-absolute bottom-0 start-50 button pb-2'>
        <button type="button" className="btn btn-outline-danger">ver ofertas</button>
      </div>
    </div>
  </div>   

  
  )
}

export default Banner