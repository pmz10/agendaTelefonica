import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Formulario = ({ agregarContacto }) => {
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  function handleInputChange(event) {
        setNewContact({
            ...newContact,
            [event.target.name]: event.target.value,
        });
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarContacto(newContact);
    setNewContact({
      firstName: '',
      lastName: '',
      phoneNumber: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={newContact.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={newContact.lastName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Teléfono"
        value={newContact.phoneNumber}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
};

export default Formulario;