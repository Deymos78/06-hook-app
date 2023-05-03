import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";
import { useEffect } from "react";



export const TodoApp = () => {


    // HAY QUE CREAR UN CUSTOM HOOK QUE SE LLAME useTodo
    // todo, handleDeleteTodo handleToggleTodo handleNewTodo
    
    // Aqui creamos una instancia de reducer
    // Esta bien que se llame state pero en este caso serian todos
    // Se suele llamar dispatch cuando se tiene solo un reducer pero si se tiene mas de un reducer en el mismo funtional component se
    // puede llamar dispachesAll
    // Colocamos el init dentro del reducer para que cuando se recargue los datos almacenados persistan hasta que se diga lo contrario
    // const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();
    // todos.filter( todo => !todo.done).length

    return(
        <>
            <h1>Todo App: { todosCount }, <small>pendientes: { pendingTodosCount}</small></h1>
            <hr />

            {/* Boostrap emplea  12 columnas en total por lo que lo dividimos en 7 y en 5 columnas */}
            <div className="row">

                <div className="col-7">
                    
                    {/* Mostramos la lista de los valore que tengamos almacenados, se lo pasamos como argumento */}
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }    
                    />
                    
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