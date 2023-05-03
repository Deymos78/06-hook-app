
// { type: [todo remove], payload: id }

// Esto seria el reducer al cual se envia la accion para que realize los cambios oportunos
export const todoReducer = ( initialState =[], action ) => {

    // Usualmente se trabaja con un switch
    switch ( action.type ) {
        case '[TODO] add Todo':
            // SIEMPRE SE TIENE QUE REGRESAR UN ESTADO
            return [...initialState, action.payload ];
        
        case '[TODO] remove Todo':

            // El filter regresa un nuevo arreglo
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] toggle Todo':

            // El map es un metodo que tiene javascript para transformar un arreglo en otra cosa
            return initialState.map( todo => {

                // Comprobamos que el id del todo sea el mismo que el del action payload == id
                if( todo.id == action.payload){
                    // En este caso usamos el operardor spread para esparcir el todo y tomar el done y cambiar el estado
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                // En el caso de que no encuentre el todo que estamos buscando retornara el mismo todo
                // de esta forma evitamos errores al no enviar una accion
                return todo;
            })
        default:
            return initialState;
    }
}