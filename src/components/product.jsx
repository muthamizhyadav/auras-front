import React, { useState, useRef, useEffect } from "react";
import img3 from "../assets/image3.png";
import img2 from "../assets/specification.png";
import img5 from "../assets/relatedProdduccts.png";
import img4 from "../assets/relatedProdduccts2.png";
import img1 from "../assets/overview.jpeg";
import { FaArrowDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/logo.jpeg";
import product1 from "../assets/product1.pdf";
export function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const [showActiveContent, setShowActiveContent] = useState("Overview");
  const toggleContent = (content) => {
    setShowActiveContent(content);
  };

  return (
    <>
      
      <section ref={navbarRef}>
        <div className="w-full z-99">
          <div className="bg-black text-white  px-5 sm:px-10 md:px-20 flex justify-between">
            <div className="py-2 flex">
              <div className="flex items-center pr-2 sm:pr-10 border-r">
                <MdEmail className="text-white" />
                <p className="ml-1 hidden sm:block">
                  contact@auraslightings.com
                </p>
              </div>
              <div className="flex items-center ml-2">
                <TiLocation className="text-white" />
                <p className="ml-1 hidden sm:block">UAE</p>
              </div>
            </div>
            <div className="flex items-center">
              <RiFacebookBoxFill className="rounded-3xl icon" />
              <FaSquareTwitter className="icon mx-1" />
              <RiInstagramFill className="icon mx-1" />
              <FaLinkedin className="icon mx-1" />
              <IoLogoYoutube className="icon mx-1" />
            </div>
          </div>

          <div className=" xl:justify-around md:justify-between w-full py-1 md:px-5 xl:px-10 items-center bg-transparent hidden lg:flex">
            <div className="">
              <img
                src={logo}
                alt="auras logo"
                className="xl:ml-16 xl:w-[160px] w-28"
              />
            </div>
            <div className="flex ml-10 w-3/4 justify-evenly lg:text-xs xl:text-sm font-medium">
              <p className="capitalize hover:text-[#F2667C]">products</p>
              <p className="capitalize hover:text-[#F2667C]">lux edition</p>
              <p className="capitalize hover:text-[#F2667C]">
                commercial lights
              </p>
              <p className="capitalize hover:text-[#F2667C]">outdoor lights</p>
              <p className="capitalize hover:text-[#F2667C]">home decor</p>
              <p className="capitalize hover:text-[#F2667C]">about us</p>
              <p className="capitalize hover:text-[#F2667C]">blogs</p>
            </div>
            <div className="w-1/4  items-center justify-around xl:px-4 flex">
              <div className="capitalize  shadow-lg cursor-pointer text-[#F2667C] hover:bg-[#F2667C] hover:text-white xl:p-2 rounded">
                <p className=" lg:text-sm xl:text-base">contact us</p>
              </div>
              <div>
                <FiSearch className="text-[#F2667C] lg:text-xl xl:text-3xl" />
              </div>
              <div>
                <MdAccountCircle className="text-[#F2667C] lg:text-xl xl:text-3xl" />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between px-5 py-1 lg:hidden overflow-hidden">
          <div className="">
              <img
                src={logo}
                alt="auras logo"
                className="w-20"
              />
            </div>
            <div className="flex justify-center items-center gap-5">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-[#F2667C] focus:outline-none focus:bg-[#F2667C] focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div>
                <FiSearch className="text-[#F2667C] text-3xl" />
              </div>
              <div>
                <MdAccountCircle className="text-[#F2667C] text-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block transition duration-500 ease-in-out" : "hidden"
          } lg:hidden bg-pink-100 `}
        >
          <div className="px-2 pt-2 pb-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
              Products
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
              Lux Edition
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
             Commercial Lights
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
              Outdoor Lights
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
              Home Decor
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
              About Us
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            >
              Blogs
            </a>
            <button className="capitalize shadow-lg cursor-pointer font-medium text-[#F2667C] bg-white hover:bg-[#F2667C] hover:text-white px-4 py-1 rounded">Contact Us</button>
          </div>
          
        </div>
      </section>


      <section className="">
        <div className="font-int p-7">
          <div className="p-10 ">
            <p className="flex text-md font-bold tracking-wide">
              LED Downlights <FaChevronRight className="m-1" /> DL284c
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5 bg-[#F3F3F3] md:pl-14 pl-3 md:ml-0 ml-auto p-3 py-3">
            <div className="xl:w-[80%] w-fit h-full bg-white rounded-3xl shadow-2xl flex items-center">
              <img
                src={img3}
                alt=""
                className="w-full h-full rounded-xl "
              />
            </div>
            <div className=" ">
              <p className="text-3xl tracking-wider py-3 font-semibold text-justify border-[#F2667C] border-b-2">
                DL284 IP65 IK10 SMD Downlight
              </p>
              <div className="text-[14px] opacity-50 font-medium text-justify">
                <p className="mt-10">
                  DL284C SMD series downlight with traditional deep Specular
                  reflector which provides a perfect combination of high
                  lighting efficiency, comfortable lighting and low glare
                  design, without compromising on lighting performance (color
                  rendering and color uniformity).
                </p>
                <p className="mt-5">
                  ADC12 aluminum housing provides a great thermal management,
                  IP65 waterproof with high protection level, which offers a
                  wider application area.
                </p>
                <p className="mt-5">
                  CCT changeable available. It is with high transmittance PC,
                  the lamp cover is fixed with special anti-theft screws, so
                  that the lamp can be used in special places.The strong
                  structure design makes IP65 and IK10 high protection level.
                </p>
              </div>
              <a
                href={product1}
                download
                className="flex justify-center items-center  md:justify-start"
              >
                <button className=" flex md:justify-start justify-center items-center my-6 py-2 px-2 rounded bg-white shadow-md  shadow-black">
                  Specification File
                  <FaArrowDown className="text-[#F2667C] my-1 mx-2 " />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <div className="bg-slate-100 w-full p-7">
        {/* <div className='lg:w-[600px] md:w-[350px] sm:w-[300px] w-[300px]  h-[200px] bg-[#FF9315] top-0 absolute right-0 text-center text-white lg:pt-8 pt-4 lg:text-3xl md:text-base text-xs font-bold sm:p-4 p-1'>Customer Services</div> */}
        <div className="xl:ml-20 lg:ml-10 md:ml-5 ml-0 pt-10  drop-shadow-2xl">
          <div className="flex md:flex-row flex-col xl:gap-10 gap-1 p-4 bg-white w-fit rounded-t-md">
            <button
              onClick={() => toggleContent("Overview")}
              className={`focus:outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "Overview"
                  ? "text-white border-2 bg-[#F2667C] md:px-5 p-1 px-2 rounded-md"
                  : "bg-white drop-shadow-2xl text-black p-1 px-5 rounded-md"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => toggleContent("Specifications")}
              className={`focus: outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "Specifications"
                  ? "text-white border-2 bg-[#F2667C] p-1 md:px-5 px-2 rounded-md"
                  : "bg-white drop-shadow-2xl text-black p-1 px-5 rounded-md"
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => toggleContent("Related Products")}
              className={`focus: outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "Related Products"
                  ? "text-white border-2 bg-[#F2667C] p-1 md:px-5 px-5 rounded-md"
                  : "bg-white drop-shadow-2xl text-black p-1 px-5 rounded-md"
              }`}
            >
              Related Products
            </button>
          </div>
          {showActiveContent === "Overview" && (
            <div className="bg-white p-10  flex justify-center items-center h-96">
              <img src={img1} alt="" className="w-96 " />
            </div>
          )}
          {showActiveContent === "Specifications" && (
            <div className="bg-white md:p-10 p-5 py-10 flex justify-center items-center h-96">
              <img
                src={img2}
                alt=""
                className="w-96 "
              />
            </div>
          )}
          {showActiveContent === "Related Products" && (
            <div className="bg-white p-10 md:gap-10 gap-5 flex justify-center items-center py-10 h-96">
              <img
                src={img5}
                alt=""
                className="md:w-96 w-1/2"
              />
              <img
                src={img4}
                alt=""
                className="md:w-96 w-1/2"
              />
            </div>
          )}
        </div>
      </div>

      
      <section>
        <div className="form flex lg:flex-row flex-col justify-center items-center  lg:flex-nowrap sm:py-10 sm:px-20 px-5 gap-5">
          <div className="">
            <p className="text-3xl sm:text-5xl font-semibold ">
              Keen to explore further?
            </p>
            <p className="py-5 text-xs sm:text-sm ">
              If you are interested in our products and would like to receive
              further information, please fill out the form below to send us
              your request. or mail to info@auraslighting.com directly.
            </p>
          </div>
          <div className="form-content w-full sm:p-5 p-3  rounded-3xl shadow-2xl">
            <div className="flex flex-col items-center justify-evenly ">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="bg-gray-200 border hover:border-blue-400 rounded-lg p-3 my-1 w-full"
                />
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Maiil"
                  className="bg-gray-200 border hover:border-blue-400 rounded-lg p-3 my-1 w-full"
                />
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="text"
                  className="bg-gray-200 border hover:border-blue-400 rounded-lg p-3 my-1 w-full"
                />
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="text"
                  className="bg-gray-200 border hover:border-blue-400 rounded-lg p-3 my-1 w-full"
                />
                <textarea
                  name="messege"
                  id="messege"
                  rows="5"
                  className="bg-gray-200 p-2 my-1 rounded-lg w-full"
                  placeholder="Messege"
                ></textarea>
              

              
            </div>
            <div className="flex justify-end">
            <button
                type="submit"
                className=" bg-white p-3 px-8 drop-shadow-xl  rounded-lg my-2  font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="lg:pt-10">
        <div className="bg-black text-white p-10">
          <div className="capitalize flex flex-wrap justify-center p-1">
            <p className="pr-2 m-1 border-r-2 ">
              about&nbsp;auras&nbsp;lighting
            </p>
            <p className="pr-2 m-1 border-r-2 ">products</p>
            <p className="pr-2 m-1 border-r-2 ">contact</p>
            <p className="pr-2 m-1 border-r-2 ">privacy&nbsp;policy</p>
            <p className="pr-2 m-1">terms&nbsp;of&nbsp;use</p>
          </div>
          <div className="text-center">
            <p>Powered by WHY Global Services</p>
          </div>
        </div>
      </section>
    </>
  );
}
