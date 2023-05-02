import { useForm } from "../hooks/useForm"

// ES COMPONENTE FUNCIONAL ES EL FORM Y SU COMPORTAMIENTO
export const TodoAdd = ({ onNewTodo }) => {

    // INICIALIZAMOS UN HOOK PERSONALIZADO PARA FORMULARIOS
    // Como nos pide un objeto le colocamos la descripcion, el cual tambien nos servira para apuntar al form a traves
    // de
    const {description, formState, onInputChange, onResetForm} = useForm({
        description: '',
    });

    // Esta funcion se ejecutara cuando el formulario sea enviado
    const onFormSubmit = ( event ) => {
        // Tenemos que evitar que se recargue la pagina cada vez que damos enter
        event.preventDefault();

        // Comprobamos que la longitud dell input sea de mas de un caracter y que no este vacio
        if( description.length <= 1 ) return;
        
        // Aqui crearemos el nuevo TODO
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        // Aqui hacemos referencia a la funcion que mostrara por consola lo introducido
        onNewTodo( newTodo );

        // Esta funcion limpia lo que haya en el formulario
        onResetForm();
    };

  return (
    <>
        <div>TodoAdd</div>

        {/* Cuando se envie el formulario realizaremos la funcion */}
        <form onSubmit={ onFormSubmit }>

            {/* El name  */}
            <input 
                type="text" 
                placeholder="¿Que hay que hacer?"
                className="form-control"
                // El name es importante que se llame como hemos creado el reducer ya que lo usara para saber a que input dirigirse
                name="description"
                value={ description }
                onChange={ onInputChange } 
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>

        </form>
    
    </>
    
  )
}
