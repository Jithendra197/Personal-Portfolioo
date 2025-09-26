import React from "react";

const Education = () => {
    return(
        <div className="bg-black w-full text-white pt-14 p-4 "id="/education">
            <div className="container">
                <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-violet-800 to-violet-500 bg-clip-text text-transparent">Education</h1>
            </div>
            <div className="mt-6 md:ml-3 flex flex-col">
                <div className="bg-gray-900 w-85 md:w-155 h-47 md:h-37 md:ml-9 pl-3 pt-1 rounded-lg border-gray-900 border-1 hover:border-white duration-400 ">
                    <h3 className="text-2xl">Bachelor's Degree</h3>
                    <p>2021-2025</p>
                    <p className="pt-2">University: Visvesvaraya Technological University<br/>
                       College: Rao bahadur y. Mahabaleswarappa Engineering College, Ballari, Karnataka<br/>
                       Percentage: 76.60%
                    </p>
                </div>
                
                <div className=" md:flex md:justify-end md:items-end mr-12 sm:flex sm:justify-start sm:items-start">
                <div className="bg-gray-900 w-85 md:w-155 mt-5 h-50 md:h-38 pl-3 pt-3 rounded-lg border-gray-900 border-1 hover:border-white duration-400 ">
                    <h3 className="text-2xl">PUC (12<sup>th</sup> Standard)</h3>
                    <p>2020-2021</p>
                    <p className="pt-2">
                        Karnataka Board of Secondary Education<br/>
                        College : Ballari Independent Pre University College<br/>
                       Percentage: 79.88 %
                    </p>
                </div>
                </div>
                <div className=" bg-gray-900 w-85 md:w-155 mt-5 h-50  md:h-39 md:ml-9 md:pl-3 pt-3 rounded-lg border-gray-900 border-1 hover:border-white duration-400 ">
                    <h3 className="text-2xl">10<sup>th</sup> Standard</h3>
                    <p>2018-2019</p>
                    <p className="pt-2">
                        Central Board of Secondary Education<br/>
                       School: Dream World School<br/>
                       Percentage: 73.20%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education;