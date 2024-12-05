/* eslint-disable @next/next/no-img-element */
"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductCategory({ product }: any) {
    return (
        <div className="min-w-[230px] sm:w-[22%]  md:w-[22%] w-[100%] bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4 mx-auto">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-[150px] object-contain rounded-md"
            />

            <div className="mt-4">
                <h5 className="font-semibold text-gray-800">{product.title}</h5>
                <p className="text-gray-600 mt-2 font-medium">KSH {product.price}</p>
            </div>
        </div>
    );
}
