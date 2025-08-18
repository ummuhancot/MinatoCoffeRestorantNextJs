"use client";

import React from "react";
import { Table } from "react-bootstrap";
import ButtonEditProducts from "./button-edit-products";
import ButtonDeleteProducts from "./button-delete-products";
import ButtonNewProducts from "./button-new-products";

const DashboardProductList = ({ user }) => {
  return (
    <Table striped bordered hover className="table-style">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Text</th>
          <th>Price</th>
          <th>Image</th>
          <th className="d-flex flex-column">
            <div>
              <ButtonNewProducts />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(user) &&
          user.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.text}</td>
              <td>{item.price} ₺</td>
              <td>
                <img
                  src={item.img}
                  alt={item.title}
                  width={80}
                  height={60}
                  style={{ objectFit: "cover" }}
                />
              </td>
              <td className="d-flex flex-column">
                <ButtonEditProducts id={`${item.id}`} />
                <ButtonDeleteProducts id={`${item.id}`} />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DashboardProductList;
