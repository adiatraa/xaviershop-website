import React from 'react';
import { Link } from 'react-router-dom';

function formatPrice(price) {
    return `Rp ${price.toLocaleString('id-ID')}`;
}

const FlashProductCard = ({ product }) => {
    return (
        <Link to={"/productPage/" + product.id}>
        <div className="w-full lg:w-[428px] h-auto lg:h-[168px] lg:mb-0 mb-4 bg-white rounded-2xl hover:text-black">
            <div className="p-4 lg:p-2 flex flex-col lg:flex-row gap-4 lg:gap-1 items-center lg:items-center">
                <div className="h-[100px] lg:h-[150px] w-[100px] lg:w-[150px] flex justify-center items-center">
                    <img src={product.imgUrl} alt={product.name} className="rounded-3xl max-w-24 lg:max-w-28" />
                </div>
                <div className="flex flex-col flex-grow gap-2">
                    <div className="flex flex-col gap-2 lg:gap-12">
                        <h1 className="font-semibold font-prompt text-lg lg:text-xl">{product.name}</h1>
                        <div className="flex flex-row gap-20 lg:gap-16">
                            <h1 className="font-semibold text-blue-500">{formatPrice(product.price)}</h1>
                            <p className="text-[#A7A7A7]">{product.stock} left</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-full w-57 lg:w-56 bg-gray-200">
                        <div style={{ width: '50%' }} className="h-2 rounded-full bg-blue-500" />
                    </div>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default FlashProductCard;
