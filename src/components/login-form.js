"use client";

import React, { useState, useActionState } from "react";
import {
  signInWithCredentialsAction,
  signInWithSocialsAction,
} from "@/actions/auth-action";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //username=emilys
  //password=emilyspass

  const initialState = { ok: true, message: null, errors: null };
  const [state, dispatch] = useActionState(
    signInWithCredentialsAction,
    initialState
  );

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Row>
      <Col sm={9} md={6} lg={5} xl={4} className="mx-auto mt-3 mb-3">
        <Card className="login shadow-lg">
          <Card.Body>
            <Form action={dispatch}>
              {/* Username */}
              <Form.Group controlId="username">
                <FloatingLabel label="Username">
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleFormChange}
                    isInvalid={!!state.errors?.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors?.username}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="password" className="mt-3">
                <FloatingLabel label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleFormChange}
                    isInvalid={!!state.errors?.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors?.password}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              {/* Error Message */}
              {state.message && (
                <div className="text-danger mt-2">{state.message}</div>
              )}

              {/* Submit */}
              <Form.Group className="mt-3">
                <Button variant="dark" type="submit" className="w-100">
                  Login
                </Button>
              </Form.Group>

              <hr className="mt-4" />

              {/* GitHub */}
              <Form.Group className="mt-3">
                <Button
                  variant="dark"
                  className="w-100"
                  onClick={() => signInWithSocialsAction("github")}
                >
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FaGithub /> Login with GitHub
                  </div>
                </Button>
              </Form.Group>

              {/* Google */}
              <Form.Group className="mt-3">
                <Button
                  variant="dark"
                  className="w-100 "
                  onClick={() => signInWithSocialsAction("google")}
                >
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FaGoogle /> Login with Google
                  </div>
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
