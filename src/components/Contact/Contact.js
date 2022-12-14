import './Contact.css';
import { Button, TextField, Alert } from '@mui/material';
import React, {useState} from 'react'
import * as yup from'yup';
import { Formik, Field } from 'formik';

import { collection, addDoc, getFirestore } from "firebase/firestore";

const yupSchema = yup
  .object()
  .shape ({
    name: yup
      .string()
      .required('Por favor ingresar nombre y apellido'),
  adress: yup
  .string()
  .required('Por favor ingresar dirección'),
  email: yup
  .string()
  .email()
  .required('Debe ingresar una casilla de e-mail'),
  phone: yup
  .number()
  .integer('Debe ser de tipo entero')
  .required('Por favor ingrese número de teléfono'),
  description: yup
      .string()
      .required('Por favor ingrese su consulta')
  })
.required();


const Contact = () => {
  const [id, setId] = useState(null);

  const submitHandler = (values, resetForm) => {
    console.log(values);
    const db = getFirestore();
    const contactUsers = collection (db, 'contactUsers');
    addDoc(contactUsers, values)
    .then(({ id })=> setId(id))
    resetForm ();
  }

  return (
    <div className='Contact'>
      <h1>Formulario de Contacto</h1>
      <Formik 
        initialValues={{name: '', adress: '', email: '', phone: '', description: ''}}
        onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
        validationSchema={yupSchema}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <form className='Form' onSubmit={handleSubmit}>
          <TextField
            name= 'name'
            placeholder='Nombre y Apellido'
            variant='outlined'
            className='TextField'
            sx={{ mb: 1 }}
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && errors.name}
          <TextField
            name= 'adress'
            placeholder='Domicilio'
            variant='outlined'
            className='TextField'
            sx={{ mb: 1 }}
            onChange={handleChange}
            value={values.adress}
            onBlur={handleBlur}
          />
          {errors.adress && touched.adress && errors.adress}
          <TextField
            name= 'email'
            placeholder='email@email.com'
            variant='outlined'
            className='TextField'
            sx={{ mb: 1 }}
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && errors.email}
          <TextField
            name='phone'
            type='number'
            placeholder='Teléfono'
            variant='outlined'
            className='TextField'
            sx={{ mb: 1 }}
            onChange={handleChange}
            value={values.phone}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && errors.phone}
          <Field 
            name='description'
            component='textarea'
            placeholder='Ingrese su consulta'
            variant='outlined'
            className='TextField'
            sx={{ mb: 1 }}
            onChange={handleChange}
            value={values.description}
            onBlur={handleBlur}
            rows="4"
            />
          {errors.description && touched.description && errors.description}
          <Button
          disabled={!(isValid & dirty)}
          variant='contained'
          type='submit'
          sx={{ width: '400px', height: '54px'}}
          >Enviar</Button>
          {id !== null && <Alert severity="success">Se envió exitosamente su solicitud de contacto.</Alert>}
          
        </form>
      )}
      </Formik>
    </div>
  )
}

export default Contact