

// ESTE COMPONENTE FUNCIONAL COLOCA EN UNA LISTA CADA TODO QUE SE LE PASE
export const TodoItem = ({ todo }) => {
  return (

    <>
        <div>TodoItem</div>

        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    
    </>
    
  )
}
