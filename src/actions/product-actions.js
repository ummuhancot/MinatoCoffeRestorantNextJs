"use server";

import { transformYupError } from "@/helpers/form-validation";
import { revalidatePath, revalidateTag } from "next/cache";
import { notFound } from "next/navigation";
import * as Yup from "yup";


const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user`;

const FormSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  text: Yup.string().required("Text is required"),
  img: Yup.string().url("Invalid image URL").required("Image is required"),
  price: Yup.number().required("Price is required").typeError("Price must be a number")
})

// Yeni ürün ekleme
export const createProductAction = async (formData) => {

  // Form verilerini al datayı alıp çeviriyoruz
  
  const payload = Object.fromEntries(formData.entries());

    try{
        // Form verilerini kontrol et
        FormSchema.validateSync(payload, { abortEarly: false }); // Validasyon direk olarak hata fırlatır

        const res = await fetch(API_URL,{methot:"POST",
          headers:{"Content-Type":"applicatiaon/json"},
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        // API hata dönerse
        if (!res.ok) {
          throw new Error(data?.message || `Ürün eklenemedi (HTTP ${res.status})`);
        }

        

    } catch(error) {
       
        if(error instanceof Yup.ValidationError) {
          // Validasyon hatası varsa, hata mesajlarını dön
          // Eğer hata Yup.ValidationError ise, form validasyon hatasıdır
          return transformYupError(error.inner);
        }

        return {
          ok: false,
          message: error.message || "An error occurred while creating the product",
          errors: null,
        };
        
    }



  console.log(payload);

}


//Silme butonu 
export const deleteProductAction = async (id) => {

    
  try{    
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
    
    revalidateTag("/pro");
    revalidatePath("/dashboard/products");
    
    // 5. Başarılı ise
    return {
      ok: true,
      message: "Product deleted successfully",
      errors:null,
    };
    
    } catch (error) {
       
          
      // Hata durumunda
      return {
        ok: false,
        message: error.message || "An error occurred while deleting the product",
        errors: null,
      }
  }
};
