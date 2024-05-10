import React from "react";
import auraslight from "../../assets/aurasLight1.png";
import line from "../../assets/line.png";
import line2 from "../../assets/line2.png";
import tl90 from "../../assets/TL90-LED-Track-light1.png";
import line3 from "../../assets/line3.png";

const Homepage = () => {
  return (
    <>
      <div>
        {/* banner */}
        <div className="bg-banner h-screen w-full bg-cover bg-no-repeat flex flex-col justify-center ">
          <div className="flex flex-row justify-center items-center gap-5">
            <div className="bg-white bg-opacity-50 w-[70%] h-[110px] flex flex-col justify-center items-center ">
              <p className="text-white  shadow-black md:text-4xl xs:text-xl text-sm">
                Lighting the Way to Inspired Living
              </p>
            </div>
            <div className="bg-white bg-opacity-50 w-[30%] h-[110px]"></div>
          </div>
        </div>
        {/* second secction */}
        <div className="bg-gradient-to-r from-black to-[#666666]">
          <div className="flex lg:flex-row flex-col lg:items-start  items-center lg:relative">
            <hr className="w-16 h-[1px] bg-[#666666] mt-36 lg:block hidden" />
            <div className="lg:w-[50%] w-full py-10 p-5 lg:pt-20 pt-10">
              <div className="flex flex-row items-baseline lg:ml-10">
                <p className="text-white">Unveiling Our</p>
                <p className="text-primaryColor xs:text-6xl text-3xl">Lux </p>
              </div>
              <div className="lg:block hidden">
                <img src={line2} alt="" className="ml-7" />
              </div>
              <div className="lg:hidden block">
                <hr className="w-full h-0.5 bg-white mt-2" />
              </div>
              <div className="lg:absolute top-36 left-56 lg:mt-0 mt-2 lg:pl-0 pl-24">
                <p className="text-primaryColor xs:text-6xl text-3xl">
                  Edition
                </p>
              </div>
              <div className="lg:absolute top-1/2 lg:-mt-5 mt-5 lg:text-start text-justify lg:ml-10 text-white text-sm font-light lg:w-[33%] w-full space-y-5">
                <p className="">
                  Experience sophistication with Our Lux Edition. Elevate your
                  space with opulent chandeliers, exquisite table lamps, and
                  luxurious décor pieces. Indulge in timeless elegance.
                </p>
                <p>
                  From opulent chandeliers that cast a mesmerizing glow to
                  exquisite table lamps that add a touch of glamour to any room,
                  each piece is crafted to perfection. Indulge in the richness
                  of materials and impeccable finishes that define luxury
                  living.
                </p>
              </div>
            </div>
            <div className="sm:w-[50%]  flex lg:py-16 lg:flex-row  flex-col justify-center lg:p-0 p-10">
              <img src={auraslight} alt="" className="" />
              <img
                src={line}
                alt=""
                className="h-[50%] w-full overflow-hidden lg:block hidden"
              />
            </div>
          </div>
        </div>

        {/* third section */}
        <div>
          <div className="lg:hidden block p-10">
            <h1 className=" font-medium text-2xl">New Arrivals</h1>
            <div className="">
              <hr className="sm:w-1/2 w-full h-0.5 bg-primaryColor " />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className="p-10">
              <div className="lg:block hidden">
                <h1 className="pl-28 font-medium text-4xl">New Arrivals</h1>
                <div className="pl-36">
                  <hr className="w-1/3 h-0.5 bg-primaryColor " />
                </div>
              </div>
              <div className="lg:p-10 lg:pt-28 flex flex-col items-center justify-center gap-7 ">
                <p className="md:text-4xl text-lg font-semibold lg:text-start text-center">
                  TL90 Modular Design Track Light
                </p>
                <button className="w-fit drop-shadow-2xl rounded-md px-4 bg-white shadow-xl  p-2">
                  Browse More
                </button>
              </div>
            </div>
            <div className="sm:w-[35%] pt-10 lg:pt-0">
              <img src={tl90} alt="" />
            </div>
          </div>
        </div>
        {/* 4th section */}
        <div className="p-10">
          <div className="relative">
            <div className="w-[50%]">
              <img src={line3} alt="" />
            </div>
            <div className="absolute -top-7 -ml-20 left-1/2 w-[50%]">
              <div className="flex flex-row justify-center items-center gap-5">
                <h1 className="text-3xl">Applications</h1>
                <hr className="w-full h-0.5 bg-primaryColor" />
                <button className="bg-white shadow-xl  drop-shadow-xl w-60 p-2 rounded-md">View More</button>
              </div>
              
            </div>
          </div>
          <div>
            <p className="text-center pt-5">AURAS Lighting stands at the forefront of LED commercial lighting, renowned for its expertise in pioneering LED lighting solutions through cutting-edge development, precision manufacturing, and effective application.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
