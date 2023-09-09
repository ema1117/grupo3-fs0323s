import React from 'react'
import './marcas.css'
const Marcas = () => {
  return (
    <section className='container-fluid bg-white p-5 g-2 lineaRosa'>
      <div className='row d-flex justify-content-evenly align-items-center'>
        <div className='col-6 col-md-3 mb-3 p-1'><img className='aero' src="../../src/assets/img/logoaero.png" alt="aero" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='kings' src="../../src/assets/img/Kingston-logo.png" alt="kingston" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='asus' src="../../src/assets/img/asus-logo.jpg" alt="asus" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='nvidia' src="../../src/assets/img/nvidia-logo.png" alt="nvidia" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='intel' src="../../src/assets/img/intel-logo.png" alt="intel" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='logi' src="../../src/assets/img/logitec-logo.png" alt="logitec" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='nintendo' src="../../src/assets/img/nintendo-logo.png" alt="nintendo" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='play' src="../../src/assets/img/playstation-logo.jpg" alt="playstation" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='xbox' src="../../src/assets/img/xbox-logo.png" alt="xbox" /></div>
        <div className='col-6 col-md-2 mb-3 p-1'><img className='sega' src="../../src/assets/img/SEGA-logo.jpg" alt="sega" /></div>
      </div>
    </section>
    
  )
}

export default Marcas