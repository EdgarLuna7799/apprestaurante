import React, { useEffect } from "react";
import "./App.css";
import { app } from "./fb";
import Rutas from './rutas/Rutas';
import Logueo from "./Logueo"; 



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
