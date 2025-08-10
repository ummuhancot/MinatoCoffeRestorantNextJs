import ProductDetails from "@/components/products-details";
import ProductsHeader from "@/components/productsHeader";
import { notFound } from "next/navigation";
import React from "react";

const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user/`;

//dinamik olarak sayfanın ismini yazdırır.
export const generateMetadata = async ({ params }) => {
  //fetch data
  const { id } = await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return {
    title: data.title,
    description: data.description,
  };
};

const Page = async ({ params }) => {
  const { id } = await params;

  if (!id) throw new Error("product id not found");

  const res = await fetch(`${API_URL}/${id}`);

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  if (!data) notFound();

  return (
    <>
      <ProductsHeader title={data.title} />
      <ProductDetails user={data} />
    </>
  );
};

export default Page;
