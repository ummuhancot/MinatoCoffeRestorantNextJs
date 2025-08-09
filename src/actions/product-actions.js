"use server";

import { notFound } from "next/navigation";

const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user`;

export const deleteProductAction = async (id) => {
  
  // ID kontrolü
  if (!id) throw new Error("Product ID is not found");

  // 1. Önce ürün var mı kontrol et
  const check = await fetch(`${API_URL}/${id}`);
  if (check.status === 404) {
    notFound();
  }

  // 2. DELETE isteği
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  // 3. API hata dönerse
  if (!res.ok) {
    throw new Error(data?.message || `Ürün silinemedi (HTTP ${res.status})`);
  }

  // 4. Boş cevap kontrolü
  if (!data || Object.keys(data).length === 0) {
    notFound();
  }

  console.log("Product deleted successfully:", data);

  return data;
};
