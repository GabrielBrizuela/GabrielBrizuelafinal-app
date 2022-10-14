import React from "react";
import dispenser from "../assets/img/Dispensers-frio-calor-para-agua.jpg";
import camion from "../assets/img/Camion-de-soda.png";
import empresa from "../assets/img/Empresa.png";

const Baner = () => {
    return (
        <div className="baner">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={dispenser} width="400" alt="dispenser" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Abonos con dispensers frío-calor</h5>
                            <p>Servicio de bidones de agua con dispenser frío-calor en comodato</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={camion} width="500" alt="camion" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Envios a domicilio</h5>
                            <p>Consulte por la zona de distribución</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={empresa} width="400" alt="Empresa" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>En caso de ser una <strong>empresa</strong> o <strong>comercio</strong> con <strong>mayor consumo mensual</strong></h5>
                            <p>Comuníquese con nosotros y lo asesoraremos</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Baner;

