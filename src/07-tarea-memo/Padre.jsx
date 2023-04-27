import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    // Un array de numeros que seran los botones y el valor de incremento
    const numeros = [2,4,6,8,10];
    // creamos un hook useState 
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        (num) => {
          setValor( (valor) => valor + num );
        },
        [],
    )

    
    // La siguiente funcion  incrementa el valor en un numero pasado como argumento 
    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    return (
        <div>

            <h1>Padre</h1>
            {/* Mostramos el valor del hook */}
            <p> Total: { valor } </p>

            <hr />

            {/* Recorremos todos los numeros */}
            {/* Le pasamos al Hijo parametros de key(nuemro), numero(numero) y la referencia de la funcion incrementar() */}
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
