import { TYPES } from "./action"

export const initialState = {
    productos: [],
    cart: []

}

export const reducer = (state,actions) =>{
   switch (actions.type) {

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