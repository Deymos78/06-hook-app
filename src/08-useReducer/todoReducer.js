
// { type: [todo remove], payload: id }

// Esto seria el reducer al cual se envia la accion para que realize los cambios oportunos
export const todoReducer = ( initialState =[], action ) => {

    // Usualmente se trabaja con un switch
    switch ( action.type ) {
        case '[TODO] add Todo':
                
            return [...initialState, action.payload ];
        
        case '[TODO] remove Todo':

        // El filter regresa un nuevo arreglo
        return initialState.filter( todo => todo.id !== action.payload );

        default:
            return initialState;
    }
}