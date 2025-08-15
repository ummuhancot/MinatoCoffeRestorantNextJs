"use server";

import { transformYupError } from "@/helpers/form-validation";
import { revalidateTag, revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import * as Yup from "yup";

const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user`;

const FormSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  text: Yup.string().required("Text is required"),
  img: Yup.string().required("Image is required"), 
  price: Yup.number()
    .required("Price is required")
    .typeError("Price must be a number"),
});

export const createProductAction = async (prevState, formData) => {
  const payload = Object.fromEntries(formData.entries());

  if (payload.price) {
    payload.price = Number(payload.price);
  }

  try {
    FormSchema.validateSync(payload, { abortEarly: false });

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || `Ürün eklenemedi (HTTP ${res.status})`);
    }

    revalidateTag("products");
    revalidatePath("/dashboard/products");

    return {
      ok: true,
      message: "Product created successfully",
      errors: null,
    };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return transformYupError(error);
    }
    return {
      ok: false,
      message: error.message || "An error occurred while creating the product",
      errors: null,
    };
  }
};

// Ürün silme
export const deleteProductAction = async (id) => {
  try {
    if (!id) throw new Error("Product ID is not found");

    const check = await fetch(`${API_URL}/${id}`);
    if (check.status === 404) {
      notFound();
    }

    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    let data;
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (!res.ok) {
      throw new Error(data?.message || `Ürün silinemedi (HTTP ${res.status})`);
    }

    if (!data || Object.keys(data).length === 0) {
      notFound();
    }

    revalidateTag("products");
    revalidatePath("/dashboard/products");

    return {
      ok: true,
      message: "Product deleted successfully",
      errors: null,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message || "An error occurred while deleting the product",
      errors: null,
    };
  }
};
