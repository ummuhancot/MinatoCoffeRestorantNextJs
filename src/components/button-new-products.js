"use client"
import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaRegPlusSquare } from "react-icons/fa";

const ButtonNewProducts = ({ id }) => {


  return (
    <Button
      style={{
        backgroundColor: "#fff237",
        border: "2px solid rgb(255, 208, 0)",
      }}
      as={Link}
      href={`/dashboard/products/new`}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="new-b-t-n">
        <FaRegPlusSquare />
      </div>
    </Button>
  );
};

export default ButtonNewProducts;
