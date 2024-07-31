import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, editProducts, setEditId } from '../store/product-slice';
import { useNavigate } from 'react-router-dom';
import { IoCart } from 'react-icons/io5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');

    function handleDelete(id) {
        try {
            dispatch(deleteProducts(id));
        } catch (err) {
            console.log(err);
        }
    }

    function handleEdit(id) {
        try {
            navigate("/editProduct");
            dispatch(editProducts(id));
            dispatch(setEditId(id));
        } catch (err) {
            console.log(err)
        }
    }

    function formatPrice(price) {
        if (typeof price === 'number') {
            return `Rp ${price.toLocaleString('id-ID')}`;
        }
        return price;
    }

    function formatStock(stock) {
        return stock < 0 ? 0 : stock;
    }

    async function handleAddToCart(id) {
        console.log("Add to cart clicked", id)
        try {
            const response = await axios.post(
                import.meta.env.VITE_BASE_URL + '/carts/' + id,
                {
                    quantity: 1,
                },
                {
                    headers: {
                        Authorization: "Bearer " + accessToken,
                    },
                }
            )
            console.log(response.data, "<< resp data");
            toast.success("Item added to the cart!");
        } catch (err) {
            if (err.response.status === 401) {
                toast.error("Please login first!");
            } else {
                toast.error("Failed to add item to the cart.");
            }
        }
    }

    return (
        <div>
            <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                <div className="relative w-64 h-64 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                        alt={product.name}
                        src={product.imgUrl}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                </div>
                <div className="pb-4 pt-10 text-center">
                    <h3 className="text-sm font-medium text-gray-900 hover:text-[#1977F1]">
                        <a href={"/productPage/" + product.id} className="hover:text-[#1977F1]">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </a>
                    </h3>

                    <p className="mt-4 text-base font-medium text-gray-900">{formatPrice(product.price)}</p>
                    <div className="p-2 flex gap-3 justify-center items-center">
                        <IoCart className="h-4 w-4 text-gray-400" />
                        <h1 className="font-bold text-sm">{formatStock(product.stock)}</h1>
                        <p className="text-sm">Stock</p>
                    </div>
                    <div className="mt-6 cursor-pointer">
                        <button
                            className="relative flex items-center w-full justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                            onClick={() => handleAddToCart(product.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                    {accessToken && (
                        <div className="mt-6 cursor-pointer flex gap-4">
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="relative w-1/2 flex items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-2 text-sm font-medium text-white hover:text-white"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleEdit(product.id)}
                                className="relative w-1/2 flex items-center justify-center rounded-md border border-transparent bg-[#1977F1] px-8 py-2 text-sm font-medium text-white hover:text-white"
                            >
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
