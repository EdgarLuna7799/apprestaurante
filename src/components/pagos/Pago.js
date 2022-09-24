import React from 'react'
import { Link } from "react-router-dom";

function Pago() {
  return (
    <div>
      <img src="https://incredibletravelperu.com/wp-content/uploads/2020/04/Metodos-de-pago-incredible-peru-travel.png" class="rounded mx-auto d-block" alt="..."></img>
      <div class="card text-center">
  <div class="card-header">
  Pago por Reservación
  </div>
  <div class="card-body">
    <h5 class="card-title">Transferencia</h5>
    <p class="card-text">Numero de cuenta:  6141 2734 09467 2432.</p>
    <p class="card-text">Beneficiario:  Edgar Fermin Luna Arcos.</p>
    <p class="card-text">Monto: $300.</p>
    <button type="submit" class="btn btn-primary">
                 <Link class="nav-link" to="/formulario">
                  Ya Pague
                </Link>
        </button>
  </div>
  <div class="card-footer text-muted">
    ¡Una vez realizado el pago rellene el formulario!
  </div>
</div>
    </div>
  )
}

export default Pago