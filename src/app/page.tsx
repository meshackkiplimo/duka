"use client";

import { useAppContext } from "@/context/AppContext"; // Adjust the import path accordingly
import Product from "./components/product";

export default function Home() {
  const { categories } = useAppContext();

  return (
    <div className="w-[90%] mx-auto">
      {categories.map((category, index) => (
        <Product category={category} key={index} />
      ))}
    </div>
  );
}
