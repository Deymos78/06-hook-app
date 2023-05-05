import React from "react";


// Con el React.memo() memorizamos el componente y evitar que se reenderize de manera innecesaria
// Cuando se usa React.memo() react compara las props del componente entre renderizados y solo lo renderiza si las props han cambiado
export const ShowIncrement = React.memo(( { increment}) => {
    console.log(' Me volvi a generar :(');
    

  return (
    <>
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    </>
  )
})
