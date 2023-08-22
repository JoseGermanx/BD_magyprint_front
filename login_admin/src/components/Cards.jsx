
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
              <a href="https://api.whatsapp.com/send/?phone=%2B56951386716&text=Hola%2C+necesito+informaci%C3%B3n+de+sus+productos&type=phone_number&app_absent=0">Cotizar</a>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Cards;