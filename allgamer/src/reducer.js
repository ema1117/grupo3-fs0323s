import { TYPES } from "./action"

export const shoppingInitialState = {
    productos: [],
    carrito: []

}

export const shoopingReducer = (state,actions) =>{
   switch (actions.type) {

    case TYPES.READ_STATE: {
        return {
            ...state,
            productos: actions.payload [0],
            cart: actions.payload [1]
        }
    }

    case TYPES.AGREGAR_A_CARRITO: {

    }
    case TYPES.ELIMINAR_UNIDAD: {

    }
    case TYPES.ELIMINAR_TODOS: {

    }
    case TYPES.LIMPIAR_CARRITO: {

    }
    default:
        return state;
   } 
}