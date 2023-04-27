import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {


    const { counter, increment} = useCounter( 1 );
    // Aqui es donde pasaremos la url que nos pide el hook que hemos personalizado
    // Ahora lo podemos desestructurar en los elementos que pasa el return del hook
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // console.log( { data, isLoading, hasError } );
    // Lo malo de desestructurar la data de la respuesta es que si viene vacia, me dara un error 
    // const { author, quote } = data;


    // De esta forma hacemos un condicional al momento de desestructurar y evitamos que desestructure un array vacio y de un error
    // En el !!data, lo que hacemos es negarlo dos veces, y en el caso de que el valor que se devuelva sea un undefined la doble
    // negacion lo convertirar en un false y no devolvera el valor de la posicion [0]
    const { author, quote } = !!data && data[0];


  return (
    <>

        <h1>BreakingBad Quotes</h1>
        <hr />

        {/* {
            (isLoading)
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                )
                :(

                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ author }</p>
                        <footer className="blockquote-footer">{ quote }</footer>
                    </blockquote>
                )

        } */}

        {
            isLoading
            ? <LoadingQuote/>
            : <Quote author={ author } quote={ quote }/> 
        }

     

        <button className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
            Next quote
        </button>
        
    </>
  )
}
