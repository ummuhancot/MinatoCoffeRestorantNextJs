// components/dashboard-product-edit-form.jsx
"use client";
import { updateProductAction } from "@/actions/product-actions";
import React, { useState } from "react";
import { Alert, Button, Form, Row, Col, Image } from "react-bootstrap";
import { useActionState } from "react";
import cats from "@/helpers/data/products-cat.json";

const DashboardProductEditForm = ({ user }) => {
  const initialState = { ok: null, message: null, errors: null };
  const [state, formAction] = useActionState(updateProductAction, initialState);

  // Seçili kedi başlangıç olarak user verisinden
  const [selectedCat, setSelectedCat] = useState(
    user ? { img: user.img, price: user.price } : null
  );

  const handleCatChange = (e) => {
    const catId = parseInt(e.target.value);
    const cat = cats.find((c) => c.id === catId);
    setSelectedCat(cat || null);
  };

  return (
    <div>
      {state.errors && !state.ok && (
        <Alert variant="danger">
          <Alert.Heading>Uh-oh!</Alert.Heading>
          <p className="mb-0">
            {state.message || "Please fix the errors below."}
          </p>
        </Alert>
      )}

      {state.ok && state.message && (
        <Alert variant="success">
          <Alert.Heading>Got it!</Alert.Heading>
          <p className="mb-0">{state.message}</p>
        </Alert>
      )}

      <Form action={formAction}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                isInvalid={!!state.errors?.title}
                type="text"
                name="title"
                placeholder="Enter product name"
                defaultValue={user?.title || ""}
                required
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.title}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="text" className="mb-3">
              <Form.Label>Text</Form.Label>
              <Form.Control
                isInvalid={!!state.errors?.text}
                type="text"
                name="text"
                placeholder="Enter product category or breed"
                defaultValue={user?.text || ""}
                required
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.text}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="cat" className="mb-3">
          <Form.Label>Select Cat</Form.Label>
          <Form.Select
            name="catId"
            onChange={handleCatChange}
            value={selectedCat?.id || ""}
            required
          >
            <option value=""> == Select a cat == </option>
            {cats.map((cat) => (
              <option key={cat.id} value={cat.id}>
                Cat #{cat.id} - ${cat.price}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {selectedCat && (
          <div className="mb-3">
            <Image
              src={selectedCat.img}
              alt={`Cat`}
              thumbnail
              style={{ maxWidth: "150px" }}
            />
            <p className="mt-2">Price: ${selectedCat.price}</p>
            {/* Gizli inputlar */}
            <input type="hidden" name="id" value={user.id} />
            <input type="hidden" name="img" value={selectedCat.img} />
            <input type="hidden" name="price" value={selectedCat.price} />
          </div>
        )}

        <Form.Group className="mt-4">
          <Button variant="dark" type="submit" className="me-3">
            Save
          </Button>
          <Button variant="secondary" href="/dashboard/products">
            Back to list
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default DashboardProductEditForm;
