import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'fernando@google.com',
// }


// El children serian los componentes hijos
export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()


  return (
    // En esta parte renderizaremos los componentes children y no importa cuantos vengan
    // Para que sea un Provider  tenemos que proveer la informacion que se dara a los componentes 
    // <UserContext.Provider value={{ hola: 'Mundo', user : user}} >
    <UserContext.Provider value={{ user, setUser  }} >
        { children }
    </UserContext.Provider>
  )
}
