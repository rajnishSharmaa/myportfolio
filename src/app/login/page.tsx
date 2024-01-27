"use client"
import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import "../styles/style.css"
const login = () => {

  interface Values {
    username: string;
    password: string;
  }

  return (
    <>
      <div className="login_box">
        <h1 className="display-6 mb-3 text-white p-5">Login</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}

        >
          <Form className='form'>
            <div className="mb-3">
              <Field className="form-control" id="username" name="email" placeholder="Email" aria-describedby="usernameHelp" />
            </div>

            <div className="mb-3">
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>

            <button type="submit" className="btn">Login</button>
          </Form>
        </Formik>
      </div>
    </>
  )
}


export default login