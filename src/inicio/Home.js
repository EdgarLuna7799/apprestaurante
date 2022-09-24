import React, { useState, useEffect } from "react";
import Axios from "../services/Axios";

import {useNavigate} from 'react-router-dom';

function Home() {
  const [clientes, setClientes] = useState([]);

  const navigate=useNavigate();

  const buscarClientes = async () => {
    const buscar = await Axios.get("cliente/consultarCliente");
    setClientes(buscar.data);
    console.log(buscar.data);
  };

  const eliminarCliente = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar el dato?")) {
      const eliminar = await Axios.delete("/cliente/eliminarCliente/" + id);
      console.log(eliminar);
    }

    buscarClientes();
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Personas</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Categoria</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Actualizar</th>
          </tr>
        </thead>
        {clientes.map((cliente) => {
          return (
            <tbody>
              <tr>
                <td>{cliente.nombre}</td>
                <td>{cliente.personas}</td>
                <td>{cliente.fecha}</td>
                <td>{cliente.hora}</td>
                <td>{cliente.categoria}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => eliminarCliente(cliente._id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info"

                    onClick={()=>navigate(`/formulario/${cliente._id}`)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Home;