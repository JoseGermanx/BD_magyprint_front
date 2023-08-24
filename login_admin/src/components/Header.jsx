import logo from '../img/logo.png'
import "../css/header.css"


function Header() {
    return (
        <nav id='header-magy' className="navbar navbar-expand-lg bg-body-white">
        <div id='h-m' className="container-fluid">
            <div className='logo'>
               <a href="/"> <img src={logo} alt=""/></a>
            </div>
                <div className='navbar'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbarcollapse navbar-collapse" id="navbarSupportedContent">
                        <ul id='' className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item">
                        <a className="nav-divnk active" aria-current="page" href="/">INICIO</a>
                        </div>
                        <div className="nav-item">
                        <a className="nav-divnk" href="/catalogo">CATALOGO</a>
                        </div>
                        <div className="nav-item">
                        <a className="nav-divnk" href="/empresa">EMPRESAS</a>
                        </div>
                        <div className="nav-item">
                        <a className="nav-divnk" href="/nosotros">NOSOTROS</a>
                        </div>
                        <div className="nav-item">
                        <a className="nav-divnk" href="/contacto">CONTACTO</a>
                        </div>
                        </ul>
                    <form className="d-flex" role="search">
                        <input className="form me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                        <button className="btn btn-outdivne-success" type="submit"><i className="fa-solid fa-magnifying-glass" style={{color: '#3fa09b'}}></i></button>  
                    </form>
                    </div>
                </div>
        </div>
      </nav>

    )
}

export default Header; 
