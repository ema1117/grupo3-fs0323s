import { useState, useReducer, useEffect } from 'react'
import { TYPES } from './action';
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
  // const [count, setCount] = useState(0)
//  const [state, dispatch] = useReducer (initialState, reducer);

//  const updateState = async () => {
//   const urlProductos = 'http://localhost:3000/products';
//   const urlCarrito = 'http://localhost:3000/cart';
//   const resProductos = await axios.get (urlProductos);
//   const resCarrito = await axios.get (urlCarrito);
//   const infoProductos = await resProductos.data;
//   const infoCarrito = await resCarrito.data;

//     dispatch ({type: TYPES.READ_STATE, payload: [infoProductos, infoCarrito]});
//  }

//  useEffect (()=> {
//   updateState()
//  }, [])

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
