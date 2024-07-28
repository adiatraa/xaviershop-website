import React from 'react'
import Navbar from '../components/Navbar'
import smallDisplay from '../assets/smallDisplay.png'
import displayThumb from '../assets/displayPhone.png'
import bestDeal from '../assets/bestDeal.png'
import logo from '../assets/Logo.png'
import { IoLaptop, IoPhonePortrait, IoTabletPortrait, IoWatch, IoHeadset, IoTv, IoCall } from 'react-icons/io5';

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

function HomePage() {
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
                        <div className="flex gap-10">
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-2 mt-8 flex gap-6 items-center">
                                <div className="h-[160px] w-[150px] flex justify-center items-center">
                                    <img src={bestDeal} alt="" className="rounded-3xl max-w-full max-h-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-12">
                                        <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                        <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                    </div>
                                    <button
                                        // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                        className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:text-[#1977F1] hover:bg-blue-500 hover:text-white"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
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
                            <div className="w-[428px] h-[168px] bg-white rounded-2xl">
                                <div className="p-2 flex gap-2 items-center">
                                    <div className="h-[150px] w-[150px] flex justify-center items-center">
                                        <img src={bestDeal} alt="" className="rounded-3xl max-w-28" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-12">
                                            <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                            <div className="flex space-x-20">
                                                <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                                <p className="text-[#A7A7A7]">5 left</p>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden rounded-full w-56 bg-gray-200">
                                            <div style={{ width: '50%' }} className="h-2 rounded-full bg-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[428px] h-[168px] bg-white rounded-2xl">
                                <div className="p-2 flex gap-2 items-center">
                                    <div className="h-[150px] w-[150px] flex justify-center items-center">
                                        <img src={bestDeal} alt="" className="rounded-3xl max-w-28" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-12">
                                            <h1 className="font-semibold font-prompt text-lg">iPhone 15 Pro</h1>
                                            <div className="flex space-x-20">
                                                <h1 className="font-semibold text-blue-500">Rp 1.500.000</h1>
                                                <p className="text-[#A7A7A7]">5 left</p>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden rounded-full w-56 bg-gray-200">
                                            <div style={{ width: '50%' }} className="h-2 rounded-full bg-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-white mt-16 sm:mt-24">
                <div className="relative sm:mt-16">
                    <div aria-hidden="true" className="hidden sm:block">
                        {/* Background decorations, if any */}
                    </div>
                    <div>
                        <div className="relative overflow-hidden bg-blue-500 px-20 py-10 shadow-xl sm:px-20 sm:py-20">
                            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                                <svg
                                    fill="none"
                                    viewBox="0 0 1463 360"
                                    preserveAspectRatio="xMidYMid slice"
                                    className="absolute inset-0 h-full w-full"
                                >
                                    <path
                                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                        fill="currentColor"
                                        className="text-blue-400 text-opacity-40"
                                    />
                                    <path
                                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                        fill="currentColor"
                                        className="text-blue-600 text-opacity-40"
                                    />
                                </svg>
                            </div>
                            <div className="relative flex flex-col-reverse xl:flex-row xl:items-center">
                                <div className="xl:flex-1 xl:pr-12 xl:mt-0 mt-12">
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Want product news and updates? <br/> Sign up for our newsletter.
                                    </h2>
                                </div>
                                <form className="w-full max-w-md xl:w-auto xl:mt-0 mt-12">
                                    <div className="flex gap-x-4">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Enter your email"
                                            autoComplete="email"
                                            className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        />
                                        <button
                                            type="submit"
                                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Notify me
                                        </button>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-gray-300">
                                        We care about your data. Read our{' '}
                                        <a href="#" className="font-semibold text-white">
                                            privacy&nbsp;policy
                                        </a>
                                        .
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer aria-labelledby="footer-heading" className="bg-white">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-32 max-w-screen px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8 space-x-96">
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <img
                                    alt="Company name"
                                    src={logo}
                                    className="h-7"
                                />
                                <h1 className="font-prompt font-semibold text-2xl">Xavier Shop</h1>
                            </div>
                            <p className="text-sm leading-6 text-gray-600">
                                Empowering Your Digital Life with the Best in Technology.
                            </p>
                            <div className="flex space-x-6">
                                {navigation.social.map((item) => (
                                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold leading-6 text-gray-900">Pages</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a href="/home" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/product" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/cart" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                Cart
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-lg font-semibold leading-6 text-gray-900">Products</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a href="/products/mac" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                Mac
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/products/iphone" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                iPhone
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/products/ipad" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                iPad
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/products/airpods" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                AirPods
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/products/watch" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                Watch
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/products/tv-home" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                TV & Home
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold leading-6 text-gray-900">Contact</h3>
                                <p className="mt-6 text-gray-600 leading-6">Contact us for all your electronics needs, from phones, laptops, and earphones to watches and tablets.</p>
                                <div className="mt-6 flex gap-6">
                                    <IoCall className="h-10 w-10" />
                                    <div>
                                        <p className="text-gray-600 leading-6">Have any question?</p>
                                        <p className="text-blue-500 leading-6 font-bold">+ 123 456 789</p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button
                                            // className="relative flex items-center w-[120px] justify-center rounded-md border border-transparent bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900 hover:text-[#1977F1] hover:bg-gray-200"
                                            className="relative flex items-center w-[120px] justify-center rounded-md border border-blue-500 bg-transparent px-2 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
                                        >
                                            Live Chat
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-xs leading-5 text-gray-500">&copy; 2024 Xavier Shop, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>




        </div>
    )
}

export default HomePage