import { useState } from "react"


// Estos son Hooks personalizados, los cuales hacen funciones especificas, pero siempre terminan desembocando
// en un hook de react, en este caso termina en el hook state de react
export const useCounter = (initalValue  = 10) => {

    // Aqui inicializamos un hook de react el hook state
    const [counter, setcounter] = useState(initalValue);

    // Aqui creamos una funcion la cual incrementara el valor del counter en 1 cada vez que sea llamada
    const increment = (value = 1) => {
        setcounter( counter + value );
    }

    // Los numeros negativos no suelen ser buenos, por lo que tenemos que evitar que el valor sea negativo
    const decrement = (value = 1) => {
        // Con este condicional evitamos que el valor del contador sea inferior a 0
        // if ( counter === 0 ) return ;
        setcounter( counter - value );
    }

    const reset = () => {
        setcounter( initalValue );
    }

    // Retornamos dos objetos, por un lado el counter que es el valor que almacena el contador y por otro lado la referencia de la
    // fucnion la cual podremos usar para llamar la funcion que se encuentra aqui
    return{
        counter,
        increment,
        decrement,
        reset,
    };
}