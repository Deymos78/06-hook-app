import { useEffect, useState } from "react";


// Creamos un hook para poder realizar una peticion http o https a una url que se nos pasara como un 
// argumento al momento de hacer referencia al hook personalizado
export const useFetch = (url) => {

    // Creamos un hook de estado en el cual lo crearemos con un objeto con los valores de data, isLoadin y hasError por defecto
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    // Creamos una funcion asincrona con la que realizaremos la peticion url hacia una api
    const getFetch = async() => {

        // Le pasamos al state un spread del state, en el cual van los parametros por defecto, ademas se cambia el estado
        // del isLoading a true, ya que en este lugar se realizara la peticion fetch
        setstate({
            
            ...state,
            isLoading: true,

        })

        const resp = await fetch(url);
        const data = await resp.json();


        // Despues de que se realize la peticion ahora introducimos los datos que tenemos de la peticion fetch
        setstate({
            
            data: data,
            isLoading: true,
            hasError: null,

        });
    }

    useEffect(() => {
      
        getFetch();
      
    }, [ url ])
    
  
  
    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,

    }
}
