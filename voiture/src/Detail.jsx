import React, { useState } from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';


export default function Detail() {

    return (
        <div className='container-lg'>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">Voiture 1</h1>
          <p className="lead">Voitue efficace pour les long voyage confortable et spacieux.</p>
          <div className='py-4' ></div>
          <table className=' table table-responsive table-stripped' >
            <thead>
                <th>mise en circulation:</th>
                <th className='text-end text-secondary'>23/04/2005</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>
          <div className='py-3' ></div>
          <table className=' table table-responsive table-stripped' >
            <thead>
                <th>Boite de vitesse:</th>
                <th className='text-end text-secondary'>Manuel</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>
          <div className='py-3' ></div>
          <table className='table table-responsive table-stripped' >
            <thead>
                <th>Moteur</th>
                <th className='text-end text-secondary' >Hybride</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>
          <div className='py-3' ></div>
          <table className='table table-responsive table-stripped' >
            <thead>
                <th>Prix</th>
                <th className='text-end text-secondary' >250.000ar</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>
          <div className='py-3' ></div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2 fw-bold"><i className='fas fa-shopping-cart' ></i> Achter la voiture</button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img className="rounded-lg-3" src="https://images.caradisiac.com/logos/0/7/1/9/280719/S5-les-5-tendances-autos-du-ces-de-las-vegas-206446.jpg" alt="" width="720"/>
        </div>
      </div>
      </div>
    );
}
