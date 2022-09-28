import React, { useEffect } from "react";
import { app } from "./fb";
import Logueo from "./Logueo";
import './App.css';
import Rutas from './rutas/Rutas';


function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return <>{usuario ? <Rutas/> : <Logueo setUsuario={setUsuario} />}</>;
}

export default App;