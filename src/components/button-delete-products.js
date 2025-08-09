"use client";
import { deleteProductAction } from "@/actions/product-actions";
import React from "react";
import { Button } from "react-bootstrap";
import { MdDeleteSweep } from "react-icons/md";


const ButtonDeleteProducts = ({ id }) => {
  const handleDelete = () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return; 

    deleteProductAction(id);
  };

  return (
    <Button variant="link" onClick={handleDelete} className="delete-btn">
      <MdDeleteSweep />
    </Button>
  );
};

export default ButtonDeleteProducts;
