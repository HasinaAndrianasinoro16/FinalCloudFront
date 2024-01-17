import React, { useState } from 'react';
import Card from "./Card";
import Header from './Header';

export default function Body() {
    const nombreDeCartes = 12;

  const cards = [];
  for (let i = 0; i < nombreDeCartes; i++) {
    cards.push(<Card key={i} />);
  }

  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <h1 className="text-start">Annonce de voiture:</h1>
          <div className="row">
          {cards}
          </div>
        </div>

        <div className="col-md-3 text-center fixed">
          <h1>Filter</h1>
          <div className="form-floating mb-4">
            <input type="date" className="form-control" id="min"/>
            <label htmlFor="min">Date 1</label>
          </div>
          <div className="form-floating mb-4">
            <input type="date" className="form-control" id="min"/>
            <label htmlFor="min">Date 2</label>
          </div>
          <button className="btn btn-success btn-lg btn-block">
            Filter Annonce
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

