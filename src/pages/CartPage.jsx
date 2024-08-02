import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import { IoTicket, IoCaretForward, IoAddOutline, IoRemoveOutline, IoTrashBin, IoHeart } from 'react-icons/io5';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCarts, fetchCarts, fetchCart, updateCartQuantity } from '../store/cart-slice';
import { fetchProducts } from '../store/product-slice';

function CartPage() {
    const [pages, setPages] = useState([]);
    const dispatch = useDispatch();
    const userRole = localStorage.getItem('user_role');

    useEffect(() => {
        setPages([{ name: 'Cart Page', href: '/cartPage', current: true }]);
    }, []);

    let carts = useSelector((state) => state.cart.items);
    const products = useSelector((state) => state.publicProduct.items);
    const productAuth  = useSelector((state) => state.product.items);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCarts());
    }, []);

    const cartsNew = [];
    if (userRole === 'seller') {
        carts.forEach((cart) => {
            cartsNew.push({
                id: cart.id,
                productId: cart.productId,
                quantity: cart.quantity,
                product: productAuth.find((product) => cart.productId === product.id),
            });
        });
    } else {
        carts.forEach((cart) => {
            cartsNew.push({
                id: cart.id,
                productId: cart.productId,
                quantity: cart.quantity,
                product: products.find((product) => cart.productId === product.id),
            });
        });
    }
    carts = [...cartsNew];

    function formatPrice(price) {
        if (typeof price === 'number') {
            return `Rp ${price.toLocaleString('id-ID')}`;
        }
        return price;
    }

    const calculateTotalPrice = () => {
        return carts.reduce((total, cart) => {
            if (cart.product) {
                return total + (cart.product.price * cart.quantity);
            }
            return total;
        }, 0);
    };

    const totalPrice = calculateTotalPrice();

    function handleDelete(id) {
        try {
            dispatch(deleteCarts(id));
        } catch (err) {
            console.log(err);
        }
    }

    function handleDecrementQuantity(id, currentQuantity) {
        const newQuantity = currentQuantity - 1;
        dispatch(updateCartQuantity(id, newQuantity));
    }

    function handleIncrementQuantity(id, currentQuantity) {
        const newQuantity = currentQuantity + 1;
        dispatch(updateCartQuantity(id, newQuantity));
    }

    return (
        <div>
            <Navbar />
            <Breadcrumb pages={pages} />
            <div className="flex mt-16 ml-[4rem] gap-10">
                {carts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[300px] w-[1100px] bg-gray-100 border border-gray-300 rounded-xl p-6">
                        <h1 className="text-xl font-bold text-blue-500">Cart is empty, get your product asap!</h1>
                        <a href="/productPage" className="mt-4 font-semibold text-blue-500 hover:text-blue-600">Start Shopping</a>
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col gap-10'>
                            <div className="flex items-center space-x-[400px] h-[70px] lg:w-[800px] bg-transparent p-6 rounded-xl border border-gray-400">
                                <div className="flex gap-8">
                                    <input
                                        id="candidates"
                                        name="candidates"
                                        type="checkbox"
                                        aria-describedby="candidates-description"
                                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <h1 className="font-semibold">Select All</h1>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="font-semibold text-blue-500 cursor-pointer hover:text-blue-500">UPDATE CART</a>
                                    <div className="divide-x divide-gray-500 border-l-2">
                                        <a href="#" className="ml-4 font-semibold text-red-500 hover:text-red-500">REMOVE</a>
                                    </div>
                                </div>
                            </div>
                            {carts && 
                            carts.map((cart) => (
                                <div key={cart.id} className='flex gap-4 h-[220px] lg:w-[800px] border border-gray-500 rounded-xl p-6'>
                                    <div className='flex gap-4 justify-center items-center'>
                                        <input
                                            id="candidates"
                                            name="candidates"
                                            type="checkbox"
                                            aria-describedby="candidates-description"
                                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <div className='h-[153px] w-[150px] rounded-xl flex justify-center'>
                                            <img src={cart.product?.imgUrl} alt="" className='h-full w-max' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col p-2 gap-5'>
                                        <h1 className="font-bold text-xl font-montserrat">{cart.product?.name}</h1>
                                        <h1 className="font-bold text-blue-500 text-xl">{cart.product ? formatPrice(cart.product.price) : 'N/A'}</h1>
                                        <div className='flex space-x-[10rem] justify-center items-center'>
                                            <a href="#" className="text-gray-400 font-semibold hover:text-blue-500">+Add note</a>
                                            <div className='flex gap-4 items-center justify-center'>
                                                <div className='h-[50px] w-[180px] flex gap-10 items-center border border-gray-400 p-4 rounded-xl'>
                                                    <button onClick={() => handleIncrementQuantity(cart.id, cart.quantity)} className='bg-transparent'><IoAddOutline className="h-6 w-6 text-gray-400 hover:text-blue-500" /></button>
                                                    <h1 className='font-bold text-blue-500 text-lg'>{cart.quantity}</h1>
                                                    <button onClick={() => handleDecrementQuantity(cart.id, cart.quantity)} className='bg-transparent'><IoRemoveOutline className="h-6 w-6 text-gray-400 hover:text-blue-500" /></button>
                                                </div>
                                                <button onClick={() => handleDelete(cart.id)} className='h-[50px] w-[50px] flex gap-10 items-center bg-transparent border border-gray-400 hover:bg-red-500 hover:border-transparent justify-center rounded-xl group'>
                                                    <IoTrashBin className="h-6 w-6 text-gray-400 group-hover:text-white" />
                                                </button>
                                                <button className='h-[50px] w-[50px] flex gap-10 items-center bg-transparent border border-gray-400 hover:bg-blue-500 justify-center rounded-xl group'>
                                                    <IoHeart className="h-6 w-6 text-gray-400 group-hover:text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex cursor-pointer items-center h-[70px] lg:w-[390px] min-[2000px]:w-[590px] min-[1500px]:w-[440px] bg-[#F3F8FF] p-6 rounded-xl border-2 border-blue-500">
                                <div className="flex lg:space-x-32 min-[2000px]:space-x-80 min-[1500px]:space-x-40">
                                    <div className="flex gap-6">
                                        <IoTicket className="h-6 w-6 text-blue-500" />
                                        <h1 className="font-bold text-blue-500">I have promo code</h1>
                                    </div>
                                    <IoCaretForward className="h-6 w-6 text-blue-500" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 h-[280px] lg:w-[390px] ] min-[2000px]:w-[590px] min-[1500px]:w-[440px] p-6 rounded-xl border border-gray-400">
                                <h1 className="font-bold text-xl">Shopping Summary</h1>
                                <div className='flex items-center lg:space-x-32 min-[2000px]:space-x-80 min-[1500px]:space-x-40'>
                                    <h1 className='font-semibold'>Total</h1>
                                    <h1 className='text-2xl text-blue-500 font-bold'>{formatPrice(totalPrice)}</h1>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex max-w-xl h-12 flex-1 items-center justify-center rounded-md border bg-blue-500 px-8 text-white font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        CHECKOUT
                                    </button>
                                    <div className='flex items-center justify-center p-5'>
                                        <a href="#" className='font-semibold text-blue-500 hover:text-blue-500'>Back to Shopping</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;
