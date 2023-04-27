import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

    const [counter, setcounter] = useState( 10 );

    // El useCallBack sirve para memorizar una funcion y almacenarla para evitar que se ejecute cada vez que se renderiza el componente
    // El segundo parametro se usara pasa saber cuando volverla a ejecutar y almacenar, lo cual solo sucede si el prop cambia
    const incrementFather = useCallback(
      () => {
        setcounter( (value) => value + 1 );
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setcounter( counter +1 );
    // }
  return (
    <>
    
        <h1>UseCallBack Hook: { counter }</h1>
        <hr />
        <ShowIncrement  increment={ incrementFather }/> 
    </>
  )
}
