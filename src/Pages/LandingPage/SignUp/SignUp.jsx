import React, { useState } from "react";
import {NavLink, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signup-styles.css";
import { app } from "../../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function SignUp({setEmail, setPassword, handleSignUpAction}) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");


  // function validateForm() {
  //   if (email.length > 0 && password.length > 0) {
  //     return password == confirmPassword;
  //   }
  // }

   function handleSubmit(event) {
     event.preventDefault();

     handleSignUpAction()
   }


  return (
    <div className="SignUp">
      <Form Form onSubmit={handleSubmit}>
        <Form.Group className="formGroup" size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="formGroup" size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="formGroup" size="lg">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          // disabled={!validateForm()}

        >
          SignUp
        </Button>
        <div className="toLogin">
          <span>Already have an account?&nbsp; </span>
          <NavLink to="/LogIn">Log In</NavLink>
        </div>
      </Form>
    </div>
  );
}
