import { Link } from "react-router-dom";

export const NavComponent = ({ rutas }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  rounded-3 barra" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {rutas.map((ruta) => {
                                return (
                                    <li class="nav-item">
                                        <Link to={`/${ruta.url}`} className= {`btn btn-outline-${ruta.clase} me-2`}>
                                            {ruta.nombre}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
