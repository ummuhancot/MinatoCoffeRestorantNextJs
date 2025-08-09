import DashboardProductList from "@/components/dashboard-product-list";
import { notFound } from "next/navigation";
import catData from "@/helpers/data/products-cat.json";
import ProductsHeader from "@/components/productsHeader";


const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user`;

const Page = async () => {
  const res = await fetch(API_URL, { cache: "force-cache" , next: { revalidate: 10 } });

  
  //{cache:'force-cache'} leaut daki data cache edecegiz
  //export const fetchCache='default-cache' bütün sayfadaki data cache ederiz.

  if (!res.ok) return notFound();

  const users = await res.json();

  const mergedData = users.map((user, index) => ({
    ...user,
    img: catData[index % catData.length]?.img || "/cat/default.jpeg",
    price: catData[index % catData.length]?.price || 0,
  }));

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        <ProductsHeader />
      </h2>
      <DashboardProductList user={mergedData} />
    </div>
  );
};

export default Page;
