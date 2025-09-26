import React from "react";
import images from './jit.png'

const About = () => {
    return (
        <div className="bg-black w-full text-white py-2 pt-15 pb-25" id="/about">
            <div className="container mx-auto px-8 sm:8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-violet-800 to-violet-500 bg-clip-text text-transparent">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={images} alt="" className="w-30 h-40 object-cover flex flex-col md:w-20 md:flex md:flex-col lg:w-70 lg:h-70 rounded mb-8 md:mb-0"/>
                    <div className="flex-1 md:flex md:flex-col">
                        <p className="text-lg mb-8 lg:mx-15">
                            I'm Jithendra Nagaraj Jalihal, and I'm a frontend developer based in India. I have compeleted my Bachelor's degree with specialization in Computer science and Engineering, with expertise in web technologies like HTML, CSS, JavaScript, React Js, Tailwind CSS, programming language Python and database in MySQL.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex md:items-center gap-2">
                                <label htmlFor="htmlandcss" className="w-4/12 md:w-11/14">HTML & CSS</label>
                                <div className=" bg-gray-800 rounded-full w-60 md:w-130 h-2.5 lg:w-160 hover:scale-102 duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 w-47 md:w-110 lg:w-120 hover:scale-102"></div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex md:items-center gap-2">
                                <label htmlFor="htmlandcss " className="w-3/12 md:w-11/14">JavaScript</label>
                                <div className=" bg-gray-800 rounded-full w-60 md:w-130 h-2.5 lg:w-160 hover:scale-102 duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 w-40 md:w-90 lg:w-115 hover:scale-102"></div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex md:items-center gap-2">
                                <label htmlFor="htmlandcss " className="w-3/12 md:w-11/14">React Js</label>
                                <div className=" bg-gray-800 rounded-full w-60 md:w-130 h-2.5 lg:w-160 hover:scale-102 duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 w-45 md:w-95 lg:w-120 hover:scale-102"></div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex md:items-center gap-2">
                                <label htmlFor="htmlandcss " className="w-4/12 md:w-11/14">Tailwind CSS</label>
                                <div className=" bg-gray-800 rounded-full w-60 md:w-130 h-2.5 lg:w-160 hover:scale-102 duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 w-48 md:w-100 lg:w-130 hover:scale-102"></div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex md:items-center gap-2">
                                <label htmlFor="htmlandcss " className="w-3/12 md:w-11/14">Python</label>
                                <div className=" bg-gray-800 rounded-full w-60 md:w-130 h-2.5 lg:w-160 hover:scale-102 duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 w-48 md:w-110 lg:w-120 hover:scale-102"></div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex md:items-center gap-2">
                                <label htmlFor="htmlandcss " className="w-3/12 md:w-11/14">MySQL</label>
                                <div className=" bg-gray-800 rounded-full w-60 md:w-130 h-2.5 lg:w-160 hover:scale-102 duration-300">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 w-56 md:w-115 lg:w-145 hover:scale-102"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
      </div>
    )
}

export default About