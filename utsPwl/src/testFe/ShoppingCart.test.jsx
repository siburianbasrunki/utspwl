import { expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart";

describe("ShoppingCart Component", () => {
  const cart = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  
  it("should render a list of products in the cart", () => {
    const { getByText, getAllByText } = render(<ShoppingCart cart={cart} removeFromCart={removeFromCart} />);

    cart.forEach((product) => {
      expect(getByText(product.name)).toBeTruthy();
      expect(getByText(`Harga: Rp ${product.price}`)).toBeTruthy();
      expect(getAllByText("Hapus")).toBeTruthy();
    });
  });

 
});
