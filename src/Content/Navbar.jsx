import React from "react";
import Form from "../Components/Form";
import Secciones from "../Components/Secciones";
import Carrito from "../Components/Carrito";

const Navbar = () => {
  const listCarrito = ["Modelo","Marca","Precio","Comprar"]
  return (
    <>
      <nav class=" navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto"> 
                <Secciones/>
                <Carrito lista={listCarrito}/>
            </ul>
            <Form busqueda="Buscar producto"/>
          </div>
        </div>
      </nav>
    </>
  )
};


export default Navbar;