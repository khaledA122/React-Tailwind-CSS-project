import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import StatsImage from "../assets/stats.webp";
const SchedualSection = () =>{
    return(
      <section className="max-w-7xl mx-auto flex md:flex-row flex-col gap-15 md:gap-20 justify-center py-8 px-4 md:px-6 sm:px-8">
        <div>
            <img src={StatsImage} alt="#" />
        </div>
        <div className="mt-25">
            <p className="text-orange-500 font-semibold items-center"> SCHEDULE </p>
            <h1 className="text-gray-1000 text- text-3xl font-bold py-5">Streamline Your Business <br />
            With Smart Scheduling Solutions</h1>
            <p className="text-gray-500 max-w-120 text-sm mt-3">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>
            <a className="flex gap-2 hover:gap-4 text-blue-700 mt-7 hover:text-blue-500 " href="#">Explore scheduling features <p className="mt-1.5"><IoIosArrowRoundForward /></p></a>
        </div>
      </section> 
    )
}
export default SchedualSection