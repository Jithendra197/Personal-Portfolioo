import React from "react";
import images from './images.png';

const Certifications = () => {
    return(
        <div className="w-full h-screen bg-black py-20" id="/certificates">
            <div>
                <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-800 to-violet-600 bg-clip-text text-transparent">Certifications</h1>
            </div>
            <div className="flex-1 justify-around">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-70 h-80 bg-gray-600 ml-10 mt-3 rounded-lg hover:scale-105 duration-500">
                <img src={images} className="object-cover w-full h-43 p-4 pb-0 rounded-lg   \][?n " alt=""/>
            
            <div className="p-4">
                <h2 className="font-bold text-2xl">Python</h2>
                <button className=" ml-18 mt-10 p-3 rounded-full bg-gray-800 text-white cursor-pointer border-1 border-gray-900 hover:border-white hover:scale-110 duration-300">Download &rarr;</button>
            </div>
            
            </div>
            <div className="w-70 h-80 bg-gray-600 ml-10 mt-3 rounded-lg hover:scale-105 duration-500">
                <img src={images} className="object-cover w-full h-43 p-4 pb-0 rounded-lg" alt=""/>
            
            <div className="p-4">
                <h2 className="font-bold text-2xl">Python</h2>
                <button className=" ml-18 mt-10 p-3 rounded-full bg-gray-800 text-white  cursor-pointer border-1 border-gray-900 hover:border-white hover:scale-110 duration-300">Download &rarr;</button>
            </div>
            </div>
            <div className="w-70 h-80 bg-gray-600 ml-10 mt-3 rounded-lg hover:scale-105 duration-500">
                <img src={images} className="object-cover w-full h-43 p-4 pb-0 rounded-lg" alt=""/>
            
            <div className="p-4">
                <h2 className="font-bold text-2xl">Python</h2>
                <button className=" ml-18 mt-10 p-3 rounded-full bg-gray-800 text-white cursor-pointer border-1 border-gray-900 hover:border-white hover:scale-110 duration-300 ">Download &rarr;</button>
            </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Certifications;