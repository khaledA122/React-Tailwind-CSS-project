import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex  flex-col sm:flex-row sm:items-center items-start ">
      <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo; 


// import React from "react";
// import Image1 from "../assets/amazon.png";
// import Image2 from "../assets/meundies.png";
// import Image3 from "../assets/sitepoint.png";
// import Image4 from "../assets/slack.png";
// import Image5 from "../assets/woocommerce.png";

// const CompanyLogo =()=>{
//   const logos =[Image1 , Image2 , Image3 , Image4 , Image5]

//     return(
           
            
//         <div className="w-full flex  sm:flex-row flex-col gap-5 container mx-auto px-4 sm:px-6 lg:px-8 mb-10 items-center">

//              <div className="text-sm font-medium flex items-center z-50">
//              <div className="relative bg-blue-600 top-0 w-1 h-20 "></div>
//              <div className="ml-7">
//                 Proud Partner at <br/> Hubspot & Segment</div></div>

//           <div className="flex animate-marquee whitespace-nowrap ">
           
//            {logos.map((logo , index )=> {
//           return <img key={index} src={logo} alt="company logo" className="mx-12 h-8 w- object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all"/>
//            })}
//           </div>

//         </div>
//     )
// }
// export default CompanyLogo; 