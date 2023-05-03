

// ESTE COMPONENTE FUNCIONAL COLOCA EN UNA LISTA CADA TODO QUE SE LE PASE
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo  } ) => {
  return (

    <>
        <div>TodoItem</div>

        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span 
            // text-decoration-line-through
              // Si lo hacemos de esta manera lo que sucede es que se crea una clase false cuando es false
              // className={`align-self-center ${ todo.done && 'text-decoration-line-through'}`}
              // De esta manera no se coloca la clase false y en su lugar solo se agrega un espacio
              className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': '' }`}
              onClick={() => onToggleTodo( todo.id )}
            >
              { todo.description }
            </span>
            <button 
              className="btn btn-danger"
              onClick={ () => onDeleteTodo( todo.id )  } 
            >
              Borrar
            </button>
        </li>
    
    </>
    
  )
}
