import { expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ProductList from "./utsPwl/src/components/ProductList";

URL.createObjectURL = jest.fn((file) => file);

describe("ProductList Component", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: new File(["image"], "image.jpg"),
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image: new File(["image"], "image.jpg"),
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      image: new File(["image"], "image.jpg"),
    },
  ];

  it("should render a list of products", () => {
    const { getByText } = render(<ProductList products={products} />);

    products.forEach((product) => {
      expect(getByText(product.name)).toBeTruthy();
      expect(getByText(`Harga: Rp ${product.price}`)).toBeTruthy();
    });
  });

  it("should allow canceling editing", () => {
    const { getByText } = render(<ProductList products={products} />);

    fireEvent.click(getByText("Edit"));

    const cancelButton = getByText("Batal");
    expect(cancelButton).toBeTruthy();

    fireEvent.click(cancelButton);

    expect(() => getByPlaceholderText("Nama Produk")).toThrow();
    expect(() => getByPlaceholderText("Harga Produk")).toThrow();
    expect(() => getByText("Simpan")).toThrow();
  });
});

afterAll(() => {
  URL.createObjectURL.mockRestore();
});
