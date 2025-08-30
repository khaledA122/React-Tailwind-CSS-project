import React from "react";
import MonitorsImage from "../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
const MonaiterSection = () => {
    return(
         <section className="max-w-7xl mx-auto flex md:flex-row flex-col  justify-center py-8 px-4 md:px-6 sm:px-8">
              
                <div className="mt-25 max-w-7xl mx-auto">
                    <p className="text-green-500 font-semibold items-center"> SCHEDULE </p>
                    <h1 className="text-gray-1000 text- text-3xl font-bold py-5">Streamline Your Business <br />
                    With Smart Scheduling Solutions</h1>
                    <p className="text-gray-500 max-w-120 text-sm mt-3">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>
                    <a className="flex gap-2 hover:gap-4 text-blue-700 mt-7 hover:text-blue-500" href="#">Explore scheduling features <p className="mt-1.5 "><IoIosArrowRoundForward /></p></a>
                </div>
                  <div className="pt-10">
                    <img src={MonitorsImage} alt="#" />
                </div>
              </section> 
    )
}
export default MonaiterSection