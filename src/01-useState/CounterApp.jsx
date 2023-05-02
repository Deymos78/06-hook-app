import { useState } from "react"


export const CounterApp = () => {



  // El useState se usa para  crear y actualizar el estado de un componente funcional,
  // 

    const [ state, setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3} = state;

  return (
    <>
    
        <h1>Counter1: { counter1 } </h1>
        <h1>Counter2: { counter2 } </h1>
        <h1>Counter3: { counter3 } </h1>

        <hr />

        <button  className="btn" onClick={ 
            () => setcounter({
                counter1: counter1 +1,
                counter2,counter3
            }) 
            }>+1</button>



    </>
  )
}
