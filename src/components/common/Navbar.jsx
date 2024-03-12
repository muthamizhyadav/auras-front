import React, { useRef, useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { MdArrowDropDown, MdArrowRight, MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navbarRef = useRef(null);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    cancelDropdown();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !event.target.classList.contains('scrollbar') // Check if the click is on the scrollbar
      ) {
        setIsOpen(false);
        // setShowDropdown(!showDropdown);
      }
    };
  
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const cancelDropdown = () => {
    setShowDropdown(false)
  }
  return (
    <section ref={navbarRef} className="bg-white fixed z-50 w-full font shadow-md shadow-gray-400" onMouseLeave={cancelDropdown}>
      <div className="w-full">
        <div className="bg-black text-white  px-5 sm:px-10 md:px-20 flex justify-between">
          <div className="py-2 flex">
            <div className="flex items-center pr-2 sm:pr-10 border-r">
              <MdEmail className="text-white" />
              <p className="ml-1 hidden sm:block cursor-pointer text-sm">
                contact@auraslightings.com
              </p>
            </div>
            <div className="flex items-center ml-2">
              <TiLocation className="text-white" />
              <p className="ml-1 hidden sm:block cursor-pointer text-sm">UAE</p>
            </div>
          </div>
          <div className="flex items-center gap-3 xs:gap-5">
            <RiFacebookBoxFill className="rounded-3xl cursor-pointer" />
            <FaSquareTwitter className="cursor-pointer" />
            <RiInstagramFill className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <IoLogoYoutube className="cursor-pointer" />
          </div>
        </div>
        <div className=" xl:justify-around md:justify-between w-full py-1 md:px-5 xl:px-10 items-center bg-transparent hidden lg:flex">
          <div className="">
            <img
              src={logo}
              alt="auras logo"
              className="xl:ml-16 xl:w-[140px] w-28"
            />
          </div>
          <div className="flex ml-10 w-3/4 justify-evenly lg:text-xs xl:text-sm font-medium relative" >
            <Link   
            className={`capitalize hover:text-[#F2667C] cursor-pointer ${location.pathname === "/" ? "text-[#F2667C]" : ''}`}
             >
              <span onMouseEnter={toggleDropdown} onClick={toggleDropdown} className="flex items-center">products <MdArrowDropDown size={15}/></span>
            </Link>
            {showDropdown && (
                <div   onClick={cancelDropdown} className="dropdown-animation absolute w-fit -translate-x-1/2 -translate-y-1/2 top-[75px] left-[7.5%] bg-pink-100 text-[#F2667C]  py-2 shadow-md shadow-gray-400 rounded-b-lg z-10">
                  <Link to="/" className="block px-4 py-2 text-xs  hover:bg-[#F2667C] hover:text-white">Linear Lights</Link>
                  <Link to="/products/outdoorlights" className="block px-4 py-2 text-xs  hover:bg-[#F2667C] hover:text-white" >Outdoor Lights</Link>
                </div>
              )}
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer" onMouseOver={cancelDropdown}>
              lux edition
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer" onMouseOver={cancelDropdown}>
              commercial lights
            </Link>
            <Link to="/outdoorlights" className={`capitalize hover:text-[#F2667C] cursor-pointer ${location.pathname === "/outdoorlights" ? "text-[#F2667C]" : ''}`} onMouseOver={cancelDropdown}>
              outdoor lights
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer" onMouseOver={cancelDropdown}>
              home decor
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer" onMouseOver={cancelDropdown}>
              about us
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer" onMouseOver={cancelDropdown}>
              blogs
            </Link>
          </div>
          <div className="w-1/4  items-center justify-around xl:px-4 flex" onMouseOver={cancelDropdown}>
            <div className="capitalize  shadow-lg cursor-pointer text-[#F2667C] hover:bg-[#F2667C] hover:text-white px-4 py-2 rounded">
              <p className=" lg:text-sm ">contact us</p>
            </div>
            <div>
              <FiSearch className="text-[#F2667C] lg:text-xl xl:text-2xl" />
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
        <div className="px-2 pt-2 pb-3 relative">
          <Link
           
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-[#F2667C]"
          >
           <span className="flex items-center w-fit" onClick={toggleDropdown} > Products <MdArrowRight size={20} /></span>
          </Link>
          {showDropdown && (
                <div className="dropdown-animation absolute w-fit -translate-x-1/2 -translate-y-1/2 top-[50px] left-[25%] bg-pink-100 text-[#F2667C]  py-2 shadow-md shadow-gray-400 rounded-b-lg z-10">
                  <Link to="/" className="block px-4 py-2   hover:bg-[#F2667C] hover:text-white">Linear Lights</Link>
                  <Link to="/products/outdoorlights" className="block px-4 py-2   hover:bg-[#F2667C] hover:text-white" >Outdoor Lights</Link>
                </div>
              )}
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]" onClick={toggleNavbar}
          >
            Lux Edition
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"  onClick={toggleNavbar}
          >
            Commercial Lights
          </Link>
          <Link
           
            to="/outdoorlights"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"  onClick={toggleNavbar}
          >
            Outdoor Lights
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"  onClick={toggleNavbar}
          >
            Home Decor
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"  onClick={toggleNavbar}
          >
            About Us
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"  onClick={toggleNavbar}
          >
            Blogs
          </Link>
          <button className="capitalize shadow-lg cursor-pointer font-medium text-[#F2667C] bg-white hover:bg-[#F2667C] hover:text-white px-4 py-1 rounded"  onClick={toggleNavbar}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
export default Navbar; 
