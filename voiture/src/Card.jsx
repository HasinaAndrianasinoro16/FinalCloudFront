import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';


export default function Card() {
    // const history = useHistory();

    // const handleInterestClick = () => {
    //   // Naviguer vers le composant Detail
    //   history.push('/detail');  // Assurez-vous que le chemin correspond à celui défini dans votre application
    // };
  

    return (
        <div className='col-md-4 mb-4'>
            <div className="card">
                <img src="https://images.caradisiac.com/logos/0/7/1/9/280719/S5-les-5-tendances-autos-du-ces-de-las-vegas-206446.jpg" alt='Produit' className='card-img-top img-fluid rounded' />
                <div className='py-2' />
                <div className='card-body'>
                    <h5 className='card-title'>Voiture 1</h5>
                    <p className='card-text'>Price: 205$</p>
                    <p className='card-text'>Ad favoris: <i className='fas fa-heart btn btn-outline-danger' ></i> </p>
                    <Link to="/detail"><button className='btn btn-success' >I'm interested</button></Link>
                </div>
            </div>
        </div>
    );
}
