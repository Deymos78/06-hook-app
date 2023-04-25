import { useCounter } from "../hooks/useCounter"




export const CounterWithCustomHook = () => {


    // Como el useCounter devuelve un objeto se pueden usar en la desestructuracion los corchetes normales {}, pero si lo que se devuelve
    // es un arreglo tendremos que usar las llaves cuadradas []
    const { counter, increment, decrement, reset } = useCounter();




  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        {/* Lo que hacemos al momento de hacer onClick={incremente} es mandar el evento onClick como primer argumento
            a la funcion increment  */}
        {/* <button className="btn btn-primary" onClick={ (event) => increment(event) }>+1</button> */}
        <button className="btn btn-primary" onClick={ () =>increment(2) }>+1</button>
        <button className="btn btn-primary" onClick={ reset }>Reset</button>
        <button className="btn btn-primary" onClick={ () =>decrement(2) } >-1</button>




    </>
  )
}
