import React from "react";
const PricingSection = () => {
    return(
        <section className=" py-12 px-4 sm:px-6 md:px-8">
            <div>
                <h1 className="flex justify-center text-gray-1000 font-bold text-2xl py-4">Pricing</h1>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-rows-2 max-w-200 mx-auto ">
                <div className="bg-white py-8 px-2 rounded-lg shadow-lg shadow-gray-300 mr-5">
                    <h3 className="text-gray-500 font-semibold">Starter</h3>
                    <h1 className="text-gray-1000 font-bold text-xl">$100/mo</h1>
                </div>
                <div className="bg-white py-8 px-2 rounded-lg shadow-lg shadow-gray-300 mr-5">
                    <h3 className="text-gray-500 font-semibold">Businees</h3>
                    <h1 className="text-gray-1000 font-bold text-xl">$200/mo</h1>
                </div>
            </div>
            
        </section>
    )
}
export default PricingSection