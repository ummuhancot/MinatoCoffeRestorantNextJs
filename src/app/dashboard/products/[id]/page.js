import React from "react";
import { notFound } from "next/navigation";
import catData from "@/helpers/data/products-cat.json";
import ProductsHeader from "@/components/productsHeader";
import DashboardProductEditForm from "@/components/dashboard-product-edit-form";

const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user`;

const Page = async ({ params }) => {
  const { id } = params; // URL’den id alıyoruz
  const res = await fetch(API_URL);

  if (!res.ok) return notFound();

  const users = await res.json();

  const mergedData = users.map((user, index) => ({
    ...user,
    img: catData[index % catData.length]?.img || "/cat/default.jpeg",
    price: catData[index % catData.length]?.price || 0,
  }));

  const user = mergedData.find((u) => u.id === id);

  if (!user) return notFound();

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        {user.title} - Edit Product
      </h2>
      <DashboardProductEditForm user={user} />
    </div>
  );
};

export default Page;
