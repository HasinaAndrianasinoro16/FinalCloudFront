import React from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';

const Message = ({ expediteur, contenu, heure }) => {
    return (
      <div className="message">
        <strong>{expediteur}:</strong> {contenu} <small>({heure})</small>
      </div>
    );
  };
  
  export default Message;
  
