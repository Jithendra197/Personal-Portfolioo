import React from "react";
import portfolio from './portfolio.jpg';
import ecommerce from './ecommerce.jpg';
import book from './book.jpg';
import images from './images.png';

const Projects =() => {
    return(
        <div className="bg-black w-full text-white py-20 px-15" id="/project">
                <h2 className="text-4xl font-bold text-center py-1 mb-10 bg-gradient-to-r from-violet-800 to-violet-500 bg-clip-text text-transparent">Projects</h2> 
              
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18">
                         <div className="bg-gray-800 h-50 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 pb-5">
                        <img className="w-full h-30 object-center rounded-lg" src={portfolio} alt=""></img>
                        <h3 className="mt-2 text-2xl pl-3 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                         Portfolio Website
                        </h3>
                        <p className="text-gray-300 mb-4 pl-4"></p>

                       <div className="flex justify-around">
                            <a className="relative p-1 rounded-lg bg-white text-black" href="https://github.com/Jithendra197/Personal-Portfolioo" target="_blank" >Github &rarr;</a>
                            <a className="relative p-1 rounded-lg bg-white text-black" href="https://jithendra197.github.io/Personal-Portfolioo" target="_blank" >Live View &rarr;</a>
                        </div> 
                        
                    </div>
                         <div className="bg-gray-800 h-50 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-lg pb-5">
                        <img className="w-full h-30 object-center rounded-lg" src={ecommerce} alt=""></img>
                        <h3 className="mt-2 text-2xl pl-3 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                           E-Commerce Webpage
                        </h3>
                        <p className="text-gray-300 mb-4 pl-4"></p>
                        
                        <div className="flex justify-around">
                            <a className="relative  p-1 rounded-lg bg-white text-black" href="https://github.com/Jithendra197/E-Commerce" target="_blank" >Github &rarr;</a>
                            <a className="relative p-1 rounded-lg bg-white text-black" href="https://jithendra197.github.io/E-Commerce/" target="_blank" >Live View &rarr;</a>
                        </div>
                        
                    </div>
                         <div className="bg-gray-800 h-50 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-lg pb-5">
                        <img className="w-full h-30 object-center rounded-lg" src={images} alt=""></img>
                        <h3 className="mt-2 text-2xl pl-3 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                           NewsApp- Top Headlines
                        </h3>
                        <p className="text-gray-300 mb-4 pl-4"></p>
                        <div className="flex justify-around">
                            <a className="relative p-1 rounded-lg bg-white text-black" href="https://github.com/Jithendra197/News-Pulse" target="_blank" >Github &rarr;</a>
                            <a className="relative p-1 rounded-lg bg-white text-black" href="/" target="_blank" >Live View &rarr;</a>
                        </div>
                    </div>
                         <div className="bg-gray-800 h-50 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-lg pb-5">
                        <img className="w-full h-30 object-center rounded-lg" src={book} alt=""></img>
                        <h3 className="mt-2 text-2xl pl-3 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                           Book Finder Webpage
                        </h3>
                        <p className="text-gray-300 mb-4 pl-4"></p>
                        <div className="flex justify-around">
                            <a className="relative p-1 rounded-lg bg-white text-black" href="https://github.com/Jithendra197/Book-Finder" target="_blank" >Github &rarr;</a>
                            <a className="relative p-1 rounded-lg bg-white text-black" href="https://jithendra197.github.io/Book-Finder/" target="_blank" >Live View &rarr;</a>
                        </div>
                    </div>
                    </div>
                    </div>
                   
                </div>
                
        
    )
}

export default Projects