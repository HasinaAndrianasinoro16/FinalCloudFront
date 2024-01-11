import React, { useState } from 'react';
import Card from "./Card";

export default function Body() {
    const nombreDeCartes = 12;  // Remplacez par le nombre souhaité (20 ou 12)

  const cards = [];
  for (let i = 0; i < nombreDeCartes; i++) {
    cards.push(<Card key={i} />);
  }
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(produits);

//   const MinPriceChange = (event) => {
//     setMinPrice(event.target.value);
//   };

//   const MaxPriceChange = (event) => {
//     setMaxPrice(event.target.value);
//   };

//   const Search = () => {
//     const filtered = produits.filter((produit) => {
//       const prix = parseFloat(produit.prix);
//       return (!minPrice || prix >= parseFloat(minPrice)) &&
//              (!maxPrice || prix <= parseFloat(maxPrice));
//     });

//     setFilteredProducts(filtered);
//   };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <h1 className="text-start">Annonce de voiture:</h1>
          <div className="row">
          {cards}
            {/* {filteredProducts.map((produit) => (
              <Card NomProduit={produit.nom} Prix={produit.prix} Stock={produit.stock} prod={produit.image} />
            ))} */}
          </div>
        </div>

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
      </div>
    </div>
  );
}

