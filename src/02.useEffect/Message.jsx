import { useEffect } from "react"



export const Message = () => {

    // EN ESTE EJEMPLO SE VE CLARAMENTE POR QUE ES IMPORTANTE LA LIMPIEZA EN UN LISTENER
    useEffect(() => {
        // Para remover hay que hacer referencia a la funcion o mejor dicho al espacio en memoria de la funcion
        // Por lo que cuando se quiera remover algo se tioen que crear la referncia
        const onMouseMove = ( { x, y } ) => {
            const coords = { x, y };
            console.log(coords);  
        }
        
        // Creamos un Listener para escuchar los movimiientos del mouse
        // Por cada movimiento que se haga con el mouse se crea un nuevo listener que no se elimina
        // por lo que se crea una fuga de memoria

        // NO SE PUEDE HACER DE LA MANERA CON UNA FUNCION COMO REFERNCIA POR QUE SE CREARIA UN NUEVO ESPACION EN LA MEMORIA 
        // Y NECESIAMOS LA REFERENCIA EN MOMORIA PARA PODER CERRAR ESE LISTENER SINO NO FUNCIONARIA
        // window.addEventListener('mousemove', (event) => {
        //     console.log(event.x, event.y);
        // });
        
        window.addEventListener( 'mousemove', onMouseMove );

      return () => {
        // Para remover el listener se hace de la siguiente manera
        window.removeEventListener( 'mousemove', onMouseMove );

      }
    }, [])
    


  return (
    <>
    
        <h3>Usuario ya existe</h3>
    </>
    )
}
