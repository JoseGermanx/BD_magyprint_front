import '../css/catalogo.css'
import Cards from './Cards'

import { usePosts } from "../context/PostContext";

function Catalogo() {
    const { posts } = usePosts();
    return (
        <div className="container-fluid">
            <div className='flex justify-center'>
            
                <div id="productos">
                    <div id="container">

                        <div className="flex flex-wrap items-center justify-center ">
                            {posts.map((post) => (
                            <Cards post={post} key={post._id} />
                            ))}
                        </div>
                    </div>
                 </div>

            <div className="nested-menu">
                <div className="menu">
                    <div className="buscador">
                        <form>
                            <input className="form me-2" type="text-cat" name="busqueda" placeholder="Buscar..." />
                            <button type="submit">Buscar</button>
                        </form>
                    </div>

                    <div className="menu-container">
                        <h2 className="categorias">CATEGORÍAS DE PRODUCTOS</h2>
                        <button className="seccion">Todos los productos</button><br />
                        <button className="seccion">Accesorios</button><br />
                        <button className="seccion">Cotillón</button><br />
                        <button className="seccion">Decoración</button><br />
                        <button className="seccion">Papeleria</button><br />
                        <button className="seccion">Recipientes</button><br />
                        <button className="seccion">Vestimenta</button><br />
                    </div>

                    <div className="pagination">
                        <a href="/" className="active">1</a>
                        <a href="/">2</a>
                        <a href="/">3</a>
                        <a href="/">4</a>
                        <a href="/">5</a>
                    </div>
                </div>
            </div>
        </div>
</div>
    )

}

export default Catalogo;