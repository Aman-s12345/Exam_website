import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Footer } from "./components/Footer";
import { Route } from "react-router-dom";
import Home from "./pages/Home"

import {Aboutus } from "./pages/Aboutus";
import { Contactus } from "./pages/Contactus";
import {FAQ} from "./pages/FAQ";
import { Result } from "./pages/Result";


const App = () => {
  return (
  <div>
       
        <div className="bg-white shadow-md  bg-opacity-25 h-auto ">
          <Navbar />
        </div>
       
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Result" element={<Result/>} />
          <Route path="/FAQ" element={<FAQ/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Contactus" element={<Contactus/>} />
          
        </Routes>

       
        
        <div className=" flex mx-0 justify-center h-[150px]  border-collapse shadow-md bg-opacity-25 pt-5">
          <Footer/>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
        <div className="w-3/4 h-1 bg-gray-300 bg-opacity-32 "> </div>
        <div className="w-3/4 text_last ">All trademarks are the property of their respective owners  </div>
        <div className="w-3/4 text_last pb-5">All rights reserved © 2024 FormEase </div>
        
        </div>
       
  </div>)
};

export default App;
