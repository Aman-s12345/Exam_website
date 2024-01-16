import { useState, useEffect } from "react";
import data from "../data";
import data1 from "../data_1";
import data2 from "../data2";

import { CartItem } from "../components/CartItem";
import Botton from "../components/Botton";


const Home = () => {




  return (
    <div className="flex justify-center pt-[5rem]  items-center bg-[#F8F9FA]">


      <div className="flex flex-col w-[1140px] mx-auto  ">
        <div className="main_box  flex flex-row justify-between items-center  mx-auto mt-10 ">

          <div className="flex  items-center w-[20px] h-[37px] bg-slate-300">
            <img src="../ExpandArrow.png" className="Arrow_home"></img>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="mx-6">
              <img src="../image12.png"></img>
            </div>
            <div className="mx-6">
              <img src="gateas.png" className="w-[120px] h-[100px]"></img>
            </div>
          </div>
          <div className="flex items-center w-[20px] h-[37px] bg-slate-300">
            <img src="../ExpandArrow.png" className="Arrow_home_1"></img>
          </div>

        </div>
        <div className="flex flex-row justify-between items-center my-4">
          <div className="home_recent">Recommended exams</div>
          <div className="home_see">
            See All
          </div>

        </div>

        <div className="flex flex-row overflow-y-scroll  gap-10">
          {
            data.map((data1) => {
              return <CartItem key={data1.id} {...data1}></CartItem>
            })
          }
        </div>

        <div className="flex flex-row justify-between items-center my-4">
          <div className="home_recent">Recent exams</div>
          <div className="home_see">
            See All
          </div>

        </div>

        <div className="flex flex-row gap-3 mb-5">
          {
            data1.map((data_1) => {
              return <Botton key={data_1.id} {...data_1}></Botton>
            })
          }
        </div>

        <div className="flex flex-row overflow-y-scroll  gap-10 mb-4">
          {
            data2.map((data2) => {
              return <CartItem key={data2.id} {...data2}></CartItem>
            })
          }
        </div>

  
        
        







      </div>
    </div>
  );
};

export default Home;
