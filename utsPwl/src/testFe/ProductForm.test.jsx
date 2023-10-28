import { expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

describe("ProductForm Component", () => {
  const renderProductForm = (addProduct) => {
    return render(<ProductForm addProduct={addProduct} />);
  };

  it("should render the form with input fields and a submit button", () => {
    const { getByLabelText, getByText } = renderProductForm(() => {});

    expect(getByLabelText("Nama Produk")).toBeTruthy();
    expect(getByLabelText("Harga Produk")).toBeTruthy();
    expect(getByLabelText("Gambar Produk")).toBeTruthy();
    expect(getByText("Tambah Produk")).toBeTruthy();
  });

  it("should update state when input fields change", () => {
    const { getByLabelText } = renderProductForm(() => {});

    fireEvent.input(getByLabelText("Nama Produk"), {
      target: { value: "Test Product" },
    });
    fireEvent.input(getByLabelText("Harga Produk"), {
      target: { value: "100" },
    });

    expect(getByLabelText("Nama Produk").value).toBe("Test Product");
    expect(getByLabelText("Harga Produk").value).toBe("100");
  });

  
});
