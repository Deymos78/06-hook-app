import { useRef } from "react"



export const FocusScreen = () => {


    // El inputRef se utiliza para crear una referencia mutable que se puede utlizar para mantener un valor a traves de multiples
    // renderizados del componente
    const inputRef = useRef();

    // En la funcion onClick() imprimimos el 
    const onClick = () => {

      // console.log(inputRef);
      inputRef.current.select();
    
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            // Aqui le pasamos la constante inputRef para poder controlar la referencia 
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"   
            className="form-control" 
        />
        <button onClick={ onClick } className="btn btn-primary mt-2">
            Set Focus
        </button>
    
    
    </>
  )
}
