import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Cart</h2>
      <small>section untuk ketika di klik beli pada list produk</small>
      <div className="grid grid-cols-1 gap-4">
        {cart.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <img
                src={URL.createObjectURL(product.image)}
                alt={product.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">Harga: Rp {product.price}</p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={() => removeFromCart(product)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
