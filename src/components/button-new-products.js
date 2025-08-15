"use client"
import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaRegPlusSquare } from "react-icons/fa";

const ButtonNewProducts = ({ id }) => {


  return (
    <Button variant="success" 
    style={{ color: "yellow",fontSize:"10px"}}
    as={Link}
    href={`/dashboard/products/new`}
    className="d-flex align-items-center justify-content-center"
    >
      <div  style={{ fontSize: "19px" }}>
        <FaRegPlusSquare />
      </div>

    </Button>
  );
};

export default ButtonNewProducts;
