"use client";

import {
  signInWithCredentialsAction,
  signInWithSocialsAction,
} from "@/actions/auth-action";
import { useActionState, useState } from "react";
import { Alert, Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    <Row className="login">
      <Col sm={9} md={6} lg={5} xl={4} className="mx-auto mt-2">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>

            {!state.ok && state.message && (<Alert variant="danger">{state.message}</Alert>)}

            <Form action={dispatch}>
              <Form.Group controlId="username">
                <FloatingLabel label="Username">
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleFormChange}
                    isInvalid={!!state?.errors?.username}
                    value={formData?.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state?.errors?.username}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <FloatingLabel label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={handleFormChange}
                    placeholder="Password"
                    isInvalid={!!state?.errors?.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state?.errors?.password}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mt-3">
                <Button variant="dark" type="submit" className="w-100">
                  Login
                </Button>
              </Form.Group>

              <hr className="mt-4" />
              <p className="text-center">Or</p>

              <Form.Group className="mt-3">
                <Button
                  variant="outline-dark"
                  className="w-100"
                  onClick={() => signInWithSocialsAction("github")}
                >
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FaGithub /> Login with GitHub
                  </div>
                </Button>
              </Form.Group>

              <Form.Group className="mt-3">
                <Button
                  variant="outline-dark"
                  className="w-100"
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
}
