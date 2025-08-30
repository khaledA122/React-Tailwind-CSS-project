import './App.css'
import Navbar from './Componnet/Navbar'
import Hero from './Componnet/heroSec'
import CompanyLogo from './Componnet/CompanyLogo'
import PurposeSection from './Componnet/purposeSection'
import FeatureSection from './Componnet/featuresSection'
import SchedualSection from './Componnet/SchedualSection'
import MonaiterSection from './Componnet/MonaiterSection'
import PricingSection from './Componnet/PricingSection'
import ServicesSection from './Componnet/servicesSection'
import TestimonialSection from './Componnet/TestimonialSection'
function App() {

  return (
     <main className="relative min-h-screen overflow-x-hidden">
  <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
   <div className="overflow-hidden">
    <Navbar/>
    <Hero/>
   <CompanyLogo/>
   <PurposeSection/>
   <FeatureSection/>
   <SchedualSection/>
   <MonaiterSection/>
   <PricingSection/>
   <ServicesSection/>
   <TestimonialSection/>
      </div>
    </main>
   )
}

export default App
