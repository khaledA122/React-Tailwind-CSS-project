import React from "react";

const FeatureSection = () => {
    const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]
    return(
        <section className="w-full py-16 px-4 sm:px-6 md:px-8 ">
            <h1 className="text-center text-gray-1000 font-bold text-2xl">How can we help your business?</h1>
            <br />
            <p className="text-sm font-medium text-gray-600 text-center">When you resell besnik, you build trust and increase</p>

                <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 justify-between gap-8 ">
                {
                    features.map((feature , index) =>(
                        <div key={index} className=" flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center  rounded-full my-8 colN" style={{
                                backgroundColor: index === 0 ? '#F1EFF0' : index === 1 ? '#FEE7E7' : '#FEE7E4'
                            }}>{feature.icon}</div>
                            <div>
                                <h1 className="font-bold text-xl text-center text-gray-1000">{feature.title}</h1>
                                <p className="text-lg font-medium text-gray-600 mt-6 text-center">{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
                </div>

                <div className="text-center mt-20 ">
                    <button className="py-4 px-4 md:px-6 sm:px-8 bg-blue-700 text-white rounded-full hover:bg-blue-600 hover:shadow-lg text-sm font-medium hover:shadow-blue-200"><a href="#">Become a Partner</a></button>
                </div>
          
        </section>

    )
}

export default FeatureSection