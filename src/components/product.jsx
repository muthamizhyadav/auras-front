import React, { useState, useRef, useEffect } from "react";
import DataTable from 'react-data-table-component';
import img3 from "../assets/light.jpg";
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

  // const [showActiveContent, setShowActiveContent] = useState("Overview");
  // const toggleContent = (content) => {
  //   setShowActiveContent(content);
  // };
  const Specification = [

    { title: "", name: "Size", spec1: "1237mm(4.06ft) x 91mm(0.30ft) x 91mm(0.30ft)", datas: "1237mm (4.06ft) x 91mm (0.30ft) x 91mm (0.30ft)", spec2: "L2456mm (4.06ft) x 91mm (0.30ft) x 91mm (0.30ft)" },
    { title: "L8989-A45", name: "Power", spec1: "68W (11.3w/ft)", datas: "45W (11.3w/ft)", spec2: "45W (11.3w/ft)" },
    { title: "L8989-A45S", name: "Lumen", spec1: "4860 ~ 5150lm (1215 ~ 1287lm/ft)", datas: "4860 ~ 5150lm (1215 ~ 1287lm/ft)", spec2: "9710~10300LM(1215~1287LM/fit)" },
    { title: "L8989-A68", name: "Cover", datas: "PDM (98°)" },
    { title: "L8989-A68S", name: "CRI", datas: "85+ / 90+" },
    { title: "L8989-A90", name: "CCT", datas: " 3000K / 4000K / 6000K (3500K / 5000K)" },
    { title: "L8989-A90S", name: "IP grade", datas: "IP 66" },
    { name: "Working Voltage", datas: "AC100 ~ 277V / 50~60Hz" },
    { name: "Max Input Current", datas: "6A" },
    { name: "Profile color", datas: "Silvery (ral9006) / Black (ral9004) / White (ral9003)" },
  ]
  const columns = [
    {
      name: <h1 className="text-black"></h1>,
      selector: (row) => row.name
    },
    {
      name: <h1 className="text-black">L8989-A45</h1>,
      selector: (row) => row.spec1

    },

    {
      name: <h1 className="text-black">L8989-A45S</h1>,
      selector: (row) => row.spec1
    },
    {
      name: <h1 className="text-black">L8989-A68</h1>,
      selector: (row) => row.datas
    },
    {
      name: <h1 className="text-black">L8989-A68S</h1>,
      selector: (row) => row.datas
    },
    {
      name: <h1 className="text-black">L8989-A90</h1>,
      selector: (row) => row.spec2
    },
    {
      name: <h1 className="text-black">L8989-A90S</h1>,
      selector: (row) => row.spec2
    },
  ]
  const customStyles = {
    tr: {
      style: {
        borderBottom: "1px solid #ddd",
      }
    },
    rows: {
      style: {
        minHeight: "25px", // override the row height
        minWidth: "800px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "",
        color: "#fff",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        paddingTop: "10px",
        width: "10px",
        height: "0px",
        color: "#364353",
      },
    },
  };
  const customRowRender = (row, rowIndex, handleClick) => (
    <React.Fragment key={rowIndex}>
      <tr>
        <td>{row.name}</td>
        <td colSpan={2}>{row.spec1}</td>
        <td>{row.datas}</td>
        <td>{row.datas}</td>
        <td colSpan={2}>{row.spec2}</td>
      </tr>
    </React.Fragment>
  )
  return (
    <>
      <section ref={navbarRef} className="">
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
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">products</p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">lux edition</p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">
                commercial lights
              </p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">outdoor lights</p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">home decor</p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">about us</p>
              <p className="capitalize hover:text-[#F2667C] cursor-pointer">blogs</p>
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
          className={`${isOpen ? "block transition duration-500 ease-in-out" : "hidden"
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
        <div className="font-int p-7">
          <div className=" md:pl-32 pl-5">
            <p className="flex text-md font-bold tracking-wide">
              Linear Light <FaChevronRight className="m-1" /> L8989-A45
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5 bg-[#F3F3F3] md:pl-14 pl-3 md:ml-0 ml-auto p-3 ">
            <div className="w-[60%] h-[90%] bg-white rounded-3xl shadow-2xl">
              <img src={img3} alt="" className=" rounded-xl " />
            </div>
            <div className=" ">
              <p className="text-2xl py-3 font-semibold text-justify border-[#F2667C] border-b-2">
                L8989-A45 IP66 IK10 4FT linkable waterproof LED linear light,
                ETL, FCC, TUV CE, CB, CCC certficates
              </p>
              <div className="text-[14px] opacity-50 font-medium text-justify leading-7">
                <p className="">Model L8989-A45</p>
                <p className="">Power 45W</p>
                <p className="">Operating temperature -30℃~+45℃</p>
                <p>Storage temperature -40℃~+60℃</p>
                <p>Surface color Silvery, White, Black</p>
                <p>Cover type PC cover</p>
                <p>Standard length 1237*91*91mm</p>
                <p>Application Indoor/Outdoor</p>
                <p>Installation way Pendant, Surface mounted</p>
                <p>Protection grade IP66</p>
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

      <div className="bg-slate-100 w-full lg:px-56 md:px-32 px-5 rounded-t-xl pt-5">
        <div className=" shadow-2xl drop-shadow-2xl ">
          <div className="bg-white w-fit px-8 py-5 rounded-t-md shadow-2xl ">
            <button
              className="focus: outline-none font-medium sm:text-base text-xs 
                 text-white border-2 bg-[#F2667C] p-1 px-5 
                 drop-shadow-2xl   rounded-md">
              Specifications
            </button>
          </div>
          <div className="bg-white flex flex-col justify-center items-center rounded-b-xl p-10 overflow-scroll ">
            <table style={customStyles} className="border border-black sm:ml-0 ml-auto">
              <thead className="table-head border-b border-gray-400">
                <tr className="text-center">
                  <th className="border-r border-gray-400"></th>
                  <th className="border-r border-gray-400">L8989-A45</th>
                  <th className="border-r border-gray-400">L8989-A45S</th>
                  <th className="border-r border-gray-400">L8989-A68</th>
                  <th className="border-r border-gray-400">L8989-A68S</th>
                  <th className="border-r border-gray-400 ">L8989-A90</th>
                  <th className="border-r border-gray-400">L8989-A90S</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                {Specification.map((item, index) => (
                  <tr key={index} className=" ">
                    <td className={` border-r border-gray-400 pl-2 ${index % 2 === 0 ? 'bg-gray-300' : ''} text-start`}>{item.name}</td>
                    <td className={` border-r border-gray-400  ${index % 2 === 0 ? 'bg-gray-300' : ''} text-center`} colSpan="2">{item.spec1}</td>
                    <td className={` border-r border-gray-400  ${index % 2 === 0 ? 'bg-gray-300' : ''} text-center`} colSpan="2">{item.datas}</td>
                    <td className={` border-r border-gray-400 ${index % 2 === 0 ? 'bg-gray-300' : ''} text-center`} colSpan="2">{item.spec2}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
        <div className="flex flex-col">
          <img src={img1} alt="" className="pt-10 pb-5" />
        </div>
      </div >

      <section>
        <div className="bg-bg form flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 sm:px-24 px-5 gap-10">
          <div className="">
            <p className="text-3xl sm:text-6xl font-semibold ">
              Keen to explore further?
            </p>
            <p className="py-5  font-medium md:text-start text-justify">
              If you are interested in our products and would like to receive
              further information, please fill out the form below to send us
              your request. or mail to info@auraslighting.com directly.
            </p>
          </div>
          <div className="form-content md:w-[70%] w-full sm:p-5 p-3  rounded-3xl shadow-2xl">
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
                placeholder="Mail"
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
                name="messege"
                id="messege"
                rows="5"
                className="bg-gray-200 p-2 my-1 rounded-lg w-full border border-[#0E82B4]"
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
    </>
  );
}
