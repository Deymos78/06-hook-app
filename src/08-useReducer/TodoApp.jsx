import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// Este sera el estado inicial de la aplicacion, en el que tendra dos objetos con diferentes propiedades
const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Tiempo',
        done: false,
    }
]

export const TodoApp = () => {
    
    // Aqui creamos una instancia de reducer
    // Esta bien que se llame state pero en este caso serian todos
    // Se suele llamar dispatch cuando se tiene solo un reducer pero si se tiene mas de un reducer en el mismo funtional component se
    // puede llamar dispachesAll
    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    // Esta funcion manejara ls nuevos todo, o los nuevos objetos
    const handleNewTodo = ( todo ) => {
        
        // Creamos primero nuestra accion
        const action = {
            // Primero tiene que tener el nombre de la accion que se va a realizar y colocarla como type
            type: '[TODO] add Todo',
            // Tambien le enviaremos nuestro payload que en nuestro caso es el todo
            payload: todo
        }

        // El dispacher nos sirve para mandar la accion al reducer
        dispatch( action );
    }

    return(
        <>
            <h1>Todo App: 10, <small>pendientes: 2</small></h1>
            <hr />

            {/* Boostrap emplea  12 columnas en total por lo que lo dividimos en 7 y en 5 columnas */}
            <div className="row">

                <div className="col-7">
                    
                    {/* Mostramos la lista de los valore que tengamos almacenados, se lo pasamos como argumento */}
                    <TodoList todos={ todos }/>
                    
                </div>

                <div className="col-5">
                    
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd  onNewTodo( todo )*/}
                    {/* {id: newDate()..., description: '', done: false } */}
                    {/* Pasamos por argumento la referencia a la funcion handleNewTodo */}
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                    {/* Fin TodoAdd */}
                </div>

            </div>
        </>
    )
}