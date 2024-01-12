import React from "react";
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';
import { Link } from 'react-router-dom';
import Mylogo from './other/logo/vector/default-monochrome.svg';

export default function Header(){
    return(
        <header className=" navbar navbar-dark bg-dark shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={Mylogo} alt="Logo" width="100%" height="50" />
      </a>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{ gap: '15px' }}>
        <li><Link to="/annonce" className="nav-link px-3 text-white"><i className="fas fa-clipboard-list" ></i> Lise Annonce</Link></li>
        <li><Link to="/favoris" className="nav-link px-3 text-white"><i className="fas fa-heart" ></i> Favoris</Link></li>
        <li><Link to="/messagerie" className="nav-link px-3 text-white"><i className="fab fa-facebook-messenger" ></i> Messagerie</Link></li>
        <li><Link to="/historique" className="nav-link px-3 text-white"><i className="fab fa-sistrix"></i> Historique</Link></li>
    </ul>


      <div className="col-md-3 text-end">
        <Link to="/log"><button type="button" className="btn btn-outline-light btn-lg w-25 me-2">Login</button></Link>
        <Link to="/sign"><button type="button" className="btn btn-success btn-lg w-25 me-2">Sign-in</button></Link>
      </div>
    </header>
    
    );
}