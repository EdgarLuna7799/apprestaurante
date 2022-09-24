import React from "react";

import { Link } from "react-router-dom";



export default function barraMenu() {
  return (
    <div>   
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            App MonteVerde
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/formulario">
                  Formulario
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pago">
                  Referencia
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/tabla">
                  Reservación
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}