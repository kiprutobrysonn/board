// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./form.css"; // Import your CSS file

const Basic = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            // Redirect to "/"
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="modern-form">
            <Field type="email" name="email" className="form-input" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <Field type="password" name="password" className="form-input" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />

            <Link to={"/"}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                Submit
              </button>
            </Link>

            <button type="button" className="register-button">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
