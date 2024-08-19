import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import smallDisplay from '../assets/smallDisplay.png';
import displayThumb from '../assets/displayPhone.png';
import { IoLaptop, IoPhonePortrait, IoTabletPortrait, IoWatch, IoHeadset, IoTv } from 'react-icons/io5';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPubProducts } from '../store/public-product-slice';
import BestDealCard from '../components/BestProductCard';
import FlashProductCard from '../components/FlashProductCard';
import { fetchCarts } from '../store/cart-slice';

function HomePage() {
    const { items: products, loading } = useSelector((state) => ({
        items: state.publicProduct.items,
        loading: state.publicProduct.loading
    }));
    const dispatch = useDispatch();
    const userRole = localStorage.getItem("user_role");

    useEffect(() => {
        //Fetch Public Product
        dispatch(fetchPubProducts());
        //Fetch Cart base on Role
        if (userRole === "seller" || userRole === "user") {
            dispatch(fetchCarts());
        }
    }, [dispatch, userRole]);

    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className=" w-full bg-[#F3F4F6] flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2  h-full  p-8 min-[2000px]:p-40 min-[1500px]:p-20 flex flex-col gap-8 lg:gap-12">
                    <div>
                        <div className="flex flex-row lg:flex-row items-start lg:items-center gap-4 lg:gap-12">
                            <h1 className="text-4xl z-10 lg:text-[84px] min-[2000px]:text-[84px] min-[1500px]:text-[70px] font-extrabold text-black leading-tight">Grab</h1>
                            <div className="h-11 lg:h-[80px] w-24 lg:w-[165px] flex bg-[#1977F1] items-center justify-center rounded-xl lg:rounded-3xl -rotate-2 ml-[-24px] lg:ml-[-62px]">
                                <h1 className="text-2xl lg:text-[50px]  font-extrabold text-white">50%</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-[84px] min-[2000px]:text-[84px] min-[1500px]:text-[70px] font-extrabold text-black leading-tight">Off Smartphone <br className="hidden lg:block" /> Collection</h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-base lg:text-xl font-montserrat text-black">Explore the latest in smartphones, laptops, iPads, and more. Don't miss out on cutting-edge technology and unbeatable deals. <br /> Shop now and elevate your tech experience!</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="h-36 lg:h-[140px] w-68 lg:w-[140px] bg-white rounded-3xl flex justify-center items-center overflow-hidden shadow-lg">
                            <img src={smallDisplay} className="transition-transform duration-300 ease-out hover:scale-125 max-w-full max-h-full" alt="Small Display" />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="font-semibold text-[40px] leading-tight font-prompt text-black">iPhone 15 Pro <br className="hidden lg:block" /> Edition</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[45vw] bg-[#F3F4F6] flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className="z-10 mt-20 lg:mt-[250px] flex-col gap-3 hidden lg:flex min-[1500px]:mr-[30px] min-[2000px]:mr-[-40px]">
                            <div className="bg-white rounded-xl p-3 rotate-[-2deg] shadow-lg">
                                <h1 className="text-xl lg:text-[34px] font-semibold text-black">Highest</h1>
                            </div>
                            <div className="bg-[#1977F1] rounded-xl p-3 rotate-[3deg] shadow-lg">
                                <h1 className="text-xl lg:text-[34px] font-semibold text-white">Quality</h1>
                            </div>
                        </div>
                        <img src={displayThumb} className="ml-[-40px] lg:ml-[-80px] hidden lg:block xl:w-[600px] min-[2000px]:ml-[-40px] min-[1500px]:ml-[-120px] min-[2000px]:w-[800px]  min-[1500px]:w-[600px]" alt="Display Thumb" />
                        {/* <img src={displayThumb} className="ml-[-40px] lg:ml-[-80px] lg:w-[600px] hidden lg:block min-[2000px]:ml-[-40px] min-[1500px]:w-[400px]" alt="Display Thumb" /> */}
                    </div>
                </div>
            </div>

            {/* What we provide Section */}
            <div className="h-auto max-w-full bg-bg-what bg-cover flex flex-col items-center py-20 gap-24">
                <div>
                    <h1 className="text-4xl lg:text-[84px] font-extrabold text-black">What <span className="text-blue-500">we</span> provide?</h1>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-24">
                        {[
                            { icon: <IoLaptop className="h-10 w-10" />, label: 'Mac' },
                            { icon: <IoPhonePortrait className="h-10 w-10" />, label: 'iPhone' },
                            { icon: <IoTabletPortrait className="h-10 w-10" />, label: 'iPad' },
                            { icon: <IoWatch className="h-10 w-10" />, label: 'Watch' },
                            { icon: <IoHeadset className="h-10 w-10" />, label: 'Airpods' },
                            { icon: <IoTv className="h-10 w-10" />, label: 'TV & Home' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <button
                                    type="button"
                                    className="rounded-full bg-white p-6 text-black shadow-md hover:text-white hover:bg-blue-500 transition-all"
                                >
                                    {item.icon}
                                </button>
                                <span className="mt-4 text-sm text-center">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Best Deal Section */}
            <div className="h-auto max-w-full px-6 lg:px-48 py-12 min-[2000px]:px-48 min-[1500px]:px-24">
                <h1 className="text-2xl lg:text-3xl font-prompt font-bold mb-6">Best Deals</h1>
                <section aria-labelledby="best-deals-heading">
                    <h2 id="best-deals-heading" className="sr-only">Best Deals</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 lg:grid-cols-3 gap-6 lg:gap-10">
                        {products && products.slice(0, 10).map((product, idx) => (
                            <BestDealCard key={idx} product={product} />
                        ))}
                    </div>
                </section>
            </div>


            {/* Flash Sale Section */}
            <div className="h-auto max-w-full px-6 lg:px-48 py-12">
                <div className="relative h-auto w-full bg-bg-flash bg-no-repeat rounded-3xl p-6 lg:p-20">
                    <div className="absolute inset-0 bg-blue-500 opacity-90 rounded-3xl"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row min-[2000px]:flex-row min-[1500px]:flex-col gap-6 lg:gap-20">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-white">Flash Sale</h1>
                            <p className="text-base lg:text-lg text-white">What are you waiting for? Get huge discounts on smartphones, laptops, <br /> tablets, and more at our Flash Sale now! Limited-time offers, hurry <br /> before they're gone.</p>
                            <h1 className="text-2xl lg:text-4xl font-semibold text-white">05 : 42 : 19</h1>
                        </div>
                        <div className="relative z-10 lg:flex flex-col lg:flex-col 2xl:flex-row gap-6 lg:gap-10">
                            {products && products.slice(4, 6).map((product, idx) => (
                                <FlashProductCard key={idx} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
