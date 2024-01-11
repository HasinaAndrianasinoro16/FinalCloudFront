import React, { useState } from 'react';
import Message from './Message';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';


const Conversation = ({ messages }) => {
    const [newMessage, setNewMessage] = useState('');
  
    const handleSendMessage = () => {
      // Ajoutez votre logique pour envoyer le message
      console.log('Message envoyé :', newMessage);
      // Réinitialisez le champ après l'envoi du message
      setNewMessage('');
    };
  
    return (
      <div className="conversation">
        {messages.map((message) => (
          <div key={message.id} className={message.expediteur === "Vous" ? "text-end text-success" : "text-start text-dark"}>
            <Message
              expediteur={message.expediteur}
              contenu={message.contenu}
              heure={message.heure}
            />
          </div>
        ))}
        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">Nouveau message :</label>
          <textarea
            id="messageInput"
            className="form-control"
            rows="3"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success btn-lg w-25" onClick={handleSendMessage}>
          Envoyer
        </button>
      </div>
    );
  };
  
  export default Conversation;