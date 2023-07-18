import React, { useState } from 'react';
import './index.css';
import { Dropdown, Nav } from 'react-bootstrap';

function Menu() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Meu Site
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Página Inicial
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggleOptions}
              >
                Produto
              </a>
              <div
                className={`dropdown-menu ${showOptions ? 'show' : ''}`}
                aria-labelledby="productDropdown"
              >
                <a className="dropdown-item" href="#">
                  Cadastrar
                </a>
                <a className="dropdown-item" href="#">
                  Editar
                </a>
                <a className="dropdown-item" href="#">
                  Deletar
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
