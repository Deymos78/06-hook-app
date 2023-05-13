import { todoReducer } from "../08-useReducer/todoReducer";
import { useEffect, useReducer } from "react"



// Este sera el estado inicial de la aplicacion, en el que tendra dos objetos con diferentes propiedades
// const initialState = [
//     // {
//     //     id: new Date().getTime(),
//     //     description: 'Recolectar la piedra del Alma',
//     //     done: false,
//     // },
    
// ];


// init es el nombre que se suele colocar y esta es la funcion que inicializa el reducer
// De esta manera tendremos los elementos guardados y no se borraran aunque recarguemos la pagina
const init = () => {
    // Aqui hacemos un parse del almacenamiento ademas de que en el caso de que no haya nada en el todos 
    // devolveremos un objeto vacio en lugar de un null, ya que un pase de un objeto vacio es null
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];

}

export const useTodo = () => {

    // Aqui iniciamos el useReducer, le pasamos como primer argumento un reducer, como segundo un array vacio, y 
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );


    const pendingTodosCount = () =>{

    };


    // Donde estamos los comerntaio de dpnde 
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
    };


    // Manejar evento de eliminacion
    const handleDeleteTodo = ( id ) => {
        // console.log({id});
        dispatch({
            type: '[TODO] remove Todo',
            payload: id
        });
    };

    // Manejamos el estado del elemento
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] toggle Todo',
            payload: id
        });
         
    }


    // En este useEffect colocamos la clave de 'todos' en el almacenamiento local
    // Lo colocamos en un useEffect para que solo se guarde cuandno haya una cambio en almacenamiento de los todos

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])



  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    

  }
}
