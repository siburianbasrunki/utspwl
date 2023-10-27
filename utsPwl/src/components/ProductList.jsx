import React, { useState } from 'react';

const ProductList = ({ products, addToCart, editProduct }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

  const startEditing = (product) => {
    setEditingProduct(product);
    setEditedName(product.name);
    setEditedPrice(product.price);
  };

  const saveEditedProduct = () => {
    if (editingProduct) {
      editProduct(editingProduct.id, editedName, editedPrice);
      setEditingProduct(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img
              src={URL.createObjectURL(product.image)}
              alt={product.name}
              className="w-16 h-16 rounded-full"
            />
            {editingProduct === product ? (
              <div className="flex-1"> {/* Gunakan flex-1 untuk mengisi ruang yang tersedia */}
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
                <input
                  type="number"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                  onClick={() => saveEditedProduct()}
                >
                  Simpan
                </button>
              </div>
            ) : (
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">Harga: Rp {product.price}</p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Beli
            </button>
            {editingProduct === product ? (
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={() => setEditingProduct(null)}
              >
                Batal
              </button>
            ) : (
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-700"
                onClick={() => startEditing(product)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
