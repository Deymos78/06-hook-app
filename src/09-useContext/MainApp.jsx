import { Navigate, Route, Routes, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
  return (
    // Al colocar el UserProvider en el nivel mas alto de la aplicacion, en este caso en el lugar donde cualquier componente  puede
    // tener acceso al userProvider y obtener la informacion que hemos configurado
    <UserProvider>
    
        {/* <h1>Main App</h1> */}
        
        {/* De esta manera Hacemos la lectura de los componentes mas amena y organizada */}
        <NavBar/>

        <hr />

        <Routes>
            {/* Aqui en el path especificamos la ruta de inicio y el elemento al que queremos mostrar  */}
            <Route path="/" element={ <HomePage/>} />          
            <Route path="login" element={ <LoginPage/>} />          
            <Route path="about" element={ <AboutPage/>} />      
                 
              
            {/* Usamos esta ruta para cuando se busque una ruta en especifico pero no se encuentre la pagina, se mostrara una por defecto */}
            {/* <Route path="/*" element={ <LoginPage />} />       */}

            <Route path="/*" element={ <Navigate to="/about" />} />

                
        </Routes> 
    </UserProvider> 
  )
}
