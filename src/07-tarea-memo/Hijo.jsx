import React from "react";


// El Funtional Component recibe un argumento el cual lo desestructuramos y obtenemos dos valores
// el numero y la referencia de la funcion incrementar()
export const Hijo = React.memo(({ numero, incrementar }) => {

    // Generamos la impresion por pantalla cada vez que se realizara la renderizacion del componente
    console.log('  Me volví a generar :(  ');

    return (
        // Devolvera un boton por cada valor que se le pase
        <button
            className="btn btn-primary mr-3"
            // Cada boton tiene ligado una funcion
            onClick={ () => incrementar( numero ) }
        >
            {/* Imprimimos el numero que recibimos */}
            { numero }
        </button>
    )
})
