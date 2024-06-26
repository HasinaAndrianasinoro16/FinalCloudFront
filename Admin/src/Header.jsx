import React from "react";
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';
import { Link , useNavigate} from 'react-router-dom';
import Mylogo from './other/logo/vector/default-monochrome.svg';

export default function Header(){
  const nav = useNavigate();
  const logout = () => {
    nav('/', { replace: true });
  };

    return(
        <header className=" navbar navbar-dark bg-dark shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={Mylogo} alt="Logo" width="100%" height="50" />
      </a>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{ gap: '15px' }}>
        <li><Link to="/annonce" className="nav-link px-3 text-white"><i className="fas fa-clipboard-list" ></i> Liste Annonce validation</Link></li>
        <li><Link to="/stat" className="nav-link px-3 text-white"><i className="fas fa-chart-bar" ></i> Statistique</Link></li>
        <li><Link to="/gestion" className="nav-link px-3 text-white"><i className="fas fa-folder-open" ></i> Gestion des elements</Link></li>
    </ul>


      <div className="col-md-3 text-end">
        {/* <button type="button" onClick={logout} className="btn btn-success btn-lg me-2">Log out</button> */}
      </div>
    </header>
    
    );
}