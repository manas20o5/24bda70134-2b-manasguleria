"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/product-card";
import SelectControl from "@/components/ui/select-control";
import { Product, SelectOption } from "../types";

const products: Product[] = [
  { id: 1, name: "Wireless Keyboard", price: 500, category: "electronics" },
  { id: 2, name: "Remote Car", price: 2000, category: "electronics" },
  { id: 3, name: "T-Shirt", price: 250, category: "clothing" },
  { id: 4, name: "Jeans", price: 750, category: "clothing" },
];

const categoryOptions: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
];

const sortOptions: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
];

export default function HomePage() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = products.filter(
    (product) =>
      filterCategory === "all" || product.category === filterCategory
  );

  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Filter</h1>

      <div className="flex gap-6 mb-8">
        <SelectControl
          selectLabel="Filter"
          value={filterCategory}
          onValueChange={setFilterCategory}
          options={categoryOptions}
          placeholder="Select Category"
        />

        <SelectControl
          selectLabel="Sort"
          value={sortBy}
          onValueChange={setSortBy}
          options={sortOptions}
          placeholder="Sort By"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
