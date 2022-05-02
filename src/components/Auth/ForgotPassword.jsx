import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  //////////////// firebase methods
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  //////////////// firebase methods

  const handleBlur = (e) => {
    setEmail(e.target.email.value);
  };
  return (
    <section className="container">
      <div className="form-container mx-auto mt-5 px-2 py-5 p-sm-5">
        <Form
          className="form"
          onSubmit={async () => {
            await sendPasswordResetEmail("email");
            alert("Sent email");
          }}
        >
          <h1 className="text-center text-primary mb-3">Login</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleBlur}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          {error && <p className="text-error">{error?.message}</p>}
          <Button
            className="form-btn fw-bold px-4 py-2 text-uppercase"
            variant="primary"
            type="submit"
          >
            Send password reset email
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ForgotPassword;