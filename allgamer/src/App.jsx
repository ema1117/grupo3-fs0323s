import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Anuncio from './componentes/anuncio/Anuncio';
import Header from './componentes/header/Header';
import Banner from './componentes/banner/Banner';
import Productos from './componentes/Productos/Productos';
import Elegirnos from './componentes/Elegirnos/Elegirnos';
import Marcas from './componentes/Marcas/Marcas';
import Dia from './componentes/Dia/Dia';
import Carrousel from './componentes/Carrousel/Carrousel';
import RedesSociales from './componentes/RedesSociales/RedesSociales';
import Pie from './componentes/Pie/Pie';
 


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Anuncio/>
      <Header/>
      <Banner />
      <Productos/>
      <Elegirnos/> 
      <Marcas/>
      <Dia/>
      <Carrousel/>
      <RedesSociales/>
      <Pie/> 
    </>
  )
}

export default App
