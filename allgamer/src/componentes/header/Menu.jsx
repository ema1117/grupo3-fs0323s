import React from 'react'

const Menu = () => {
  return (
    <div >

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="hamburguesa mt-3 mt-lg-0 "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle letraRosa" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias
        </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pc's Armadas</a></li>
            <li><a className="dropdown-item" href="#">Placas de video</a></li>
            <li><a className="dropdown-item" href="#">Almacenamiento</a></li>
            <li><a className="dropdown-item" href="#">MotherBoards</a></li>
            <li><a className="dropdown-item" href="#">Memoria Ram</a></li>
            <li><a className="dropdown-item" href="#">Fuentes</a></li>
            <li><a className="dropdown-item" href="#">Mouse, Teclados y Parlantes</a></li>
            <li><a className="dropdown-item" href="#">Monitores</a></li>
            <li><a className="dropdown-item" href="#">Otros</a></li>
          </ul>
      </li>
    <li className="nav-item">
      <a className="nav-link letraRosa" href="#">Arma tu PC</a>
    </li>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle letraRosa" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Consolas
        </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nintendo</a></li>
            <li><a className="dropdown-item" href="#">Playstation</a></li>
            <li><a className="dropdown-item" href="#">Xbox</a></li>
            <li><a className="dropdown-item" href="#">Sega</a></li>
          </ul>
      </li>
    <li className="nav-item">
      <a className="nav-link letraRosa" href="#" >Marcas</a>
    </li>

    <li className="nav-item">
      <a className="nav-link letraRosa" href="#">Sobre Nosotros</a>
    </li>
      </ul>
    </div>
  </div>
  )
}

export default Menu