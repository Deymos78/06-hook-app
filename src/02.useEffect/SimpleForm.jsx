import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'fernando',
        email: 'fernando@google.com' 
    });

    const { username, email } = formState;

    // Creamos una funcion la cual se lanzara cada vez que se cambie el estado en cualquiera de los dos campos 
    // tanto en el de username o en el de email
    // tambien desestructuramos el eventto event del input y pasamos como argumento el target del event
    const onInputChange = ({target}) => {
        // Desestructuramos el target para quedarnos con le name y el value del input que se ha modificado
        const { name, value } = target;
        // Seteamos el arreglo para pasarle todas las propiedades
        // ademas cambiamos el valor de una de sus propiedades copn el value en este caso
        setformState({
            ...formState,
            [name]: value
        })
    };
    
    // Cuando queremos que se haga un efecto por cada evento especifico hay q crear un useeffect por cada uno de ellos
    useEffect(() => {
        // console.log('usedE ffect called');
     
    }, []);
    
    // Este useEffect lo que hara sera salta cuando se cambia algun valor dentro del formulario y solo del formulario
    useEffect(() => {
        // console.log('formState changed');
     
    }, [formState]);
    
    // Este useEffect lo que hara sera saltar cuando se cambia algun valor del input del email
    useEffect(() => {
        // console.log('email changed');
     
    }, [ email ]);
    
    // useEffect(() => {
    //     // La primera parte de un useEffect es el cuerpo del hook
    //   first
    
    //   // La segunda parte de un useEffect es un cleanup
    //   return () => {
    //     second
    //   }
    //   // La ultima parte es un arreglo de dependencias 
    // }, [third])
    




  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange } 
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />


        {
            (username === 'fernando') &&  <Message />
        }

        




    </>
  )
}
