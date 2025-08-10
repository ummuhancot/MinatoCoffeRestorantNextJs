"use client"
import { createProductAction } from '@/actions/product-actions';
import React from 'react'
import { Button, Form } from 'react-bootstrap'


const DashboardProductNewForm = () => {
  return (
    <div>
      <Form action={createProductAction}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter product name"
          />
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            name="text"
            placeholder="Enter product cat of breed "
          />
        </Form.Group>

        <Form.Group controlId="img">
          <Form.Label>İmg</Form.Label>
          <Form.Control
            type="Image"
            name="img"
            placeholder="Enter product img"
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Enter product price"
          />
        </Form.Group>

        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
}

export default DashboardProductNewForm