import React from 'react'
import Navbar from '../components/Navbar'
import smallDisplay from '../assets/smallDisplay.png'

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="bg-red-500 h-[45vw] w-screen flex">
                <div className="w-1/2 h-[45vw] bg-[#F3F4F6] p-40 flex flex-col gap-12">
                    <div>
                        <h1 className="font-extrabold text-[84px] leading-tight font-prompt text-black">Grab <br /> Off Smartphone <br /> Collection </h1>
                    </div>
                    <div>
                        <p className="text-xl font-montserrat text-black">Lorem ipsum dolor sit amet consectetur. <br /> Eleifend nec morbi tellus vitae leo nunc.</p>
                    </div>
                    <div className="flex gap-12">
                        <div className="h-[140px] w-[140px] bg-white rounded-3xl flex justify-center items-center overflow-hidden" style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
                            <img src={smallDisplay} className="transition-transform duration-300 ease-out hover:scale-105 max-w-full max-h-full" />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="font-semibold text-[40px] leading-tight font-prompt text-black">iPhone 15 Pro <br /> Edition </h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-[45vw] bg-yellow-500">

                </div>
            </div>
        </div>
    )
}

export default HomePage