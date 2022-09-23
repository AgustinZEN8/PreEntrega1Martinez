import React from "react";

const cards = () => {
      return (
        <div>
          <div className="row bestsellers m-0">
            <div className="col-xs-12 col-md-12 col-lg-4 p-3 d-flex justify-content-center">
              <div className="card border border-5 border-dark" style={{width: '28rem'}}>
              <img src="https://mms.businesswire.com/media/20220223005091/es/1366367/5/Sonic_Movie_2_PR_Image_FINAL.jpg"  style={{width:"200px"}} style={{height:"220px"}}  alt="" />
                <div className="card-body border-top border-5 border-dark">
                  <h5 className="card-title text-dark h3"> Línea de figuras de Sonic the Hedgehog 2® </h5>
                  <p className="card-text"> Ya disponibles la primera tanda de figuras de la película.</p>
                  <div className="p-1 text-center">
                    <a href="#" className="btn btn-primary btn-lg bg-success">Comprar ahora!</a>
                    <a href="#" className="btn btn-primary btn-lg">Añadir al carrito</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 p-3 d-flex justify-content-center">
              <div className="card border border-5 border-dark" style={{width: '28rem'}}>
                <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_SonicMania_image1600w.jpg" alt="" />
                <div className="card-body border-top border-5 border-dark">
                  <h5 className="card-title text-dark h2"> Sonic Mania® </h5>
                  <p className="card-text "> Disfruta ahora el último videojuego de la saga y pruébate a ti mismo.</p>
                  <div className="p-1 text-center">
                    <a href="#" className="btn btn-primary btn-lg bg-success ">Comprar ahora!</a>
                    <a href="#" className="btn btn-primary btn-lg">Añadir al carrito</a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 p-3 d-flex justify-content-center ">
              <div className="card border border-5 border-dark" style={{width: '28rem'}}>
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/110/201/products/remera-30-aniversario-azul1-2809989e39b74475c716225742569344-1024-1024.jpg" style={{width:"200px"}} style={{height:"220px"}} alt="" />
                <div className="card-body border-top border-5 border-dark ">
                    <h5 className="card-title text-dark h2"> Remera 30 aniversario </h5>
                  <p className="card-text"> Celebra los 30 años de Sonic con esta remera oficial.</p>
                  <div className="p-1 text-center">
                    <a href="#" className="btn btn-primary btn-lg bg-success">Comprar ahora!</a>
                    <a href="#" className="btn btn-primary btn-lg">Añadir al carrito</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group row m-3 ">
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex justify-content-center ">
              <div className="card border border-3 border-dark" style={{width: '18rem'}}>
                <div className="card-body">
                  <h5 className="card-title text-center "> Set "Club Guys"</h5>
                  <p>Precio</p>
                  <p>Modelo</p>
                  <p>Stock</p>
                  <a href="#" className="btn btn-primary btn-lg">Añadir al carrito</a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex justify-content-center ">
              <div className="card border border-3 border-dark" style={{width: '18rem'}}>
                <div className="card-body ">
                  <h5 className="card-title text-center"> Team Sonic Racing</h5>
                  <p>Precio</p>
                  <p>Modelo</p>
                  <p>Stock</p>
                  <a href="#" className="btn btn-primary btn-lg">Añadir al carrito</a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex justify-content-center ">
              <div className="card border border-3 border-dark" style={{width: '18rem'}}>
                <div className="card-body ">
                  <h5 className="card-title text-center"> "Sonic the Hedgehog (G)"</h5>
                  <p>Precio</p>
                  <p>Modelo</p>
                  <p>Talle</p>
                  <p>Stock</p>
                  <a href="#" className="btn btn-primary btn-lg">Añadir al carrito</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default cards;