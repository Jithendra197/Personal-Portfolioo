import React from "react";
import image from './jit.png';

const Home =() => {
    return(
        <div className="bg-black w-full text-white py-2 pb-25 text-center" id="/">
          <div className="pt-13">
            <img className="  w-40  md:w-50 h-55 mb-6 pt-5 mx-auto objects-cover rounded-full transition-transform duration-600 hover:scale-110" src={image} alt=""></img>
                <h1 className="text-3xl font-bold px-10 md:px-6 ">Hi, I'm <span className="bg-gradient-to-r from-blue-700 via-yellow-500 to-green-700 text-transparent bg-clip-text inline-block">Jithendra Nagaraj Jalihal,</span><br/> a frontend developer based in India.</h1>
                <p className="mt-4 text-lg space-x-4 px-12 md:px-24 text-gray-300">dnfeof neefonefo fnfoen wnfonef fzonfeonf nzfdlfond jzsflenioe<br/> zsnfidnfidfen mld djxngfnes ndnlowinfio f eoneo nfnesiotesi nneneois nfndeofe</p>
        </div>
            <div className="mt-8 space-x-3 space-y-3">
                <a href="jithendraNagrajJalihal.pdf" download>
                <button className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 border-2 green  py-2 md:py-4 px-3 pr-4 pl-4 rounded-full cursor-pointer transition-transform durations-300 hover:scale-105">Download Resume</button>
                </a>
                <a href="/conact">
                <button  className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 border-2 green py-2  md:p-4 px-10 rounded-full cursor-pointer transition-transform durations-300 hover:scale-105">Contact Us</button>
            </a>
            </div>

        </div>
    )
}
export default Home;
