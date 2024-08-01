import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import smallDisplay from '../assets/smallDisplay.png'
import displayThumb from '../assets/displayPhone.png'
import bestDeal from '../assets/bestDeal.png'
import { IoLaptop, IoPhonePortrait, IoTabletPortrait, IoWatch, IoHeadset, IoTv } from 'react-icons/io5';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchPubProducts } from '../store/public-product-slice';
import BestDealCard from '../components/BestProductCard'
import FlashProductCard from '../components/FlashProductCard'
import { fetchCarts } from '../store/cart-slice'

function HomePage() {
    const { items: products, loading } = useSelector((state) => {
        return {
            items: state.publicProduct.items,
            loading: state.publicProduct.loading
        }
    });
    const dispatch = useDispatch()
    const userRole = localStorage.getItem("user_role");


    useEffect(() => {
        dispatch(fetchPubProducts());
        if(userRole === "seller" || userRole === "user") {
            dispatch(fetchCarts());
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className="h-[45vw] w-full flex">
                <div className="w-1/2 h-[45vw] bg-[#F3F4F6] p-40 flex flex-col gap-12">
                    <div>
                        <div className="flex items-center">
                            <h1 className="font-extrabold z-10 text-[84px] leading-tight font-prompt text-black">Grab</h1>
                            <div className="h-[80px] w-[165px] bg-[#1977F1] flex items-center justify-center rounded-3xl ml-[-12px] rotate-[-2deg]">
                                <h1 className="font-extrabold text-[50px] leading-tight font-prompt text-white">50% </h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-extrabold text-[84px] leading-tight font-prompt text-black">Off Smartphone <br /> Collection </h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-montserrat text-black">Explore the latest in smartphones, laptops, iPads, and more. Don't miss out on cutting-edge technology and unbeatable deals. <br /> Shop now and elevate your tech experience!</p>
                    </div>
                    <div className="flex gap-12">
                        <div className="h-[140px] w-[140px] bg-white rounded-3xl flex justify-center items-center overflow-hidden" style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
                            <img src={smallDisplay} className="transition-transform duration-300 ease-out hover:scale-125 max-w-full max-h-full" />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="font-semibold text-[40px] leading-tight font-prompt text-black">iPhone 15 Pro <br /> Edition </h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-[45vw] bg-[#F3F4F6] flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <div className="z-10 mt-[250px] flex flex-col gap-3">
                            <div className="bg-white rounded-xl p-3 rotate-[-2deg]" style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <h1 className="font-semibold text-[34px] leading-tight font-prompt text-black">Highest </h1>
                            </div>
                            <div className="bg-[#1977F1] rounded-xl p-3 rotate-[3deg]" style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <h1 className="font-semibold text-[34px] leading-tight font-prompt text-white">Quality </h1>
                            </div>
                        </div>
                        <img src={displayThumb} className="ml-[-80px]" />
                    </div>
                </div>
            </div>
            <div className="h-[502px] max-w-full bg-bg-what bg-cover flex flex-col items-center mt-20 gap-24">
                <div>
                    <h1 className="font-extrabold text-[84px] leading-tight font-prompt text-black">
                        What <span className="text-blue-500">we</span> provide?
                    </h1>
                </div>
                <div>
                    <div className="flex space-x-4 gap-24">
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                style={{ boxShadow: '0px 4px 24px -1px rgba(0,0,0,0.1)' }}
                                className="rounded-full bg-white p-6 text-black shadow-sm hover:text-white hover:bg-blue-500"
                            >
                                <IoLaptop className="h-10 w-10" />
                            </button>
                            <span className="mt-8 text-sm text-center">Mac</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                style={{ boxShadow: '0px 4px 24px -1px rgba(0,0,0,0.1)' }}
                                className="rounded-full bg-white p-6 text-black shadow-sm hover:text-white hover:bg-blue-500"
                            >
                                <IoPhonePortrait className="h-10 w-10" />
                            </button>
                            <span className="mt-8 text-sm text-center">iPhone</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                style={{ boxShadow: '0px 4px 24px -1px rgba(0,0,0,0.1)' }}
                                className="rounded-full bg-white p-6 text-black shadow-sm hover:text-white hover:bg-blue-500"
                            >
                                <IoTabletPortrait className="h-10 w-10" />
                            </button>
                            <span className="mt-8 text-sm text-center">iPad</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                style={{ boxShadow: '0px 4px 24px -1px rgba(0,0,0,0.1)' }}
                                className="rounded-full bg-white p-6 text-black shadow-sm hover:text-white hover:bg-blue-500"
                            >
                                <IoWatch className="h-10 w-10" />
                            </button>
                            <span className="mt-8 text-sm text-center">Watch</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                style={{ boxShadow: '0px 4px 24px -1px rgba(0,0,0,0.1)' }}
                                className="rounded-full bg-white p-6 text-black shadow-sm hover:text-white hover:bg-blue-500"
                            >
                                <IoHeadset className="h-10 w-10" />
                            </button>
                            <span className="mt-8 text-sm text-center">Airpods</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                style={{ boxShadow: '0px 4px 24px -1px rgba(0,0,0,0.1)' }}
                                className="rounded-full bg-white p-6 text-black shadow-sm hover:text-white hover:bg-blue-500"
                            >
                                <IoTv className="h-10 w-10" />
                            </button>
                            <span className="mt-8 text-sm text-center">TV & Home</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[502px] max-w-full flex px-48">
                <div className="">
                    <h1 className="font-prompt font-bold text-2xl">Best Deals</h1>
                    <div>
                        <section aria-labelledby="best-deals-heading">
                            <h2 id="best-deals-heading" className="sr-only">
                                Best Deals
                            </h2>
                            <div className="flex gap-10">
                                {products &&
                                    products.slice(0, 5).map((product, idx) => (
                                        <BestDealCard key={idx} product={product} />
                                    ))}
                            </div>
                            <div className="flex gap-10">
                                {products &&
                                    products.slice(6, 11).map((product, idx) => (
                                        <BestDealCard key={idx} product={product} />
                                    ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="h-[502px] max-w-full flex px-48 justify-center items-center">
                <div className="relative h-[380px] w-[1713px] bg-bg-flash bg-no-repeat rounded-[30px] p-20">
                    <div className="absolute inset-0 bg-blue-500 opacity-[0.92] rounded-[30px]"></div>
                    <div className="flex gap-20">
                        <div className="relative z-10 flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-semibold font-prompt text-4xl text-white">Flash Sale</h1>
                                <p className="font-montserrat text-white">What are you waiting for? Get huge discounts on smartphones, laptops, <br /> tablets, and more at our Flash Sale now! Limited-time offers, hurry <br /> before they're gone</p>
                            </div>
                            <div>
                                <h1 className="text-white text-4xl font-prompt font-semibold">05 : 42 : 19</h1>
                            </div>
                        </div>
                        <div className="relative z-10 flex justify-center items-center cursor-pointer gap-10">
                            {products &&
                                products.slice(0, 2).map((product, idx) => (
                                    <FlashProductCard key={idx} product={product} />
                                ))}
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage