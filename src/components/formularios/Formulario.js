import React, {useEffect, useState} from "react";
import Axios from '../../services/Axios';

import {useParams, useNavigate} from 'react-router-dom';

function Formulario() {

  const variables={
    _id:'',
    nombre:'',
    personas: '',
    fecha:'',
    hora:"",
    categoria:"",
  } 

  const [guardarClientes, setguardarClientes]=useState(variables);

  //variable para comparar el parámetro
  const params=useParams();
  const navigate=useNavigate();

  const obtenerValues=(e)=>{
    const {name, value}=e.target;
    setguardarClientes({...guardarClientes, [name]:value});
  } 

  const guardarDatos=(e)=>{

    const formulario=document.getElementById('formcliente');
    const formData= new FormData(formulario);

   Axios.post('/cliente/guardarCliente',formData)
   .then(()=>{
    console.log("Registros guardados exitosamente");
   })
  }

  const oneCliente=async(id)=>{
    const buscarCliente= await Axios.get('/cliente/consultarUnCliente/'+id)
    setguardarClientes(buscarCliente.data);
  }

  const updateCliente=async()=>{
    await Axios.put(`/cliente/updateCliente/${params.id}`,guardarClientes)
    .then(()=>{
      console.log('Datos actualizados correctamente');
    });

    navigate('/');
  }

  const Enviar=(e)=>{
    e.preventDefault();

    if(guardarClientes._id===""){
      guardarDatos();
    }else{
      updateCliente();
    }
  }

  useEffect(()=>{
    oneCliente(params.id);
  },[params.id])

  return (
    <div>
      <form onSubmit={Enviar} id="formcliente">
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">
            Nombre
          </label>
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="nombre"
            value={guardarClientes.nombre}
            onChange={obtenerValues}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">
            Personas
          </label>
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="personas"
            value={guardarClientes.personas}
            onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">
            Fecha
          </label>
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="fecha"
            value={guardarClientes.fecha}
            onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">
            Hora
          </label>
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="hora"
            value={guardarClientes.hora}
            onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">
            Categoria
          </label>
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="categoria"
            value={guardarClientes.categoria}
            onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">
            Comprobante
          </label>
          <div class="col-sm-10">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          {guardarClientes._id===""?"Guardar":"Actualizar"}
          
        </button>
      </form>
    </div>
  );
}

export default Formulario;