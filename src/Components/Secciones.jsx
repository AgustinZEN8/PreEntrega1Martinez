import React from "react";

const Secciones = () => {
    return(
        <>   
            <li>
                <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Cosas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Precios</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
        </> 
    )
};

export default Secciones;