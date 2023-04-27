import { useRef } from "react"



export const FocusScreen = () => {


    // El inputRef se utiliza para crear una referencia mutable que se puede utlizar para mantener un valor a traves de multiples
    // renderizados del componente
    const inputRef = useRef();

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            type="text" 
            placeholder="Ingrese su nombre"   
            className="form-control" 
        />
        <button className="btn btn-primary mt-2">
            Set Focus
        </button>
    
    
    </>
  )
}
