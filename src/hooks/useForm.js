import { useState } from "react";



// El argumento inicial sera nulo en caso de que no resivamos nada 
// En el caso de formWithCustomHook.jsx nos pasa un objeto con los valores de username, email y password
export const useForm = ( initialForm = {} ) => {
  
    // Inicializamos el useState con los valores que nos haya pasado
    const [formState, setformState] = useState ( initialForm );
 
    // Aqui esta desestructuracion no tiene mucho sentido ya que otro formulario puede tener otros campos 
    // const { username, email, password } = formState;

 
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
