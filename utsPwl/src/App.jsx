import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    product.id = Date.now();
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const editProduct = (productId, newName, newPrice) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, name: newName, price: newPrice };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8 flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:mr-4 w-full lg:w-1/2">
          <ProductForm addProduct={addProduct} />
          <h1 className="text-2xl font-semibold mb-2">List Produk</h1>
          <small>section untuk produk yang ditambahkan</small>
          <ProductList
            products={products}
            addToCart={addToCart}
            editProduct={editProduct}
          />
        </div>
        <div className="lg:mt-0 lg:ml-4 w-full lg:w-1/3">
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
