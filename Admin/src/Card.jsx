import React, { useState } from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';


export default function Card() {
// export default function Card({ NomProduit, Prix, Stock }) {
    // const [initial, setInitial] = useState(pic);
    // const [stockinitial, setStockinitial] = useState(Stock);

    // const change = (image) => {
    //     setInitial(image);
    // }
 
    // const changeStock = (quantite) =>{
    //     var change = quantite -1;
    //     quantite = change;
    //     if(quantite < 0){
    //         quantite = 0;
    //     }
    //     setStockinitial(quantite);
    // }

    return (
        <div className='col-md-4 mb-4'>
            <div className="card">
                <img src="https://images.caradisiac.com/photo/4/9/7/4/144974/S4-s0-essai-video-mercedes-classe-g-2019-culte-579778-144974.jpg" alt='Produit' className='card-img-top img-fluid rounded' />
                <div className='py-2' />
                {/* <div className='row'>
                    <div className='col-4 '> <img src={pic} width="100%" alt="no picture" id='s1' onClick={() => change(pic)} /> </div>
                    <div className='col-4 '><img src={pic2} width="100%" alt="no picture" id='s2' onClick={() => change(pic2)} /></div>
                    <div className='col-4 '><img src={pic3} width="100%" alt="no picture" id='s3' onClick={() => change(pic3)} /></div>
                </div> */}
                <div className='card-body'>
                    <h5 className='card-title'>Voiture 1</h5>
                    <p className='card-text'>Price: 205$</p>
                    <p className='card-text'>Ad favoris: <i className='fas fa-heart btn btn-outline-danger' ></i> </p>
                    <button className='btn btn-success'>I'm interested</button>
                </div>
            </div>
        </div>
    );
}
