import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (name && price && image) {
      addProduct({ name, price, image });
      setName('');
      setPrice('');
      setImage(null);
    }
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Form Tambah Produk</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Nama Produk</label>
          <input
            type="text"
            id="productName"
            placeholder="Masukkan Nama Produk"
            className="p-1 border border-gray-300 rounded w-full"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Harga Produk</label>
          <input
            type="number"
            id="productPrice"
            placeholder="Masukkan Harga Produk"
            className="p-1 border border-gray-300 rounded w-full"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Gambar Produk</label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            className="p-1 border border-gray-300 rounded w-full"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
          >
            Tambah Produk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
