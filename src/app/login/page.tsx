"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/style.css"
import Link from 'next/link'
import { useState } from 'react'
const login = () => {

  interface Values {
    username: string;
    password: string;
  }
  let router = useRouter()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
     
      <div className="login_box">
      <div className='nav-bar'>
          <div>
            <h1 className='font-bold'>RAJNISH SHARMA</h1>
          </div>

          <div className='menu'>
            {/* <ul className="nav-menu gap-x-6"> */}
            {/* <ul className="hidden md:flex gap-x-6 text-white"> */}
            <ul className={click ? ("nav-menu active") : ("nav-menu")}>
              <li>
                <Link href="/skills">
                  <p >SKILLS</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p >PROJECT</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p >ABOUT US</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p >CONTACT</p>
                </Link>
              </li>

            </ul>
            <div className="hamburger" onClick={handleClick}>

              {click ? (<FaTimes size={20} style={{ color: "#000000" }} />) : (<FaBars size={20} style={{ color: "#000000" }} />)}

            </div>

          </div>

        </div>
        {/* <h1 className="display-6 mb-3 text-white p-5">Login</h1> */}
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