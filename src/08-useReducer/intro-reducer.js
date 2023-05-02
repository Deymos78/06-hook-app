// El estado inicial es como queremos que se encuentre la aplicacion al principio
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]; 

// ESTO ES UN REDUCER, YA QUE UN REDUCER NO ES MAS QUE UNA FUNCION
// Todo reducer recibe dos argumentos, el estado de la aplicacion(state) y la accion en la que se indica como
// queremos que cambie el estado(action)
const todoReducer = ( state = initialState, action = {} ) => {
    // COmprobarmos el tipo de accion que se va a realizar, es basicamente
    if ( action.type === '[TODO] add todo'){ 
        // Hacemos un spread del state para hacer una copia del estado anterior y agregar le nuevo valor, 
        // de esta forma no mutamos el estado del reducer 
        return [...state, action.payload];
    }
    // El reducer siempre tiene que devolver un estado o alguna forma del estado
    return state;
}
 
let todos = todoReducer();
// Cuando queramos realizar una modificacion a nuestro reducer, debemos mandar una accion, la cual dira como se va a modificar
// Creamos el contenido que queremos introducir al reducer 
const newTodo =  {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}

// Esto seria una accion
const addTodoAction = {
    // El type es un estandar 
    // El type es un simple string para saber el tipo de accion que se disparo 
    type: '[TODO] add todo',
    // Payload es el nombre que se suele colocar y le pasamos el contenido  
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction );

console.log({ state: todos });