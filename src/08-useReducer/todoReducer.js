

// Esto seria el reducer al cual se envia la accion para que realize los cambios oportunos
export const todoReducer = ( initialState =[], action ) => {

    // Usualmente se trabaja con un switch
    switch ( action.type ) {
        case '[TODO] add Todo':
                
            return [...initialState, action.payload ];

        default:
            return initialState;
    }
}