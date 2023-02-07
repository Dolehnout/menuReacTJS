import React from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/inicio" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/saludos" className="nav-link">
              Saludos
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/mision" className="nav-link">
              Misión
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/vision-pucese" className="nav-link">
              Visión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
