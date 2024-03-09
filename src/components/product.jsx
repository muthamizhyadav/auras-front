import React, { useState, useRef, useEffect } from "react";
import linear1 from "../assets/light.jpg";
import linear2 from "../assets/linearLight.jpg";
import linear3 from "../assets/linearLIght2.jpg";
import linear4 from "../assets/linearLight3.jpg";
import linear5 from "../assets/LinearLight4.jpg";
import linear6 from "../assets/linearLight5.jpg";
import img2 from "../assets/specification.png";
import img5 from "../assets/relatedProdduccts.png";
import img4 from "../assets/relatedProdduccts2.png";
import img1 from "../assets/light2.jpg";
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
import logo from "../assets/logo.png";
import product1 from "../assets/product1.pdf";
import line1 from "../assets/line1.png";

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

  const bgimages = [linear1, linear2, linear3, linear4, linear5, linear6];

  const [bgimage, Setbgimage] = React.useState(bgimages);
  const [index, SetIndex] = React.useState(0);

  const changeBgimages = () => {
    SetIndex((prev) => (prev + 1) % bgimage.length);
    document.querySelector('.h-[379px] img').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('.h-[379px] img').style.opacity = 1;
    }, 100);
  };
  

  React.useEffect(() => {
    const interval = setInterval(changeBgimages, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className="font capitalize">
      <section ref={navbarRef}>
        <div className="w-full z-99">
          <div className="bg-black text-white  px-5 sm:px-10 md:px-20 flex justify-between">
            <div className="py-2 flex">
              <div className="flex items-center pr-2 sm:pr-10 border-r">
                <MdEmail className="text-white" />
                <p className="ml-1 hidden sm:block cursor-pointer">
                  contact@auraslightings.com
                </p>
              </div>
              <div className="flex items-center ml-2">
                <TiLocation className="text-white" />
                <p className="ml-1 hidden sm:block cursor-pointer">UAE</p>
              </div>
            </div>
            <div className="flex items-center">
              <RiFacebookBoxFill className="rounded-3xl icon cursor-pointer" />
              <FaSquareTwitter className="icon mx-1 cursor-pointer" />
              <RiInstagramFill className="icon mx-1 cursor-pointer" />
              <FaLinkedin className="icon mx-1 cursor-pointer" />
              <IoLogoYoutube className="icon mx-1 cursor-pointer" />
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
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                products
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                lux edition
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                commercial lights
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                outdoor lights
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                home decor
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                about us
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                blogs
              </p>
            </div>
            <div className="w-1/4  items-center justify-around xl:px-4 flex">
              <div className="capitalize  shadow-lg cursor-pointer text-[#F2667C] hover:bg-[#F2667C] hover:text-white px-4 py-1 rounded">
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
              <img src={logo} alt="auras logo" className="w-20" />
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
            <button className="capitalize shadow-lg cursor-pointer font-medium text-[#F2667C] bg-white hover:bg-[#F2667C] hover:text-white px-4 py-1 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-full md:flex hidden">
          <div className="w-[15%]"></div>
          <div className="w-[85%]">
            <p className="flex font-medium  text-black py-5">
              Linear Light &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
              L8989-A45
            </p>
          </div>
        </div>

        <section className="md:relative">
          <div className="md:h-[500px] w-full md:flex hidden">
            <div className="w-[15%] bg-white"></div>
            <div className="w-[85%] bg-[#F3F3F3]"></div>
          </div>
          <div className="lg:px-0 md:px-5 xs:px-0 px-5 md:h-[482px] pb-20 md:pb-0 bg-[#F3F3F3] md:bg-inherit w-full flex md:flex-row flex-col justify-center xl:justify-start xl:pl-[10%] items-center md:gap-3 gap-5  md:py-0 py-5 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:top-[45%] lg:top-1/2 md:left-1/2">
            <div className="h-[379px] shadow-2xl drop-shadow-lg rounded-xl">
              <img
                src={`${bgimage[index]}`}
                alt=""
                className="sm:w-[479px] w-full h-full rounded-xl transition-opacity duration-500"
                style={{opacity: 1}}
              />
            </div>
            <div className="h-[387px] sm:w-[500px] lg:w-1/2 xl:w-[60%] xs:w-96 w-full pl-5 sm:pl-0">
              <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-24 md:pl-10  border-b border-[#F2667C] sm:border-none">
                L8989-A45 IP66 IK10 4FT linkable waterproof LED linear light
              </p>
              <img src={line1} alt="" className=" pt-1 sm:block hidden" />
              <div className="text-[14px] text-[#666666] lg:pl-24 md:pl-10  py-3">
                <p className="">IP66 protection class.</p>
                <p className="">Non-dim, support 0-10V, DALI, Triac dimming solutions.</p>
                <p className="">Aluminium 6063-T5, good heat radiation with long lifespan.</p>
                <p>Light source adopts LM-80 certified LED.</p>
                <p>Adopt UL Class P certified power supply.</p>
                <p>Long lifespan, &gt;30000 hours (L70B10). </p>
                <p>High lighting efficiency, save energy.</p>
                <p>Environment humidity 40-70% RH.</p>
                <p>Operating Term: -20°C - + 45°C. </p>
                <p>Storage Term: -40°C - + 60°C. </p>
                <p>Degradable packaging.</p>
                <p>PF &lte; 0.9 .</p>
              </div>
              <a
                href={product1}
                download
                className="flex justify-center items-center  md:justify-start md:pl-24"
              >
                <button className=" flex md:justify-start justify-center items-center mt-5 py-2 px-2 rounded bg-white shadow-md  shadow-black">
                  Specification File
                  <FaArrowDown className="text-[#F2667C] my-1 mx-2 " />
                </button>
              </a>
            </div>
          </div>
        </section>
      </section>

      <div className="bg-slate-100 w-full">
        <div className="xl:ml-20 lg:ml-10 md:ml-5 ml-0 pt-10  drop-shadow-2xl">
          <div className="flex md:flex-row flex-col xl:gap-10 gap-1 p-4 bg-white w-fit rounded-t-md">
            <button
              onClick={() => toggleContent("Overview")}
              className={`focus:outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "Overview"
                  ? "text-white border-2 bg-[#F2667C] md:px-5 p-1 px-2 rounded-md"
                  : "bg-white drop-shadow-2xl hover:bg-[#F2667C] hover:text-white text-black p-1 px-5 rounded-md"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => toggleContent("Specifications")}
              className={`focus: outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "Specifications"
                  ? "text-white border-2 bg-[#F2667C] p-1 md:px-5 px-2 rounded-md"
                  : "bg-white drop-shadow-2xl hover:bg-[#F2667C] hover:text-white text-black p-1 px-5 rounded-md"
              }`}
            >
              Specifications
            </button>
          </div>
          {showActiveContent === "Overview" && (
            <div className="bg-white p-10  flex justify-center items-center h-96">
              <img src={img1} alt="" className="md:w-[700px] w-full " />
            </div>
          )}
          {showActiveContent === "Specifications" && (
            <div className="bg-white md:p-10 p-5 py-10 flex justify-center items-center h-96 overflow-scroll">
              <div className="w-full border border-black sm:mt-14 mt-96">
                <div className="flex border-b border-black">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    Item NO.
                  </p>
                  <p className="bg-white w-[70%] pl-5 "> L8989-A45</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">Size</p>
                  <p className="bg-white w-[70%] pl-5 ">
                    1237mm(4.06ft) x 91mm(0.30ft) x 91mm(0.30ft)
                  </p>
                </div>
                <div className="flex border-b border-black">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    Power
                  </p>
                  <p className="bg-white w-[70%] pl-5 ">45W (11.3w/ft)</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">Lumen</p>
                  <p className="bg-white w-[70%] pl-5 ">
                    4860~5150lm (1215~1287lm/ft)
                  </p>
                </div>
                <div className="flex border-b border-black">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    Cover
                  </p>
                  <p className="bg-white w-[70%] pl-5 ">PDM (98°)</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">CRI</p>
                  <p className="bg-white w-[70%] pl-5 ">85+ / 90+</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    CCT
                  </p>
                  <p className="bg-white w-[70%] pl-5 ">
                    3000K / 4000K / 6000K (3500K / 5000K)
                  </p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">PF</p>
                  <p className="bg-white w-[70%] pl-5 "> ≥0.9</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    IP grade
                  </p>
                  <p className="bg-white w-[70%] pl-5 "> IP 66</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">
                    Working Voltage
                  </p>
                  <p className="bg-white w-[70%] pl-5 ">
                    {" "}
                    AC100~277V / 50~60Hz
                  </p>
                </div>
                <div className="flex border-b border-black">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    Max Input Current
                  </p>
                  <p className="bg-white w-[70%] pl-5 "> 6A</p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">
                    Installation way
                  </p>
                  <p className="bg-white w-[70%] pl-5 ">
                    {" "}
                    Pendant / Ceiling mounted / Recessed / Wall mounted
                  </p>
                </div>
                <div className="flex border-b border-black">
                  <p className=" bg-gray-300 border-r border-black w-[30%] pl-5 ">
                    Profile color
                  </p>
                  <p className="bg-white w-[70%] pl-5 ">
                    {" "}
                    Silvery (ral9006) / Black (ral9004) / White (ral9003)
                  </p>
                </div>
                <div className="flex border-b border-black">
                  <p className="border-r border-black w-[30%] pl-5 ">
                    Operating temperature
                  </p>
                  <p className="bg-white w-[70%] pl-5 "> -20℃ ~ + 45℃ </p>
                </div>
                <div className="flex">
                  <p className="bg-gray-300 border-r border-black w-[30%] pl-5">
                    Storage temperature
                  </p>
                  <p className="bg-white w-[70%] pl-5"> -40℃ ~ +60℃ </p>
                </div>
              </div>
            </div>
          )}
          {showActiveContent === "Related Products" && (
            <div className="bg-white p-10 md:gap-10 gap-5 flex justify-center items-center py-10 h-96">
              <img src={img5} alt="" className="md:w-96 w-1/2" />
              <img src={img4} alt="" className="md:w-96 w-1/2" />
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
                placeholder="Mail"
                className="bg-gray-200 border hover:border-blue-400 rounded-lg p-3 my-1 w-full"
              />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Company Name"
                className="bg-gray-200 border hover:border-blue-400 rounded-lg p-3 my-1 w-full"
              />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Company Type"
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
            <p className="pr-2 m-1  cursor-pointer">HOME </p>
            <p className="m-1 pr-2 ">|</p>
            <p className="pr-2 m-1  cursor-pointer">LINEAR LIGHT</p>
            <p className="m-1 pr-2">|</p>
            <p className="pr-2 m-1  cursor-pointer">LED STRIP</p>
            <p className="m-1 pr-2">|</p>
            <p className="pr-2 m-1  cursor-pointer">LED NEON LIGHT </p>
            <p className="m-1 pr-2">|</p>
            <p className="pr-2 m-1  cursor-pointer">LED SENSOR </p>
            <p className="m-1 pr-2">|</p>
            <p className="pr-2 m-1  cursor-pointer">LED SENSOR </p>
            <p className="m-1 pr-2">|</p>
            <p className="pr-2 m-1  cursor-pointer">RECRUIT</p>
            <p className="m-1 pr-2">|</p>
            <p className="pr-2 m-1 cursor-pointer">CONTACT US </p>
          </div>
          <div className="text-center">
            <p>Powered by WHY Global Services</p>
          </div>
        </div>
      </section>
    </article>
  );
}
