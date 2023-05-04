import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    // <>
    //     {/* Este tipo de Links permiten que no se recarge toda la pagina y solo carge el componente adecuado ya que si se recarga toda la 
    //         pagina se tendria que cargaar denuevo todos los componentes y acciones y eso conlleva una gran cantidad de recursos y tiempo */}
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/login">Login</Link>
    
    // </>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-4">
        <div className="container-fluid">

            <Link className="navbar-brand" to="/">Navbar</Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                   
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/"  
                    >
                        Home
                    </NavLink>
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/about" 
                    >
                        About
                    </NavLink>
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/login" 
                    >
                        Login
                    </NavLink>
                  
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}
