import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const ButtonEditProducts = ({ id }) => {
  return (
    <Button
      variant="link"
      as={Link}
      href={`/dashboard/products/${id}`}
      className="edit-btn"
    >
      <FaEdit />
    </Button>
  );
};

export default ButtonEditProducts;
