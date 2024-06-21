import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FoodForm({ defaultFormData, isEdit }) {
  const router = useRouter();
  const [formData, setFormData] = useState(defaultFormData || { name: '', imageUrl: '', description: '', ingredients: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = 'https://api-bootcamp.do.dibimbing.id/api/v1/create-food';
    const payload = {
      name: formData.name,
      imageUrl: formData.imageUrl,
      description: formData.description,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
    };
    const headers = {
      apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
    };

    try {
      const resp = await axios.post(isEdit ? urlEdit : urlCreate, payload, { headers });
      if (resp.data.code === '200') router.push('/');
    } catch (error) {
      console.error('Failed to submit the form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="food-form">
      <h1>{isEdit ? 'Edit Makanan' : 'Buat Makanan Baru'}</h1>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="block mt-2 text-black"
        placeholder="Masukkan nama makanan"
      />
      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        className="block mt-2 text-black"
        placeholder="Masukkan URL gambar"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="block mt-2 text-black"
        placeholder="Masukkan deskripsi"
      />
      <input
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        className="block mt-2 text-black"
        placeholder="Masukkan bahan-bahan (pisahkan dengan koma)"
      />
      <button type="submit" className="px-4 py-1 mt-2 text-white bg-blue-700 rounded-full">
        {isEdit ? 'Update Makanan' : 'Buat Makanan'}
      </button>
    </form>
  );
}

