import React from "react";
import auraslight from "../../assets/aurasLight1.png";
import line from "../../assets/line.png";
import line2 from "../../assets/line2.png";
import tl90 from "../../assets/TL90-LED-Track-light1.png";
import line3 from "../../assets/line3.png";
import back from "../../assets/home1.png";
import vector from "../../assets/vec.png";
import vector2 from "../../assets/img2.png";
import vector3 from "../../assets/img3.png";
import Video from "./Video";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        {/* banner */}
        <div className="bg-banner h-screen w-full bg-cover bg-no-repeat flex flex-col justify-center ">
          <div className="flex flex-row justify-center items-center gap-5">
            <div className="bg-white bg-opacity-50 w-[70%] h-[110px] flex flex-col justify-center items-center ">
              <p className="text-white  shadow-black md:text-4xl px-2 sm:text-xl text-sm drop-shadow-lg ">
                Lighting the Way to Inspired Living
              </p>
            </div>
            <div className="bg-white bg-opacity-50 w-[30%] h-[110px]"></div>
          </div>
        </div>
        {/* second secction */}
        <div className="bg-gradient-to-r from-black to-[#666666]">
          <div className="flex lg:flex-row flex-col lg:items-start  items-center justify-center lg:relative">
            <hr className="w-16 h-[1px] bg-[#666666] mt-36 lg:block hidden" />
            <div className="lg:w-[50%] w-full py-10 p-5 lg:pt-20 pt-10">
              <div className="flex flex-row items-baseline lg:ml-10">
                <p className="text-white sm:text-base text-sm">Unveiling Our</p>
                <p className="text-primaryColor xs:text-6xl text-3xl">Lux </p>
              </div>
              <div className="lg:block hidden w-full h-full">
                <img src={line2} alt="" className="ml-7 w-full h-full" />
              </div>
              <div className="lg:hidden block">
                <hr className="w-full h-0.5 bg-white mt-2" />
              </div>
              <div className="lg:absolute top-36 left-56 lg:mt-0 mt-2 lg:pl-0 pl-[90px]">
                <p className="text-primaryColor xs:text-6xl text-3xl">
                  Edition
                </p>
              </div>
              <div className="lg:absolute top-1/2 lg:-mt-5 mt-5 lg:text-start text-justify lg:ml-10 text-white text-sm font-light lg:w-[33%] w-full space-y-5">
                <p className="">
                  Experience sophistication with Our Lux Edition. Elevate your
                  space with opulent chandeliers, exquisite table lamps, and
                  luxurious decor pieces. Indulge in timeless elegance.
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
          <div className="lg:hidden block p-5">
            <h1 className=" font-medium text-2xl">New Arrivals</h1>
            <div className="">
              <hr className="w-1/2 h-0.5 bg-primaryColor " />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
            <div className="">
              <div className="lg:block hidden">
                <h1 className="pl-28 font-medium text-4xl">New Arrivals</h1>
                <div className="pl-36">
                  <hr className="w-full h-0.5 bg-primaryColor " />
                </div>
              </div>
              <div className="lg:p-10 lg:ml-5 lg:pt-28 flex p-5 flex-col items-start justify-center gap-7 ">
                <p className="md:text-4xl sm:text-2xl xs:text-xl text-lg font-semibold lg:text-start text-center">
                  TL90 Modular Design Track Light
                </p>
                <Link to="/home/products/allproduct/product/New%20Arrival">
                  <button className="w-fit drop-shadow-2xl mx-auto font-medium lg:mx-0 text-xs rounded-md px-7 bg-white shadow-xl  p-3 hover:bg-primaryColor hover:text-white">
                    Browse More
                  </button>
                </Link>
              </div>
            </div>
            <div className="sm:w-[35%]  lg:pt-0">
              <img src={tl90} alt="" />
            </div>
          </div>
        </div>
        {/* 4th section */}
        <div className="p-5 my-5 flex flex-col gap-5 lg:p-0">
          <div className="relative ">
            <div className=" relative w-full lg:h-16 h-fit flex lg:justify-end">
              <div className="absolute w-[47%] lg:flex hidden bottom-0 left-0">
                <img src={line3} alt="" className="w-full" />
              </div>
              <div className="flex lg:flex-row flex-col lg:w-[60%] w-full  relative lg:gap-5 gap-2 items-start lg:items-center ">
                <h1 className="lg:text-3xl text-2xl font-semibold">
                  Applications
                </h1>
                <hr className="w-[50%] h-0.5 bg-primaryColor" />
                <button className="bg-white shadow-xl  drop-shadow-xl p-3 px-7 font-medium text-xs lg:flex hidden rounded-md hover:bg-primaryColor hover:text-white">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="lg:text-center text-justify text-sm lg:w-[75%] lg:px-5 mx-auto py-5">
              AURAS Lighting stands at the forefront of LED commercial lighting,
              renowned for its expertise in pioneering LED lighting solutions
              through cutting-edge development, precision manufacturing, and
              effective application.
            </p>
          </div>

          <div className="grid lg:grid-cols-3  2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-10 justify-items-center lg:px-10 justify-center items-center">
            <div className="xss:w-[300px] w-[95%] relative  h-[350px]">
              <div
                style={{ backgroundImage: `url(${vector})` }}
                className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
              >
                <div className="relative w-full h-full">
                  <p className="absolute top-[40%] left-10 -translate-y-1/2 text-primaryColor w-full flex  items-center font-semibold">
                    Commercial Lights
                  </p>
                </div>
              </div>
              <img src={back} className="w-full h-full rounded-xl"></img>
            </div>
            <div className="xss:w-[300px] w-[95%] relative  h-[350px]">
              <div
                style={{ backgroundImage: `url(${vector})` }}
                className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
              >
                <div className="relative w-full h-full">
                  <p className="absolute w-full  flex items-center top-[40%] left-10  -translate-y-1/2 text-primaryColor font-semibold">
                    Outdoor Lights
                  </p>
                </div>
              </div>
              <img src={vector2} className="w-full h-full rounded-xl"></img>
            </div>
            <div className="xss:w-[300px] w-[95%] relative  h-[350px]">
              <div
                style={{ backgroundImage: `url(${vector})` }}
                className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
              >
                <div className="relative w-full h-full">
                  <p className="absolute flex w-full  items-center top-[40%] left-10 -translate-y-1/2 text-primaryColor font-semibold">
                    Home Decor
                  </p>
                </div>
              </div>
              <img src={vector3} className="w-full h-full rounded-xl"></img>
            </div>
          </div>
        </div>
        <div className="py-5">
          <button className="bg-white shadow-xl  mx-auto drop-shadow-xl  px-2 py-2 text-sm lg:hidden flex rounded-md">
            View More
          </button>
        </div>
      </div>
      <Video />
      <section>
        <div className="bg-Formbg h-full bg-cover form flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 md:px-24 px-5 lg:gap-10 gap-3">
          <div className="">
            <p className="text-3xl sm:text-5xl font-medium">
              Keen to explore further?
            </p>
            <p className="py-5 text-[13px] md:text-start text-justify">
              If you are interested in our products and would like to receive
              further information, please fill out the form below to send us
              your request. or mail to info@auraslighting.com directly.
            </p>
          </div>
          <div className="form-content lg:w-[70%] w-full sm:p-5 p-3  rounded-3xl shadow-2xl">
            <div className="flex flex-col items-center justify-evenly ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="bg-gray-200 border border-[#0E82B4]  rounded-lg p-3 my-1 w-full"
              />
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="E-mail"
                className="bg-gray-200 border border-[#0E82B4]  rounded-lg p-3 my-1 w-full"
              />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Company Name"
                className="bg-gray-200 border border-[#0E82B4]  rounded-lg p-3 my-1 w-full"
              />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Company Type"
                className="bg-gray-200 border border-[#0E82B4]  rounded-lg p-3 my-1 w-full"
              />
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-gray-200 p-2 my-1 rounded-lg w-full border border-[#0E82B4]"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-end mt-2">
              <div className="bg-white rounded-lg drop-shadow-2xl">
                <button type="submit" className=" px-8   my-2  font-medium">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
