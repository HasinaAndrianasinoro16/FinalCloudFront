import React, { useState } from 'react';
import Card from "./Card";
import { ScrollPanel } from 'primereact/scrollpanel';

export default function Body() {
    const nombreDeCartes = 12;  // Remplacez par le nombre souhaité (20 ou 12)

  const cards = [];
  for (let i = 0; i < nombreDeCartes; i++) {
    cards.push(<Card key={i} />);
  }

  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-3 text-center fixed">
          <h1>Filter</h1>
          <div className="form-floating mb-4">
            <input type="date" className="form-control" id="min"/>
            <label htmlFor="min">Date</label>
          </div>
          <div className="form-floating mb-4">
            {/* <input type="text" className="form-control" id="min" value={minPrice} onChange={MinPriceChange}/> */}
            <input type="text" className="form-control" id="min"/>
            <label htmlFor="min">Min Price</label>
          </div>
          <div className="form-floating mb-4">
            {/* <input type="text" className="form-control" id="max" value={maxPrice} onChange={MaxPriceChange} /> */}
            <input type="text" className="form-control" id="max"/>
            <label htmlFor="max">Max Price</label>
          </div>
          {/* <button className="btn btn-warning btn-block" onClick={Search}> */}
          <button className="btn btn-success btn-lg btn-block">
            Filter product
          </button>
        </div>
        <ScrollPanel className="col-md-9" style={{height:'100vh'}}>
          <h1 className="text-start">Annonce de voiture:</h1>
          <div className="row">
          {cards}
          </div>
        </ScrollPanel>
      </div>
    </div>
  );
}

