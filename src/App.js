import React, {Fragment, useState, useEffect} from "react";
import Header from "./components/header";
import Formulario from "./components/formulario";

import ListadoNoticias from "./components/listadoNoticias";

function App() {
  //tengo que definir la categoria inicial
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = REACT_APP_API
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);
  

  



  return (
    <Fragment>
      <Header 
      titulo="Buscador de Noticias" 
      />
      <div className="container white">
        <Formulario 
        guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias 
        noticias={noticias} />
        
      </div>
      </Fragment>
   
 );  
}

export default App;
