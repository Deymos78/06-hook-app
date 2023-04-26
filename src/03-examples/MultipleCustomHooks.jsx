import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    // Aqui es donde pasaremos la url que nos pide el hook que hemos personalizado
    // Ahora lo podemos desestructurar en los elementos que pasa el return del hook
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

    // console.log( { data, isLoading, hasError } );
    // Lo malo de desestructurar la data de la respuesta es que si viene vacia, me dara un error 
    // const { author, quote } = data;


    // De esta forma hacemos un condicional al momento de desestructurar y evitamos que desestructure un array vacio y de un error
    const { author, quote } = !!data && data[0];


  return (
    <>

        <h1>BreakingBad Quotes</h1>
        <hr />

        {
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

        }
    </>
  )
}
