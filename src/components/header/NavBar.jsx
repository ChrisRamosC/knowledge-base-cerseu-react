import { Avatar } from "@mui/material";
// import header.css
import '../../styles/Header.css';

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark"  >
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">INICIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq/courses-info">CURSOS</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq">SOBRE NOSOTROS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="https://sistemas.unmsm.edu.pe/site/cerseu" target="_blank">CERSEU</NavLink>
            </li>
          </ul>
          {/* i need an image avatar with hola, Christopher and rol "estudiante" */}
          <div className="d-flex">
            <Avatar className="avatar" alt="Christopher Ramos" src="img/avatar.jpg" />
            <div>
              <p className="m-0">Hola, Christopher</p>
              <p className="m-1">Estudiante</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
