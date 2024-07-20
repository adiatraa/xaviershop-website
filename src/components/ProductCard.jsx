import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div>
            <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                        alt={product.name}
                        src={product.imgUrl}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="pb-4 pt-10 text-center">
                    <h3 className="text-sm font-medium text-gray-900 hover:text-[#1977F1]">
                        <a href={product.href} className="hover:text-[#1977F1]">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </a>
                    </h3>

                    <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
                    <div className="mt-6">
                        <a
                            href={product.href}
                            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                        >
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
