import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';
import Courbe from './Courbe';
import Header from './Header';


export default function Stat() {

    return (
        <>
        <Header></Header>
        <div className='container'>
        <Courbe></Courbe>
            <p className='h4 text-start' >Cette courber sont les statistique recu depuis le jour de creation du site web jusqu'a aujourd'hui</p>
        </div>
        </>
    );
}
