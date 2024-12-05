/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProductCategory from "./ProductCategory";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductList({ categoryProducts }: any) {
    return (
        <div className="flex flex-wrap justify-between"> 
            {categoryProducts.map((product: any) =>
                <ProductCategory key={product.title} product={product} />)}
        </div>
    );
}
