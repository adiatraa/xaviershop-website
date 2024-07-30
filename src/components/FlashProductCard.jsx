import React from 'react';
import { Link } from 'react-router-dom';

function formatPrice(price) {
    return `Rp ${price.toLocaleString('id-ID')}`;
}

const FlashProductCard = ({ product }) => {
    return (
        <Link to={`/productDetail/${product.id}`}>
        <div className="w-[428px] h-[168px] bg-white rounded-2xl hover:text-black">
            <div className="p-2 flex gap-2 items-center">
                <div className="h-[150px] w-[150px] flex justify-center items-center">
                    <img src={product.imgUrl} alt={product.name} className="rounded-3xl max-w-28" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-12">
                        <h1 className="font-semibold font-prompt text-lg">{product.name}</h1>
                        <div className="flex space-x-16">
                            <h1 className="font-semibold text-blue-500">{formatPrice(product.price)}</h1>
                            <p className="text-[#A7A7A7]">{product.stock} left</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-full w-56 bg-gray-200">
                        <div style={{ width: '50%' }} className="h-2 rounded-full bg-blue-500" />
                    </div>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default FlashProductCard;
