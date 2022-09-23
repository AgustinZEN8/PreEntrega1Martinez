 
import React, {useState,useEffect} from "react";  

 const Home = () => {
    const [productos,setProductos] = useState ([])

    useEffect (() => {
        const consultarBDD =async () => {
            const response = await fetch ("./json/productos.json")
            const productos = await response.json()
            const cardProducto = productos.map (producto =>
                <div className="card cardProducto" key={producto.id} style={{Width: '12rem'}}>
                <img src={"./img/"+ producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <a href=""></a>
                </div>
              </div>)
        }
    }
    )
    }





export default Home;