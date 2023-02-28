import React, {useRef} from 'react';
import PropTypes from 'prop-types';
// import { LEVELS } from '../../../models/levels.enum';
import { Contacto } from '../models/contacto.class';

const Contactoform = ({add}) => {

  const nombreRef = useRef('');
  const apellidosRef = useRef('');
  const telefonoRef = useRef('');
  const emailRef = useRef('');
  
  // const levelRef = useRef(LEVELS.NORMAL);

  function addContacto(e){
      e.preventDefault();
      const newContacto = new Contacto(
          nombreRef.current.value,
          apellidosRef.current.value,
          telefonoRef.current.value,
          emailRef.current.value,
          false
      );
      add(newContacto);
  }

  return (
    <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nombreRef} id='inputNombre' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contacto Nombre'></input>
        <input ref={apellidosRef} id='inputApellidos' type='text' className='form-control form-control-lg' required placeholder='Contacto Apellidos'></input>
        <input ref={telefonoRef} id='inputTelefono' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contacto Telefono'></input>
        <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Contacto Email'></input>
        
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>     
    </form>
  );
}

Contactoform.propTypes = {
    add: PropTypes.func.isRequired
}

export default Contactoform;
