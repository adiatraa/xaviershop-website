import React from 'react'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="bg-red-500 h-[45vw] w-screen flex">
            <div className="w-1/2 h-[45vw] bg-blue-500">

            </div>
            <div className="w-1/2 h-[45vw] bg-yellow-500">

            </div>
        </div>
    </div>
  )
}

export default HomePage