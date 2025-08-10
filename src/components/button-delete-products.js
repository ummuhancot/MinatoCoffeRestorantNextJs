"use client";
import { deleteProductAction } from "@/actions/product-actions";
import React from "react";
import { Button } from "react-bootstrap";
import { MdDeleteSweep } from "react-icons/md";


const ButtonDeleteProducts =  ({ id }) => {
  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return; 

    const res = await deleteProductAction(id);

    if(res.message) 
      alert(res.message);
  };

  return (
    <Button variant="link" onClick={handleDelete} className="delete-btn">
      <MdDeleteSweep />
    </Button>
  );
};

export default ButtonDeleteProducts;
