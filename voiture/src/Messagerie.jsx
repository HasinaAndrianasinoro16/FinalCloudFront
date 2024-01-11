// Messengerie.jsx
import React, { useState } from 'react';
import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './assets/fontawesome-5/css/all.min.css';
import './assets/fontawesome-5/css/all.css';

import Contact from './Contact';
import Conversation from './Conversation';

const Messengerie = () => {
    const [contacts, setContacts] = useState([
      { id: 1, nom: "Contact 1", dernierMessage: "Salut, comment ça va ?", messages: [
        { id: 1, expediteur: "Contact 1", contenu: "Bonjour !", heure: "09:00" },
        { id: 2, expediteur: "Vous", contenu: "Ça va bien, merci !", heure: "09:05" },
      ] },
      { id: 2, nom: "Contact 2", dernierMessage: "J'ai reçu ton message.", messages: [
        { id: 3, expediteur: "Contact 2", contenu: "Salut !", heure: "10:00" },
        { id: 4, expediteur: "Vous", contenu: "Hello !", heure: "10:05" },
      ] },
      // Ajoutez d'autres contacts au besoin
    ]);
  
    const [selectedContact, setSelectedContact] = useState(null);
  
    const handleContactClick = (contact) => {
      setSelectedContact(contact);
    };
  
    return (
      <div className="messenger-page container">
        <div className="row">
          <div className="col-md-4">
            <div className="contacts">
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  nom={contact.nom}
                  dernierMessage={contact.dernierMessage}
                  onClick={() => handleContactClick(contact)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className="conversation">
              {selectedContact && (
                <Conversation messages={selectedContact.messages} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Messengerie;