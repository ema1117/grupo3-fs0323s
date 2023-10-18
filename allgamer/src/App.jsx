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
 const [count, setCount] = useState(0)
 const [state, dispatch] = useReducer (initialState, reducer);


//Funcion de consulta al archivo bd.json y que craga el estado inicial del reducer (productos y carrito)
const updateState = async() =>{

  //cargo las url en variables
  const productosURL = "http://localhost:3000/productos";
  const carritoURL = " http://localhost:3000/carrito";
  //relaizo la consulta con axios
  const respProductos = await axios.get(productosURL);
  const respCarrito = await axios.get(carritoURL);
  //guardo las respuestas en variables
  const newProductos = await respProductos.data
  const newCarrito = await respCarrito.data
  
 //funcion que carga los valores del json en el state de reducer 
 dispatch({type:TYPES.READ_STATE,payload:[newProductos,newCarrito]})
   
}


//funcion añadir item a carrito
const addToCart = (id) =>{   
  let agregarCarrito = window.confirm("estas seguro que deseas agregar el item al carrito?")
  
  if(agregarCarrito){
    dispatch({type:TYPES.AGREGAR_A_CARRITO,payload:id})
  } 
 
  
}

//funcion limpiar carrito
const clearCart = () =>{ 
  dispatch({type:TYPES.LIMPIAR_CARRITO});   
}

//funcion quitar un elemento del carrito
const deleteFromCart = (id, all = false) => {
 // console.log(id)
  if (all) {
    dispatch ({type:TYPES.ELIMINAR_TODOS, payload:id})
  } else {
  dispatch({type:TYPES.ELIMINAR_UNIDAD, payload:id})     
  }
}



//ejecuto una sola vez el pedido de datos al json
useEffect(()=>{
  updateState()

},[])


 


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
