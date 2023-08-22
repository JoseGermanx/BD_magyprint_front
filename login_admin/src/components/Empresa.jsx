import img1 from "../imgemp/img/img_1_polera.png"
import img2 from "../imgemp/img/img_2_poleron.png"
import img3 from "../imgemp/img/img_3_agenda.png"
import "../css/empresa.css"
import {PostEmpresa} from "./PostEmpresa";
import { usePosts } from "../context/CompanyContext";



function Empresa() {

  const { posts } = usePosts();

  
  
  return (
    <div id="empresa">
      <div id="info_empresas">
        <p>Descubre Magyprint, la tienda de productos personalizadosmás creativos y originales. <br />
        Fundada por Margarita, Magyprint ofrece una amplia gama de artículos únicos para tu empresa, <br />
         desde tazas, llaveros, bolsas, botellas, mug térmico, poleras personalizadas, hasta cuadernos y <br />
         lo que quisieras crear personalizado. Lo que hace destacar a Magyprint es la posibilidad de que los <br />
         clientes envíen sus propios diseños y fotos, creando regalos personalizados y únicos. <br /><br />
         Con una creciente reputación por su calidad, originalidad y responsabilidad, Magyprint se <br />
         ha convertido en la elección preferida para aquellos que buscan regalos especiales y con <br />
         significado. ¡Descubre el poder de la creatividad en cada regalo que das!
        </p>
      </div>

      <h2 id="titulo-productos"><b>PRODUCTOS EMPRESAS</b></h2>

      <div id="productos">
      <div id="container">

      <div className="flex flex-wrap items-center justify-center ">
        {posts.map((post) => (
          <PostEmpresa post={post} key={post._id} />
        ))}
      </div>
      </div>
      </div>

      
      <div className="grid-inferior-fluid">
        <div className="formulario">
          <h2>CUÉNTANOS TU PROYECTO</h2>
          <h5>Todos los campos marcados con un asterisco (*) son obligatorios.</h5>
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
                <label className="form-check-label" for="opcion1">Accesorios</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="opcion2" id="opcion2"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion2">Decoración</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="opcion3" id="opcion3"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion3">Papeleria</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="opcion4" id="opcion4"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion4">Recipientes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="opcion5" id="opcion5"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion5">Vestimenta</label>
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
            <button type="submit" className="boton-c">Enviar</button>
          </form>
        </div>

        <div className="imagenes-emp">
          <div className="img_derecha">
            <img src={img1} className="imagen-lateral" />
            <img src={img2} className="imagen-lateral" />
            <img src={img3} className="imagen-lateral" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Empresa;