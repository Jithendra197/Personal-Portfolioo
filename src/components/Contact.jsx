import React from "react";
import {FaPhone, FaMapMarkedAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Contact = () => {
    
    return(
        <div className="bg-black w-full text-white py-20" id="/contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-800 to-violet-600 bg-clip-text text-transparent">Contact Me</h2>
                <div className="flex flex-col md:flex-row itmes-center md:space-x-12">
                     <div className="flex-1">
                        <h3 className="text-3xl mb-5 bg-gradient-to-r from-purple-500 to-green-700 bg-clip-text text-transparent font-bold">Let's Talk</h3>
                        <p className="text-1xl">I'm always open to new opportunities and collaborations. Feel free to reach out with any questions or project ideas, and I'll get back to you as soon as possible. </p>
                        <div className="mb-4 mt-8 flex">
                            <MdEmail className="inline-block text-1xl text-green-400 mr-2 mt-1"/>
                            <p className="hover:underline">njjithendra95@gmail.com</p>
                        </div>
                        <div className="mb-4 flex">
                            
                            <FaPhone className="inline-block text-1xl text-green-400 mr-2 mt-1"/>
                            <p className="hover:underline">+91 7676823244</p>
                        </div>
                        <div className="mb-4 flex">
                            <FaMapMarkedAlt className="inline-block text-1xl text-green-400 mr-2 mt-1"/>
                            <p className="hover:underline">Ballari, Karnataka-583103</p>
                        </div>
                     </div>
                     <div className="flex-1 w-full">
                        <form action="https://formspree.io/f/xrblwvow" method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="">Your Name</label>
                                <input type="text" name="name" required placeholder="Enter your Name" className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"></input>
                            </div>
                            <div>
                                <label htmlFor="email">Your Email</label>
                                <input type="text" name="email" required placeholder="Enter your Email" className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"></input>
                            </div>
                            <div>
                                <label htmlFor="message">Your Message</label>
                                <textarea type="text" name="message" required placeholder="Enter your Message" rows="5" className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"></textarea>
                            </div>
                        <button className="mt-2 px-10 border-1 py-2 rounded-full font-medium bg-gradient-to-r from-green-900 to-blue-900 cursor-pointer">Submit</button>
                        </form>

                    

                     </div>
                </div>
            </div>
        </div>
    )
}



export default Contact  