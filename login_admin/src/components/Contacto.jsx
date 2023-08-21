import React, { Fragment } from 'react';
import ubicacion from "../imgcont/ubicacion.png";
import whats from "../imgcont/wsp.png";
import email from "../imgcont/email.png";
import reloj from "../imgcont/reloj.png";
import "../css/contacto.css";
/* import "../js/script"; */

function Contacto() {
    return (
        <Fragment>
            <div className='contacto'>
            <div className="container color-titulo">

                <div className="margen-top">
                </div>
                <div className="row margen-top">
                    <div className="col-12 col-md-4">
                        <div className="ubi">
                            <img src={ubicacion} alt="" /> <br />
                            <span className='titulotarjeta'>UBICACION</span>
                            <p className='ptarjeta'>Av. Brasil 7948, Renca</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="email">
                            <img src={whats}  alt="" /> <br />
                            <span className='titulotarjeta'>EMAIL</span>
                            <p className='ptarjeta'>magyprint7@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="fono">
                            <img src={email} alt="" /><br />
                            <span className='titulotarjeta'>TELÉFONO</span>
                            <p className='ptarjeta'>+56 977869076</p>
                        </div>
                    </div>
                    <div className="row margen-top">
                        <div className="col-12 col-md-6">
                            <h1>CUÉNTANOS TU PROYECTO</h1>

                            <form id="projectForm">

                                <div className="mb-3">
                                    <label for="nombre" className="form-label">Nombre<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control rounded-4 " id="nombre" name="nombre" required />
                                </div>

                                <div className="mb-3">
                                    <label for="apellido" className="form-label">Apellido<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control rounded-4" id="apellido" name="apellido" required />
                                </div>

                                <div className="mb-3">
                                    <label for="email" className="form-label">Email<span className="text-danger">*</span></label>
                                    <input type="email" className="form-control rounded-4" id="email" name="email" required />
                                </div>


                                <div className="mb-3">
                                    <label for="telefono" className="form-label">Número de Teléfono</label>
                                    <input type="tel" className="form-control rounded-4" id="telefono" name="telefono" />
                                </div>

                                <div className="mb-3">
                                    <label for="servicio" className="form-label">Servicio</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="opcion1" id="opcion1"
                                            name="servicio[]" />
                                        <label className="form-check-label" for="opcion1">Bordado</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="opcion2" id="opcion2"
                                            name="servicio[]" />
                                        <label className="form-check-label" for="opcion2">Impresión Directa(DTG)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="opcion3" id="opcion3"
                                            name="servicio[]" />
                                        <label className="form-check-label" for="opcion3">Estampado Vinilo</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="opcion4" id="opcion4"
                                            name="servicio[]" />
                                        <label className="form-check-label" for="opcion4">Estampado DTF</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="opcion5" id="opcion5"
                                            name="servicio[]" />
                                        <label className="form-check-label" for="opcion5">Impresión Digital</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="mensaje" className="form-label">Mensaje<span className="text-danger">*</span></label>
                                    <textarea className="form-control no-resize rounded-4" id="mensaje" name="mensaje" rows="4"
                                        required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="formFile" className="form-label">Sube tu imagen</label>
                                    <input className="form-control" type="file" id="formFile" accept=".jpg, .png, .gif"
                                        title="Selecciona un archivo" />
                                </div>
                                <button type="submit" className="btn btn-primary">Más información</button>
                            </form>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>

                                <div className="just">
                                    <p className="reloj"><img src={reloj} alt="" /></p>
                                    <p className="horario">HORARIO DE ATENCIÓN</p>
                                </div>
                                <div>
                                    <p className="atencion">
                                        Lunes a Virnes 9:00 AM a 18:00 PM | <br />Sábados y Domingos Cerrado
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            </div>
            
        </Fragment>
    )
}
export default Contacto;