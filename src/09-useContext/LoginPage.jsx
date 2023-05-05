import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  // Por lo general los componentes buscan los contextos en la jerarquia superior y no en la inferior
  // Por lo que en caso de tener mas de un UserContext() lo buscaria en la jerarquia superior y no en jerarquias inferiores 
  const { user, setUser } = useContext( UserContext );


  return (
   
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {JSON.stringify( user, null, 3)}
        </pre>

        <button 
          className="btn btn-primary"
          onClick={() => setUser({ id: 123, name: 'Juan', email: 'juan@google.com' }) } 
        >
          Establecer Usuario
        </button>
    </>
  )
}
