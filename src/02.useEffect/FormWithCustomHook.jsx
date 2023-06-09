import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

   
    // El useForm lo inicializamos con varios valores sin ningun valor
    const {formState, onInputChange, onResetForm, username, email, password} = useForm ({
        username: '',
        email: '',
        password: ''
    }
    );

    // Como pasamos el useForm
    // const { username, email, password } = formState;



  return (
    <>
        <h1>Formulario Con Custom Hook</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange } 
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        
        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
