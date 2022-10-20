import './Contact.css';
import { Button, TextField, Alert } from '@mui/material';
import React, {useState} from 'react'
import * as yup from'yup';
import { Formik } from 'formik';

import { collection, addDoc, getFirestore } from "firebase/firestore";
// import { db } from "../../firebase/config"

const yupSchema = yup
  .object()
  .shape ({
    name: yup
      .string()
      .required(),
  adress: yup
  .string()
  .required(),
  email: yup
  .string()
  .email()
  .required(),
  phone: yup
  .number()
  .integer('Debe ser de tipo entero')
  .required()
  .min(11, 'Por favor ingrese teléfono con 11 digitos'),
})
.required();


const Contact = () => {
  const [id, setId] = useState(null);

  const submitHandler = (values, resetForm) => {
    console.log(values);
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, values)
    .then(({ id })=> setId(id))
    resetForm ();
  }

  return (
    <div className='Contact'>
      <h1>Formulario de Contacto</h1>
      <Formik 
        initialValues={{name: '', adress: '', email: '', phone: '' }}
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
          <Button
          disabled={!(isValid & dirty)}
          variant='contained'
          type='submit'
          sx={{ width: '400px', height: '54px'}}
          >Enviar</Button>
          {id !== null && <Alert severity="success">Se genero orden de compra nro {id}</Alert>}
          
        </form>
      )}
      </Formik>
    </div>
  )
}

export default Contact