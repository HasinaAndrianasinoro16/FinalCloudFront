import React from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';
import Courbe from './Courbe';
import Header from './Header';
import StatCard from './StatCard';
import StatCamembert from './StatCamembert';

export default function Stat() {
  return (
    <>
      <Header></Header>
      <div className='container-fluid'>
        <div className='row mb-3 text-center'>
          <div className='col-md-8 themed-grid-col mr-md-3'>
            <div className='pb-3 h3'>
              Statistique des ventes
            </div>
            <div className='row'>
              <Courbe></Courbe>
            </div>
          </div>
          <div className='col-md-4 themed-grid-col text-center'>
            <div className='pb-3 h3'>
              Autre chiffre
            </div>
            <div className='row justify-content-center'>
              <StatCard libelle="Nombre utilisateur" valeur={11}/>
            </div>
            <div className='py-3'></div>
            <div className='row justify-content-center'>
              <StatCard libelle="nombre d'annonce confirmer" valeur={11}/>
            </div>
            <div className='py-3'></div>
            <div className='row justify-content-center'>
              <StatCard libelle="nombre de voiture" valeur={112}/>
            </div>
            <div className='py-3'></div>
            <div className='row justify-content-center'>
              <StatCard libelle="Chiffre d'affaire" valeur={1120000000}/>
            </div>
          </div>
        </div>
        </div>
        <div className='py-3'></div>
        <div className='container-fluid justify-content-center'>
        <div className='row mb-3 text-center'>
          <div className='col-md-4 themed-grid-col mr-md-3'>
            <div className='pb-3 h3'>
              Marque
            </div>
            <div className='row'>
              <StatCamembert></StatCamembert>
            </div>
          </div>
          <div className='col-md-4 themed-grid-col mr-md-3'>
            <div className='pb-3 h3'>
              Categorie
            </div>
            <div className='row'>
              <StatCamembert></StatCamembert>
            </div>
          </div>
          <div className='col-md-4 themed-grid-col mr-md-3'>
            <div className='pb-3 h3'>
              Couleur
            </div>
            <div className='row'>
              <StatCamembert></StatCamembert>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
