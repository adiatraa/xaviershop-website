import React from 'react';
import { Link } from 'react-router-dom';

function formatPrice(price) {
    return `Rp ${price.toLocaleString('id-ID')}`;
}

const BestDealCard = ({ product }) => {
    return (
        <Link to={"/productPage/" + product.id} className="hover:text-black">
            <div className="w-[312px] min-[2000px]:w-[312px] min-[1500px]:w-[280px] p-2 mt-8 flex gap-12 min-[2000px]:gap-12 min-[1500px]:gap-10 items-center">
                <div className="h-[160px] w-[150px] min-[1500px]:h-[140px] min-[2000px]:h-[160px] min-[1500px]:w-[90px] flex justify-center items-center">
                    <img src={product.imgUrl} alt={product.name} className="rounded-3xl max-w-fit max-h-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-12 min-[1500px]:gap-8">
                        <h1 className="font-semibold font-prompt text-lg min-[2000px]:text-lg min-[1500px]:text-[16px]">{product.name}</h1>
                        <h1 className="font-semibold text-blue-500">{formatPrice(product.price)}</h1>
                    </div>
                    <button
                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default BestDealCard;
