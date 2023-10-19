import React from 'react'
 
 

const Botones = ({carrito,clearCart,deleteFromCart}) => {
   

     
  //me fijo si exite la div para mostrar la cantidad de carrito
  if(document.querySelector('#cantidadProductos')){ 
    

    //me fijo si hay productos en el carrito
    if(carrito.length > 0){
      const lblcantidad = document.querySelector('#cantidadProductos')
      let cantidad = 0
      carrito.map((carrito) =>{
        cantidad += carrito.quantity;
      })
      lblcantidad.innerHTML = cantidad   
     
    //caso para productos = 0
    }else if(carrito.length == 0){
      const lblcantidad = document.querySelector('#cantidadProductos')
      lblcantidad.innerHTML = 0
      }
   


    } 
   



  ///////////////////////////////////////////////////////manejo los eventos de click de carrito/////////////////////////////////////////////////////////
  const clickCarrito = () => { 
    //selecciono el div con id contendiooffcanvas
    const offcanvas = document.querySelector('#contenidoOffCanvas') 

      
      if(offcanvas.children.length > 0){
        offcanvas.removeChild(offcanvas.firstChild)
        }     
        
       // console.log(offcanvas.children.length)
       
  
        if(carrito.length < 1){
          
          const contenedor = document.createElement('div')
          contenedor.id = 'contenedoroffCarrito'
          contenedor.classList.add('d-flex','flex-column','align-items-center','gap-2')
          const titulousuario = document.createElement('label')
          titulousuario.classList.add('colorRosa')
          titulousuario.innerHTML = 'No hay elementos en el carrito'
          contenedor.appendChild(titulousuario)
          offcanvas.appendChild(contenedor)
  
        }else{
  
          //variable que contendra el precio total de todos los productos
          let total = 0
  
          //div contenedora de lo que muetsra el offcanvas
          const contenedor = document.createElement('div')
          contenedor.id = 'contenedoroffCarrito'
          contenedor.classList.add('w-100','d-flex','flex-column','gap-2')
          
          carrito.map((carrito)=> {
            //variable par aguardar el precio de los productos
            let precio = 0
  
            //creo div contenedora del producto del carrito
            const divProducto = document.createElement('div')
            divProducto.classList.add('d-flex','gap-2','w-100','justify-content-between')
            divProducto.id = carrito.nombre
            //div conteedora imagen y decripcion
            const divimaDes = document.createElement('div')
            divimaDes.classList.add('d-flex','gap-2')
            //creo elemento imagen 
            const imgproducto = document.createElement('img')
            imgproducto.classList.add('imagenCarrito')
            imgproducto.src = carrito.imagen
            const productocarrito = document.createElement('p')
            const por =  document.createElement('p') 
            por.innerHTML = 'X'
            productocarrito.classList.add('colorRosa')
            productocarrito.innerHTML = carrito.nombre 
            
            divimaDes.appendChild(imgproducto)
            divimaDes.appendChild(productocarrito)
          
  
            //contenedor de cantidad y precio
            const divcantPre = document.createElement('div')
            divcantPre.classList.add('d-flex','letraRosa', 'gap-1')
            const precioProducto = document.createElement('p')
            const cantidadProducto = document.createElement('p')
            const btnborrar = document.createElement('a')
            const imgborrar = document.createElement('img')
            imgborrar.classList.add('imgBorrar')
            imgborrar.id = carrito.id
            imgborrar.src = '../../src/assets/img/papelera.png'
            btnborrar.appendChild(imgborrar)
  
  
            btnborrar.addEventListener('click', function(e){
              //variable que contiene el valor de la cantidad de elemetos que tiene el producto
              let auxCantidad = e.target.parentElement.parentElement.children[1].innerHTML - 1               

              if(auxCantidad > 0){
                e.target.parentElement.parentElement.children[1].innerHTML = e.target.parentElement.parentElement.children[1].innerHTML - 1
              }else{                
                e.target.parentElement.parentElement.parentElement.remove()
              }
             
              //ejecuto la funcion para borrar un timen del carrito
              deleteFromCart(parseInt(e.target.id))
             
              //me fijo si se borraron todos los productos del carrito y pongo el msj de no hay producto
              if( document.querySelector('#contenedoroffCarrito').children.length == 3){
                
                //remuevo todo el contenido de canvas y muestro mensaje carrito vacio
                offcanvas.removeChild(offcanvas.firstChild)
  
                const contenedor = document.createElement('div')
                contenedor.id = 'contenedoroffCarrito'
                contenedor.classList.add('d-flex','flex-column','align-items-center','gap-2')
                const titulousuario = document.createElement('label')
                titulousuario.classList.add('colorRosa')
                titulousuario.innerHTML = 'No hay elementos en el carrito'
                contenedor.appendChild(titulousuario)
                offcanvas.appendChild(contenedor)  

              }






  
            })
  
            cantidadProducto.innerHTML = carrito.quantity
            precio = carrito.quantity * carrito.precio
            precioProducto.innerHTML = ' = $' + precio
            divcantPre.appendChild(por)
            divcantPre.appendChild(cantidadProducto)
            divcantPre.appendChild(precioProducto)
            divcantPre.appendChild(btnborrar)
  
            //
            divProducto.appendChild(divimaDes)
            divProducto.appendChild(divcantPre)
  
            //
            contenedor.appendChild(divProducto)
            total += precio
          })
  
          //div contenedora del totAL
          const divtotal = document.createElement('div')
          divtotal.classList.add('bordeSuperior','d-flex','justify-content-end','w-100','letraRosa')
          const precioTotal = document.createElement('p') 
          precioTotal.classList.add('mt-1')
          precioTotal.innerHTML = '<b>TOTAL $<b> ' + total
  
          divtotal.appendChild(precioTotal)
          contenedor.appendChild(divtotal)
        
  
          //BTN finalizar compra o vaciar carrito
          const btnfinalizar = document.createElement('button')
          btnfinalizar.classList.add('btn','btn-danger','w-100')
          btnfinalizar.innerHTML = 'Finalizar Compra'
          const btnvaciar = document.createElement('button')
          btnvaciar.id = 'btnclear'
          btnvaciar.classList.add('btn','btn-danger','w-100')
          btnvaciar.innerHTML = 'Vaciar Carrito'     
          
            //limpio los datos del carrito al hacer click a borrar carrito
            btnvaciar.addEventListener('click',function(){
              let borrarCarrito = window.confirm("estas seguro que deseas vaciar el carrito?")
             
              if(borrarCarrito){
                //ejecuto funcion limpiar carrito
                clearCart()

                //remuevo todo el contenido de canvas y muestro mensaje carrito vacio
                offcanvas.removeChild(offcanvas.firstChild)
  
                const contenedor = document.createElement('div')
                contenedor.id = 'contenedoroffCarrito'
                contenedor.classList.add('d-flex','flex-column','align-items-center','gap-2')
                const titulousuario = document.createElement('label')
                titulousuario.classList.add('colorRosa')
                titulousuario.innerHTML = 'No hay elementos en el carrito'
                contenedor.appendChild(titulousuario)
                offcanvas.appendChild(contenedor)
              }
             
           })              
            
            
  
          contenedor.appendChild(btnvaciar)
          contenedor.appendChild(btnfinalizar)
  
          offcanvas.appendChild(contenedor)
  
        }        
   
  }  



  /////////////////////////////////////manejo el click btn buscar//////////////////////////////////////////////////
  const btnbucar = () => {
    //selecciono el div con id contendiooffcanvas
    const offcanvas = document.querySelector('#contenidoOffCanvas')    
      

    //me fijo si existe el cotenedor de busqueda 
     if(!document.querySelector('#contenedoroffbusqueda')){
    
      //borro si exiten datos de logueo o carrito
      if(offcanvas.children.length > 0){
        offcanvas.removeChild(offcanvas.firstChild)
      }

      const contenedor = document.createElement('div')
      contenedor.id = 'contenedoroffbusqueda'
      const titulo = document.createElement('h4')
      titulo.classList.add('colorRosa')
      titulo.innerHTML = 'Buscar'
      const contenedorbuscar = document.createElement('div')
      contenedorbuscar.classList.add('d-flex','gap-2','align-items-center','justify-content-center')
      const inputbusqueda = document.createElement('input')
      inputbusqueda.type = 'text'
      const btnbusqueda = document.createElement('button')
      btnbusqueda.classList.add('btn','btn-danger')
      btnbusqueda.innerHTML = 'Buscar'

      contenedorbuscar.appendChild(inputbusqueda)
      contenedorbuscar.appendChild(btnbusqueda)

      contenedor.appendChild(titulo)
      contenedor.appendChild(contenedorbuscar)
      offcanvas.appendChild(contenedor)
    }

  }

  //////////////////////////////////////////////////////manejo click de btn logueo/////////////////////////////////////////////////////////////
  const btnLogueo = () => {
    //selecciono el div con id contendiooffcanvas
    const offcanvas = document.querySelector('#contenidoOffCanvas') 

        
    //me fijo si existe el cotenedor de logueo  
    if(!document.querySelector('#contenedoroffLogueo')){
      
      if(offcanvas.children.length > 0){
        offcanvas.removeChild(offcanvas.firstChild)
      }


      const contenedor = document.createElement('div')
      contenedor.id = 'contenedoroffLogueo'
      contenedor.classList.add('d-flex','flex-column','align-items-center','gap-2')
      const titulousuario = document.createElement('label')
      titulousuario.classList.add('colorRosa')
      titulousuario.innerHTML = 'Usuario'
      const inputusuario = document.createElement('input')
      inputusuario.classList.add('w-75')
      inputusuario.type = 'text'
      const tituloPass = document.createElement('label')
      tituloPass.classList.add('colorRosa')
      tituloPass.innerHTML = 'Contraseña'
      const inputpass = document.createElement('input')
      inputpass.classList.add('w-75')
      inputpass.type = 'password'
      const botoningresar = document.createElement('button')
      botoningresar.classList.add('w-75','btn','btn-danger')
      botoningresar.innerHTML='Ingresar'

      contenedor.appendChild(titulousuario)
      contenedor.appendChild(inputusuario)
      contenedor.appendChild(tituloPass)
      contenedor.appendChild(inputpass)
      contenedor.appendChild(botoningresar)

      offcanvas.appendChild(contenedor)
    }

  }  

  return (
    <div >
      
      <div className='h-100 d-flex align-items-center mt-3 gap-2'>
        <button id ='btnBusqueda' onClick={()=>btnbucar()} className="btn fondoBusqueda" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> </button> 
        <button id ='btnLogueo' onClick={()=>btnLogueo()} className="btn fondoUsuario" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> </button> 
        <button id ='btnCarrito' onClick={() => clickCarrito()} className="btn fondoCarrito position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><label id='cantidadProductos' className='cantidadProductos letraRosa position-absolute top-0 end-0 rounded-circle fw-bold'>0</label></button> 
       </div>
  
 
      
        
    
        <div className="offcanvas offcanvas-end fondoOff" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div id='contenidoOffCanvas' className="offcanvas-body "></div>
        </div>

     </div>

  )
}

export default Botones