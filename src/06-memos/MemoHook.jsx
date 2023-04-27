import { useMemo, useState } from "react";
import { useCounter } from "../hooks";


const heavyStuff = ( iterationNumber = 100 ) => {
    
    for( let i = 0; i<iterationNumber; i++ ){
        console.log(' Ahi vamos...');
    }
    
    
    return `${ iterationNumber } iteraciones realizadas`;
}


export const MemoHook = () => {

    const { counter, increment} = useCounter( 10 );
    const [show, setshow] = useState( true ) 

    // El useMemo se usa para almacenar en cache el resultado de una funcion de manera que se evita recalcular cada 
    // vez que se renderiza un componente
    // El use memo como primer argumento recibe una funcion de la cual almacenara el resultado y como segundo 
    // argumento recibe una lista de dependencias la cual es opcional y sirve para indicarle cuando ejecutarse nuevamente
    // useMemo(() => first, [second]);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={() => increment() }
        >
            +1
        </button>
        
        <button
            className="btn btn-outline-primary"
            onClick={ () => setshow( !show ) }
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    
    </>
  )
}
