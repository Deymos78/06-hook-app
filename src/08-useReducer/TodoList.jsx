import React from 'react'
import { TodoItem } from './TodoItem'

// En este componente funcional recibimos los todos, si no viene nada se coloca como un array vacio
export const TodoList = ({ todos = [], onDeleteTodo} ) => {




  return (
    <>
        <div>TodoList</div>
        <ul className="list-group">
            {

                // Recorremos los objetos y se lo pasamos como argumento
                todos.map( todo => (
                    // TodoItem
                    <TodoItem key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo }/>
                ))
                
            }

        </ul>
    </>
  )
}
