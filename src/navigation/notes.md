 <div className="flex justify-between items-center px-2 py-4">
      <div className="flex items-center">
        <div className="relative">
          <button
            onClick={() => setMenu(!menu)}
            className="bg-slate-900 p-3 rounded-md text-white text-sm font-semibold">
              <i className="fa-solid fa-table-cells-large mr-2">

              </i>  Browser Category<i className="ml-1 fa-solid fa-angle-down"></i>
          </button>

          {menu && <NestedDropdown />}
        </div>


        import React from 'react'
import Dropdown from './Dropdown';

function NestedDropdown() {
    const[subMenu,setSubMenu]=useState();
    console.log(subMenu);
  return (
    <div className='relative'>
    <div className='w-50 p-1 rounded-md border border-gray-300 bg-gray-50 absolute  right-0 left-0'>
        {
menuData.map((item,index)=>(

    <div
    onMouseEnter={()=> setSubMenu(index)}
    key={index} 
    className=' flex  border-b-[1px] items-center hover:text-green-500 border-gray-300 justify-between cursor-pointer'>
        <p className='text-md font-semibold text-gray-600 hover:text-green-800 px-2 py-2 my-2'>
{item,text}
        </p>
<i className='fa-solid fa-chevron-right'></i>
    </div>
))}
    </div>
{subMenu ===0 ?(
    <DropdownMenu subData={foodData}/>
):subMenu ==1?(
    <DropdownMenu subData={cleanData} top="top-10"/>
):subMenu ==2?(
    <DropdownMenu subData={personalData}/>
):("")
)

const DropdownMenu = ((subData, tip)=>{
return(
    <div 
    className={`pt-1 absolute right-[-100] left-full z-10 rounded-md ${top} pr-1 bg-gray-50`}>
    {
        subData.map((item,index)=>(
            <div
            key={index} 
    className=' flex  border-b-[1px] items-center hover:text-green-500 border-gray-300 justify-between cursor-pointer'>
        <p className='text-md font-semibold text-gray-600 hover:text-green-800 px-2 py-2 my-2'>
{item,text}
        </p>
<i className='fa-solid fa-chevron-right'></i>
    </div>
))}
    </div>
);
};
const menuData = [
    {
        title: "food";
    },
];
export default NestedDropdown;
const slides =[
  {
      url:https://d91ztyz4qy326.cloudfront.net/storeking/25/conversions/slider_one-cover.png
  },
  {
     url:https://d91ztyz4qy326.cloudfront.net/storeking/27/conversions/slider_three-cover.png
  },
  {
     url:https://d91ztyz4qy326.cloudfront.net/storeking/26/conversions/slider_two-cover.png
  },
]
import React from 'react';
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden z-0"> {/* Lower z-index */}
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img src={s} alt={`Slide ${index}`} key={index} />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}

mongodb+srv://manorj433:27JUNE2003@cluster0.34sm47z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

REPL stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input.

mangodb://localhost:27017/Ordering-app
127.0.0.1.27017