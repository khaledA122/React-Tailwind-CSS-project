import React from "react";
import { GoArrowRight } from "react-icons/go";
import heroImage from "../assets/hero-image.png";
const Hero = () =>{
    return(
        <section id="home" className="container mx-auto flex flex-col md:flex-row  items-center justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 space-y-8">
          <div className="flex bg-gray-50 gap-2 w-fit py-2 px-4 rounded-full hover:bg-gray-100 cursor-pointer group">
           <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
           <span>Jump start your growth</span>
           </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-black-500 ">We boost the growth for</span>
            <span className="text-blue-600"> Startup to Fortune 500</span>
            <div className="">
 <h1 className="relative bottom-0 left-0 w-130 h-0.5 bg-blue-200/60 mt-2"></h1>

                
            </div>
            <div>

            <span className="">Companies <span className="inline-block ml-2 animate-pulse">⏰</span> </span>
           
            </div>
          </div>
          <div>
            <h1 className="text-sm font-medium text-gray-600"> Get the most accurate leads, sales people training and <div>conversions, tools and more — all within the same one billing.</div></h1>
           </div>
          
          <div className="flex">
            <input type="email" placeholder="Email Address" className="px-1 py-1 md:px-6 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"/>
           
          <div>
            <button className="px-5 py-3 bg-blue-600 ml-3 hover:shadow-lg hover:shadow-blue-200 rounded-xl  hover:bg-blue-500 text-white text-lg font-medium"> <GoArrowRight /></button>
  
            </div>
          </div>

          </div>
         
          <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
               <div className="relative">
                <img src={heroImage} alt="hero image" className="rounded-l relative z-10 hover:scale-[1.02] transition-transform duration-300"/>
               </div>
          </div>
        </section>
    )
}
export default Hero;