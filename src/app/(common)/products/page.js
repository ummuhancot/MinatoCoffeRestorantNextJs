import React from "react";
import ProductsHeader from "@/components/productsHeader";
import ProductsList from "@/components/productsList";
import catData from "@/helpers/data/products-cat.json";



const Page = async () => {
  const res = await fetch(
    "https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user"
  );
  const data = await res.json();

  // img ve price verisini catData'dan sırayla ekliyoruz
  const mergedData = data.map((item, index) => ({
    ...item,
    img: catData[index % catData.length]?.img || "/cat/default.jpeg",
    price: catData[index % catData.length]?.price || 0,
  }));

  return (
    <div className="container py-5">
      <ProductsHeader/>
      <ProductsList user={mergedData} />
    </div>
  );
};

export default Page;
