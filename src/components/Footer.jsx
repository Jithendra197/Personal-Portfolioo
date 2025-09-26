import React from "react";
import {FaGithub , FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-black w-full text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col justify-center md:flex-row md:space-x-12 items-center mb-4">
                    <div className="flex-1 mb-4 justify-start md:mb-0">
                        
                            <h3 className="text-2xl font-bold mb-2">Jithendra Nagaraj Jalihal</h3>
                            <p className="text-gray-400">
                                Frontend Developer 
                            </p>  
                        </div>   
                </div>

                <div className="border-t border-gray-600 flex flex-col md:flex-row md:space-x-40">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Jithendra. All Rights Reserved</p>
                    <div className="flex space-x-4 my-3 md:my-0">
                        <a href="https://www.linkedin.com/in/jithendra-nagaraj-jalihal-7b9bb8257/" className="text-gray-400 hover:white text-2xl mt-1" target="_blank"><FaLinkedin/></a>
                        <a href="https://github.com/Jithendra197" className="text-gray-400 hover:white text-2xl mt-1 ml-2"><FaGithub/></a>
          
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;