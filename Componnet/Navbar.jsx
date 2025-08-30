import { useState } from "react";
import { HiMenu,HiX }from "react-icons/hi";
const Navbar = () =>{
    const [ismenuOpen,setIsMenuOpen]=useState(false)
    const [activeLink, SetactiveLink]=useState('#home')
    const navLink=[
        {href:"#home",label:"Home"},
        {href:"#about",label:"About Us"},
        {href:"#services", label:"Our Services"},
        {href:"#testimonials",label:"Testimonials"}
    ]
return(
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>  
    <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-15 h-11'>
        
        {/* logo */}
        <div className="flex item-center">
            <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
             <div className='w-4 h-4 bg-red-600 -ml-1 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
        </div>
        {/* mobile */}
         <button onClick={()=> setIsMenuOpen(!ismenuOpen)} className="md:hidden p-2 ">
            {
                ismenuOpen ? <HiX className='size-6' /> : <HiMenu className="size-6"/>
            }
         </button>
        {/* desktop in tuch btn */}
        <div className="hidden md:flex items-center gap-10">
            {
                
                navLink.map((link , index)=>(
                    <a key={index} href={link.href} 
                    onClick={() => SetactiveLink(link.href)} 
                    className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                        {link.label}</a>
                
                ))
            }
        </div>
        
        {/* btn */}
        <button className={`hidden md:block bg-blue-700 rounded-lg px-6   hover:bg-blue-600 md:h-10 text-white text-sm font-medium trnsittion-all hover:shadow-lg hover:shadow-blue-100`}>
            <a href="#newPage" >Get In Tuch</a>
        </button>
       
       
        </div>

        {
            ismenuOpen && (
                <div className=" md:hidden bg-white border-t border-gray-100 py-4 ">

                <div className="contaner mx-auto px-4 space-y-3">
                    {navLink.map((link ,index)=>(
                        <a 
                        onClick={() =>{
                            SetactiveLink(link.href);
                            setIsMenuOpen(false);
                        }}
                        key={index} href={link.href}  className={`block px-4 text-sm font-medium ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>{link.label}</a>
                    ))}
                    <button className={` w-full bg-blue-700 rounded-lg px-6   hover:bg-blue-600 md:h-10 text-white text-sm font-medium arnsittion-all hover:shadow-lg hover:shadow-blue-100 md: h-8`}>
            <a href="#newPage" >Get In Tuch</a>
        </button>
       
                </div>
                </div>
            )
        }
    </nav>
)
}
export default Navbar;