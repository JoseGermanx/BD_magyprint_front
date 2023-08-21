import ubicacionn from "../imgcont/ubicacion-01.png"
import ig from "../imgcont/ig-02.png"
import wsp from "../imgcont/wasap-03.png"
import trans from "../imgcont/logos-transbank-2.png"
import logi from "../imgcont/LOGO2.png"
import "../css/footer.css"


function Footer() {
    return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 direccion">
          <h5>Ubicación</h5>
          <img src={ubicacionn} className="ubicacion" alt=""/>
          <p>Lorem ipsum dolor sit ?</p>
        </div>
        <div className="col-md-3 contacto">
          <h5 className="tamaño">Síguenos</h5>
          <img src={ig} className="ig"/>
          <p>magy_print_imprimetuidea</p>
          <img src={wsp} className="wasap"/>
          <p>+569 12345678</p>
        </div>
        <div className="col-md-3 pago">
          <h5>Medios de pago</h5>
          <img src={trans} className="mediosdepago" alt=""/>
        </div>
        <div className="col-md-3 navegador">
          <ul>
            <li type="none">inicio</li>
            <li type="none">tienda</li>
            <li type="none">nosotros</li>
            <li type="none">empresa</li>
            <li type="none">contacto</li>
            </ul>
            <img src={logi} className="logofooter"/>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
