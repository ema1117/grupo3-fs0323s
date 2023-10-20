import { TYPES } from "./action"

export const shoppingInitialState = {
    productos: [],
    carrito: []

}


export const shoopingReducer = (state,action) =>{
   switch (action.type) {


    case TYPES.READ_STATE: {
        return {
            ...state,
            productos: action.payload [0],
            carrito: action.payload [1]
        }
    }

    case TYPES.AGREGAR_A_CARRITO: {

    }
    case TYPES.ELIMINAR_UNIDAD: {
        let itemToDelete = state.carrito.find((carrito) => carrito.id === action.payload);
        return itemToDelete.quantity > 1
        ?{
            ...state,
            carrito: state.carrito.map((item)=>
                item.id === action.payload
                ? {...item, quantity : item.quantity - 1}
                : item
            ) 
        }
        :{
            ...state,
            carrito: state.carrito.filter(item=> item.id !== action.payload)
        }   




    }
    case TYPES.ELIMINAR_TODOS: {
     return {
            ...state,
             carrito:state.carrito.filter (item => item.id !== action.payload)
        }
    }

    case TYPES.LIMPIAR_CARRITO: {




    }


    default:
        return state;
   } 
}