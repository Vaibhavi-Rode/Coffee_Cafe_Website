import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/navbars/Navbar';
import Home from './components/Home/Home';
import Services from './components/services/Services';
import Banner from './components/banner/Banner';
import AppBanner from './components/banner/AppBanner';


const App = () => {
  useEffect(()=> {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,

      }
    )
  })
  return(
    <div className="overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <AppBanner/>
       </div>

  )
}

export default App;