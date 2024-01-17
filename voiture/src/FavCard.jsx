import React from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';
import { Link } from 'react-router-dom';

export default function FavCard() {

    return (
        <div className='col-md-3 mb-4'>
            <div className="card">
                <img src="https://images.caradisiac.com/logos/0/7/1/9/280719/S5-les-5-tendances-autos-du-ces-de-las-vegas-206446.jpg    " alt='Produit' className='card-img-top img-fluid rounded' />
                <div className='py-2' />
                <div className='card-body'>
                    <h5 className='card-title'>Voiture 1</h5>
                    <p className='card-text'>Prix: 205$</p>
                    <Link to="/detail"><button className='btn btn-success' >Je suis interresser</button></Link>
                </div>
            </div>
        </div>
    );
}
