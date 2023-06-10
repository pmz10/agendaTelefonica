import { useState } from 'react';
import Formulario from './Components/Formulario';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const agregarContacto = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const eliminarContacto = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Agenda Telefónica</h1>
      <Formulario agregarContacto={agregarContacto} />
      <h2>Contactos:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstName} {contact.lastName} - {contact.phoneNumber}
            <button type="button" onClick={() => eliminarContacto(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
