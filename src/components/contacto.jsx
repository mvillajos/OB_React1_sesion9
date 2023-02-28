import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class';


const ContactoComponent = ({contacto, conectar, borrar}) => {
  

  /*
  * Function that returns icon depending on conectado
  */
  function contactoConectadoIcon(){
      if (contacto.conectado){
          return (<i onClick={ ()=> conectar(contacto)} className='bi-gear-fill contacto-action' style={{color: 'green'}}></i>) 
      }
      else {
          return (<i onClick={ ()=> conectar(contacto)} className='bi-globe contacto-action' style={{color: 'grey'}}></i>)
      }

  }


  return (

      <tr className='fw-normal'>
          <td className='align-middle'>
              <span >{contacto.nombre}</span>
          </td>
          <td className='align-middle'>
              <span>{contacto.apellidos}</span>
          </td>
          <td className='align-middle'>
              <span>{contacto.telefono}</span>
          </td>
          <td className='align-middle'>
              <span>{contacto.email}</span>
          </td>
          <td className='align-middle'>
            {contactoConectadoIcon()}
          </td>

          <td className='align-middle'>                         
              {/* {contactoConectadoIcon()} */}             
              <i className='bi-trash contacto-action' style={{color: 'tomato', fontSize: '20px'}} onClick={()=> borrar(contacto)}></i>
          </td>
      </tr>

  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  conectar: PropTypes.func.isRequired,
  borrar: PropTypes.func.isRequired
};

export default ContactoComponent
