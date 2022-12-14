import "./NavBar.css";
import carritoImg from "../CartWidget/shopping-cart.svg";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

function NavBar ()  {
  
    return(
        <>
        <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/">Movies Ecommerce</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </Link>
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item " to={`/category/Drama`}>Drama</Link></li>
                  <li><Link className="dropdown-item " to={`/category/Comedy`}>Comedia</Link></li>
                  <li><Link className="dropdown-item " to={`/category/Horror`}>Horror</Link></li>
                </ul>                
              </li>              
            </ul>
            <p className="navbar-brand" ></p>
            <form className="d-flex" role="search">              
            {/* <Link to="/LogIn"  className="btn btn-outline-success" type="submit">Log In</Link> */}
              <CartWidget imgUrl ={carritoImg} />              
            </form>
          </div>
        </div>
      </nav>
      </>
    )
}

export default NavBar;