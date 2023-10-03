
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom"
import * as Yup from "yup";
import "yup-phone";
import "./Register.css"
import { useDispatch } from 'react-redux'
import { registerUser } from "../../actions/user_action"
import styled from "styled-components";

const signInSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Password is too short - should be 3 chars minimum")
    .max(15, "Password is too long - should be 15 chars maximum"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),

});


const initialValues = {
  name: "",
  email: "",
  password: "",
  branch: "",
  roll_no: "",
  year: ""
};

const SignInForm = () => {

  const dispatch = useDispatch();



  return (
    <div className="register-container">

      <img src="https://images.pexels.com/photos/2167677/pexels-photo-2167677.jpeg?auto=compress&cs=tinysrgb&w=600" className="image-container" />
      <div className="form-container" >
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(registerUser(values))
            resetForm();
          }}

        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (

              <div className="container">
                <CompanyName>
                  <h1 className="companyLogo">📙</h1>
                  <div>
                    <h1 >Hello Student! </h1>
                    <h1 >Login to your Account!</h1>
                  </div>
                </CompanyName>

                <Form className="form-wrapper">
                  <div className="form-row">
                    <p htmlFor="name">Name</p>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      className={
                        errors.name && touched.name ? "input-error" : null
                      }
                    />
                    <ErrorMessage name="name" component="span" className="error" />
                  </div>

                  <div className="form-row">
                    <p htmlFor="email">Email</p>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </div>

                  <div className="form-row">
                    <p htmlFor="password">Password</p>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                      className={
                        errors.password && touched.password ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="form-row">
                    <p htmlFor="branch">Branch </p>
                    <Field
                      type="text"
                      name="branch"
                      id="branch"
                      placeholder="Enter your Branch"
                      className={
                        errors.branch && touched.branch ? "input-error" : null
                      }
                    />
                    <ErrorMessage name="branch" component="span" className="error" />
                  </div>
                  <div className="form-row">
                    <p htmlFor="roll_no">Roll Number </p>
                    <Field
                      type="text"
                      name="roll_no"
                      id="roll_no"
                      placeholder="Enter your Roll Number"
                      className={
                        errors.branch && touched.branch ? "input-error" : null
                      }
                    />
                    <ErrorMessage name="roll_no" component="span" className="error" />
                  </div>

                  <div className="form-row">
                    <p htmlFor="year">Admission Year </p>
                    <Field
                      type="number"
                      name="year"
                      id="year"
                      placeholder="Enter Admission Year"
                      className={
                        errors.branch && touched.branch ? "input-error" : null
                      }
                    />
                    <ErrorMessage name="year" component="span" className="error" />
                  </div>

                  <button
                    type="submit"
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    Sign Up
                  </button>

                </Form>
                <div style={{ marginTop: "10px", marginLeft: "28%" }}>
                  Already registered?{" "}
                  <Link to="/login" >login!</Link>
                </div>

              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;

const CompanyName = styled.div`
display:flex;
        margin-bottom:20px; 
        .companyLogo{
            font-size:80px;
        }
    h1{
      margin-bottom:0;
    }
    

`