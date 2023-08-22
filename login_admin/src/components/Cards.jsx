
import "../css/Cards.css";

import { useNavigate } from "react-router-dom";

function Cards ({post}) {
    const navigate = useNavigate();
    return (  
        <div onClick={() => navigate(`/catalogo/${post._id}`)}
    >
        <div>      
        <div id="cards">
            <figure>
            {post.image && (<img src={post.image.url} />)}
            </figure>
            <div id="contenido">
              <h2>{post.title}</h2>
              <h5>{post.description}</h5>
              <a href="#">Cotizar</a>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Cards;