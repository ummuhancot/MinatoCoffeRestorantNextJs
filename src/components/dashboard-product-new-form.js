"use client"
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import productsCat from "@/helpers/data/products-cat.json"
import { createProductAction } from "@/actions/product-actions" // Action'ı ekle

const DashboardProductNewForm = () => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    img: '',
    price: ''
  });
  const [loading, setLoading] = useState(false);

  // Resim ve fiyatı eşleştir
  const imageOptions = productsCat.map((item) => ({ img: item.img, price: item.price }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "img") {
      const selected = imageOptions.find(opt => opt.img === value);
      setForm((prev) => ({
        ...prev,
        img: value,
        price: selected ? selected.price : ""
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value === undefined ? '' : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Action fonksiyonunu çağır
    const result = await createProductAction({}, Object.entries(form));
    setLoading(false);

    if (result.ok) {
      setForm({ title: '', text: '', img: '', price: '' });
      alert('Ürün başarıyla eklendi!');
    } else {
      alert(result.message || 'Bir hata oluştu!');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            placeholder="cat name"
          />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label>Breed of cat</Form.Label>
          <Form.Control
            type="text"
            name="text"
            value={form.text || ""}
            onChange={handleChange}
            placeholder="breed of cat"
          />
        </Form.Group>
        <Form.Group controlId="img">
          <Form.Label>Resim Seç (JSON'dan)</Form.Label>
          <Form.Select
            name="img"
            value={form.img || ""}
            onChange={handleChange}
          >
            <option value="">Resim seçiniz</option>
            {imageOptions.map((opt, idx) => (
              <option key={idx} value={opt.img}>
                {opt.img}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Fiyat (Otomatik gelir)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={form.price || ""}
            onChange={handleChange}
            placeholder="cat price"
            readOnly
          />
        </Form.Group>
        <Button 
          className='mt-3 w-100'
          variant="primary"
          size="lg"
          disabled={loading || !form.title || !form.text || !form.img || !form.price}
          style={{ backgroundColor: '#e18d18ff', borderColor: '#eed21eff' }}
          type="submit"
        >
          {loading ? "Yükleniyor..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default DashboardProductNewForm