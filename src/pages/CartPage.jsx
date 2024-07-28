import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import { IoTicket, IoCaretForward } from 'react-icons/io5';

function CartPage() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        setPages([{ name: 'Cart Page', href: '/cartPage', current: true }]);
    }, []);

    return (
        <div>
            <Navbar />
            <Breadcrumb pages={pages} />
            <div className="flex mt-16 ml-[11rem] gap-10">
                <div className="flex items-center space-x-[700px] h-[70px] w-[1100px] bg-transparent p-6 rounded-xl border border-gray-400">
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
                <div className="flex flex-col gap-10">
                    <div className="flex items-center h-[70px] w-[590px] bg-[#F3F8FF] p-6 rounded-xl border-2 border-blue-500">
                        <div className="flex space-x-80 cursor-pointer">
                            <div className="flex gap-6">
                                <IoTicket className="h-6 w-6 text-blue-500" />
                                <h1 className="font-bold text-blue-500">I have promo code</h1>
                            </div>
                            <IoCaretForward className="h-6 w-6 text-blue-500" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 h-[280px] w-[590px] p-6 rounded-xl border border-gray-400">
                        <h1 className="font-bold text-xl">Shopping Summary</h1>
                        <div className='flex items-center space-x-80'>
                            <h1 className='font-semibold'>Total</h1>
                            <h1 className='text-2xl text-blue-500 font-bold'>Rp 15.000.000</h1>
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
            </div>
        </div>
    )
}

export default CartPage