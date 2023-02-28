import React, {useState, useEffect} from 'react'
import { Contacto } from '../models/contacto.class'
import ContactoComponent from './contacto';
import ContactoForm from './contactoForm';


const ContactosListComponent = () => {

  const defaultContacto1 = new Contacto('Pepe', 'Viyuela', '600112030', 'pepitov@yahoo.es', true);
  const defaultContacto2 = new Contacto('Alberto', 'Lopez', '600223540', 'albertol@yahoo.es', false);
  const defaultContacto3 = new Contacto('Maria', 'Castaño', '650607080', 'mariac@yahoo.es', false);
  
  //estado del componente
  const [contactos, setContactos] = useState([defaultContacto1, defaultContacto2, defaultContacto3]);


  function conectarContacto(contacto){
      console.log('Conectar este Contacto:', contacto);
      const index = contactos.indexOf(contacto);
      const tempContactos = [...contactos];
      tempContactos[index].conectado = !tempContactos[index].conectado;     
      setContactos(tempContactos);
    }

  function borrarContacto(contacto){
    console.log('Borrar este Contacto:', contacto);
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos.splice(index,1);
    setContactos(tempContactos);
  }

  function addContacto(contacto){
    console.log('Añadir este Contacto:', contacto);
    const tempContactos = [...contactos];
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }

  return (
    <div>
        <div className='col-12'>
            <div className='card'>
              <div className='card-header p-3'>
                <h3>
                    CONTACTOS
                </h3>
              </div>
              <div className='card-body' data-mdb-perfect-scrollbar='true'  style={ {position: 'relative', height: '400px'} }>
                <table>
                  <thead>
                  <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Apellidos</th>
                    <th scope='col'>Telefono</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Conectado</th>
                    <th scope='col'>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                    {contactos.map((contacto, index) => {
                        return (
                          <ContactoComponent 
                              key={index} 
                              contacto={contacto}
                              conectar={conectarContacto}
                              borrar={borrarContacto}
                              >    
                          </ContactoComponent>
                        )
                    } )}                    
               
                  </tbody>
                </table>
              </div>
              <ContactoForm add={addContacto}></ContactoForm>
            </div>
        </div>
    </div>
  );
};


export default ContactosListComponent;