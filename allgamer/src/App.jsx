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
import { shoopingReducer,shoppingInitialState } from './reducer';
import Swal from 'sweetalert2'  


function App() {


   const [count, setCount] = useState(0)
  
   //reducer par amanejar el carrito
  const [state,dispatch] = useReducer(shoopingReducer,shoppingInitialState)
  
  //destructuro el state del reducer y lo guardo en variables
  const {productos,carrito} = state;


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
  Swal.fire({
    title: 'desea agregar el item al carrito ?',    
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, agregar al carrito!'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch({type:TYPES.AGREGAR_A_CARRITO,payload:id})
      Swal.fire(
        'Agregado!',
        'Se agrego el item con exito',
        'success'
      )
    }
  })  
   
   
 }

 //agrega al carrito desde el btn mas del carrito
const agregaralcarrito = (id) =>{
  dispatch({type:TYPES.AGREGAR_A_CARRITO,payload:id})

}

 

//funcion limpiar carrito
const clearCart = () =>{ 
  dispatch({type:TYPES.LIMPIAR_CARRITO});   

 }

  //funcion quitar un elemento del carrito
  const deleteFromCart = (id) => {
   // console.log(id)
    dispatch({type: TYPES.ELIMINAR_UNIDAD, payload:id})   
    
    
  }   




//ejecuto una sola vez el pedido de datos al json
useEffect(()=>{
  updateState()

},[])


 


  return (
    <>
      <Anuncio/>
      <Header carrito={carrito} clearCart={clearCart} deleteFromCart={deleteFromCart} agregaralcarrito ={agregaralcarrito}/>
      <Banner />
      <Productos productos={productos} addToCart={addToCart}/>
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
