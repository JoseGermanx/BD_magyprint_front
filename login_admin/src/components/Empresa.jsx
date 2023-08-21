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

      
      <div id="formulario">
        <div id="form">
          <div className="contact_form">
            <div className="formulario">
              <form action="" method="post">
                <p>
                  <label for="nombre"
                  >Nombre
                    <span>*</span>
                  </label>
                  <input type="text" name="introducir_nombre" id="nombre" required placeholder="Escribe tu nombre" />
                </p>

                <p>
                  <label for="apellido"
                  >Apellido
                    <span>*</span>
                  </label>
                  <input type="text" name="introducir_nombre" id="nombre" required placeholder="Escribe tu apellido" />
                </p>

                <p>
                  <label for="email"
                  >Email
                    <span>*</span>
                  </label>
                  <input type="email" name="introducir_email" id="email" required placeholder="Escribe tu Email" />
                </p>

                <p>
                  <label for="telefono">Teléfono </label>
                  <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
                </p>

                <p>
                  <p>Servicios</p>
                  <br />
                  <label className="checkbox_productos"
                  >Lapices
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox_productos"
                  >Termos
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox_productos"
                  >Destapadores
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox_productos"
                  >Llaveros
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </p>

                <p>
                  <label for="mensaje"
                  >Mensaje
                    <span>*</span>
                  </label>
                  <textarea
                    name="introducir_mensaje"
                    id="mensaje"
                    required
                    placeholder="Deja aquí tu comentario..."
                  ></textarea>
                </p>

                <button type="submit" name="enviar_formulario" id="enviar"><p>Mas Info</p></button>

                <p className="aviso"><span> * </span>los campos son obligatorios.</p>
              </form>
            </div>
          </div>
        </div>

        <div id="img-muestra">
          <div id="img_derecha">
            <figure>
              <img src={img1} />
            </figure>
          </div>
          <div id="img_derecha">
            <figure>
              <img src={img2} />
            </figure>
          </div>
          <div id="img_derecha">
            <figure>
              <img src={img3} />
            </figure>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Empresa;