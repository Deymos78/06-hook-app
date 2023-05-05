import { useState } from "react";



// El argumento inicial sera nulo en caso de que no resivamos nada 
// En el caso de formWithCustomHook.jsx nos pasa un objeto con los valores de username, email y password
export const useForm = ( initialForm = {} ) => {
  
    // Inicializamos el useState con los valores que nos haya pasado
    // El objeto que pasamos como argumento puede variar
    const [formState, setformState] = useState ( initialForm );
 
    // Aqui esta desestructuracion no tiene mucho sentido ya que otro formulario puede tener otros campos 
    // const { username, email, password } = formState;

 
    // Cuando se realize un cambio en un input aqui recibiremos el eventro del input, desestructuramos el target para
    // obtener el name y el value
    const onInputChange = ({target}) => {
        // Desestructuramos el target para quedarnos con le name y el value del input que se ha modificado
        const { name, value } = target;
        // Seteamos el arreglo para pasarle todas las propiedades
        // hacemos un spread de los valores del objeto
        // ademas cambiamos el valor de una de sus propiedades copn el value en este caso
        setformState({
            ...formState,
            [name]: value
        })
       
    };


    const onResetForm = () => {
        setformState( initialForm );   
    }

  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}
