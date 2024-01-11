import React from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Header';
import Body from './Body';
import Messagerie from './Messagerie';
import Favoris from './Favoris';
import Historique from './Historique';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/annonce' element={<Body/>} />
        <Route path='/favoris' element={<Favoris/>} />
        <Route path='/messagerie' element={<Messagerie/>} />
        <Route path='/historique' element={<Historique/>} />
      </Routes>
    </Router>
    // <>
    //   <Header />
    //   <div className='py-2'></div>
    //   <Messagerie/>
    // </>
  );
}

export default App;
