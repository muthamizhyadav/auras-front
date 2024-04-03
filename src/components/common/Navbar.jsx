import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdArrowDropDown, MdArrowRight, MdEmail, MdMore } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Sanityclient from "./Sanityclient";
import { CiCircleMore } from "react-icons/ci";
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownsmall, setShowDropdownsmall] = useState(false);
  const [IndoorDropdown, setIndoorDropdown] = useState(false);
  const [IndoorDropdownSmall, setIndoorDropdownSmall] = useState(false);
  const navbarRef = useRef(null);
  const closeTimeout = useRef(null);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    cancelDropdownSmall();
  };

  const openDropdown = () => {
    setShowDropdown(true);
    clearTimeout(closeTimeout.current);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setShowDropdown(false);
      setIndoorDropdown(false);
    }, 500);
  };

  const handleMouseEnter = () => {
    openDropdown();
  };

  const handleMouseLeave = () => {
    closeDropdown();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdownSmall = () => {
    setShowDropdownsmall(!showDropdownsmall);
    setIndoorDropdown(false);
  };
  const cancelDropdownSmall = () => {
    setShowDropdownsmall(false);
  };

  //dynamic navbar
  const { id } = useParams();
  const [model, setModel] = useState([]);
  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "product"]{ modelid, modelimage{asset->{url,id}} }`
    )
      .then((data) => {
        console.log(data);
        setModel(data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, [id]);
  return (
    <section
      ref={navbarRef}
      className="bg-white fixed z-50 w-full font shadow-md shadow-gray-400"
    >
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
        {/* larger devices */}
        <div className=" xl:justify-around md:justify-between w-full py-1 md:px-5 xl:px-10 items-center bg-transparent hidden lg:flex">
          <div className="">
            <img
              src={logo}
              alt="auras logo"
              className="xl:ml-16 xl:w-[140px] w-28"
            />
          </div>
          <div className="flex ml-10 w-3/4 justify-evenly lg:text-xs xl:text-sm font-medium relative">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown-container"
            >
              <Link
                className={`capitalize hover:text-[#F2667C] cursor-pointer ${
                  location.pathname === "/" ? "text-[#F2667C]" : ""
                }`}
              >
                <span
                  onMouseEnter={toggleDropdown}
                  onClick={toggleDropdown}
                  className="flex items-center"
                >
                  products <MdArrowDropDown size={15} />
                </span>
              </Link>
            </div>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer">
              lux edition
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer">
              commercial lights
            </Link>
            <Link
              className={`capitalize hover:text-[#F2667C] cursor-pointer ${
                location.pathname === "/outdoorlights" ? "text-[#F2667C]" : ""
              }`}
            >
              outdoor lights
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer">
              home decor
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer">
              about us
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer">
              blogs
            </Link>
          </div>

          <div className="w-1/4  items-center justify-around xl:px-4 flex">
            <div className="capitalize  shadow-lg cursor-pointer text-[#F2667C] hover:bg-[#F2667C] hover:text-white px-4 py-2 rounded">
              <p className=" lg:text-sm font-medium">Contact us</p>
            </div>
            <div>
              <FiSearch className="text-[#F2667C] lg:text-xl xl:text-2xl cursor-pointer" />
            </div>
            <div>
              <MdAccountCircle className="text-[#F2667C] lg:text-xl xl:text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* smaller devices */}
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
      {/* dropdowns in smaller devices */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden bg-white navbar-animation `}
      >
        <div className="px-2 pt-2 pb-3 relative ">
          <Link className="block px-3 py-2 rounded-md text-base font-medium text-[#F2667C]">
            <span
              className="flex items-center w-fit"
              onClick={toggleDropdownSmall}
            >
              {" "}
              Products <MdArrowRight size={20} />
            </span>
          </Link>

          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            Lux Edition
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            Commercial Lights
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            Outdoor Lights
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            Home Decor
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            About Us
          </Link>
          <Link
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            Blogs
          </Link>
          <button
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
            onClick={toggleNavbar}
          >
            Contact Us
          </button>
          {showDropdownsmall && (
            <div className="navbar-animation font-medium w-full absolute top-0 h-full bg-white text-[#F2667C]  py-2  rounded-b-lg z-10">
              <p
                className="block px-4 py-2   hover:text-[#F2667C] "
                onClick={() => setShowDropdownsmall(false)}
              >
                Back
              </p>
              <Link
                to="/"
                onClick={cancelDropdownSmall}
                className="block px-4 py-2   hover:text-[#F2667C] "
              >
                Linear Lights
              </Link>
              <Link
                to="/home/products/outdoorlights"
                className="block px-4 py-2   hover:text-[#F2667C]"
                onClick={cancelDropdownSmall}
              >
                Outdoor Lights
              </Link>
              <Link className="block px-4 py-2 text-xs  ">
                <div className="relative">
                  <p
                    className="hover:text-[#F2667C] text-base  flex items-center"
                    onClick={() => setIndoorDropdownSmall(!IndoorDropdownSmall)}
                  >
                    Indoor Lights <IoMdArrowDropright />
                  </p>
                </div>
              </Link>
              <Link
                to="home/products/facadelights"
                className="block px-4 py-2   hover:text-[#F2667C] "
                onClick={cancelDropdownSmall}
              >
                Facade Lights
              </Link>
            </div>
          )}
          {/* {IndoorDropdownSmall && (
            <div className="navbar-animation absolute top-0 w-full bg-white mt-12 z-30 py-2 shadow-md shadow-gray-400 ">
              <div className="w-full flex flex-col">
                {modelId.slice(0, 11).map((id) => (
                  <Link
                    to={`/home/products/indoorlights/${id.modelid.toLowerCase()}`}
                    onClick={() => {
                      setIndoorDropdown(false);
                      setShowDropdown(false);
                    }}
                    className="block px-4 py-2 text-xs hover:text-[#F2667C]"
                    key={id.modelid} 
                  >
                    {id ? id.modelid : ""}
                  </Link>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>

      <div onMouseLeave={handleMouseLeave}>
        {/* dropdowns in larger device */}
        {showDropdown && (
          <div
            className="dropdown-container dropdown-animation absolute w-full lg:block hidden  bg-white  py-2 shadow-md shadow-gray-400 z-10"
            onMouseEnter={handleMouseEnter}
          >
            <div className="flex justify-center w-full">
              <Link
                onClick={() => setShowDropdown(false)}
                to="/"
                className="block px-4 py-2 text-xs  hover:text-[#F2667C]"
              >
                Linear Lights
              </Link>
              <Link
                onClick={() => setShowDropdown(false)}
                to="/home/products/outdoorlights"
                className="block px-4 py-2 text-xs  hover:text-[#F2667C]"
              >
                Outdoor Lights
              </Link>
              <Link
                onClick={() => {
                  setIndoorDropdown(!IndoorDropdown);
                }}
                onMouseEnter={() => setIndoorDropdown(true)}
                className="block px-4 py-2 text-xs  "
              >
                <div className="relative">
                  <p className="hover:text-[#F2667C] flex items-center">
                    Indoor Lights <MdArrowDropDown />
                  </p>
                </div>
              </Link>
              <Link
                onClick={() => setShowDropdown(false)}
                to="home/products/facadelights"
                className="block px-4 py-2 text-xs  hover:text-[#F2667C]"
              >
                Facade Lights
              </Link>
            </div>
          </div>
        )}
        {IndoorDropdown && (
          <div className="dropdown-animation lg:block hidden absolute w-full bg-white mt-12 z-20 py-2 shadow-md shadow-gray-400 ">
            <div className="w-full flex justify-evenly">
              {model &&
                model.slice(0, 6).map((id) => (
                  <Link
                    to={`/home/products/indoorlights/${id.modelid.toLowerCase()}`}
                    onClick={() => {
                      setIndoorDropdown(false);
                      setShowDropdown(false);
                    }}
                    className="flex justify-center items-center relative p-2 w-28 h-40 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
                  >
                    {" "}
                    <img
                      src={id.modelimage.asset.url && id.modelimage.asset.url}
                      alt=""
                      className="hover:scale-110 transition-all duration-300"
                    />
                    {console.log(id, "check")}
                    <p className="absolute bottom-2">{id ? id.modelid : ""}</p>
                  </Link>
                ))}
              <Link
                className="w-28 h-40 flex items-center justify-center bg-white drop-shadow-md "
                to="home/products/indoorlights/allproducts"
                onClick={() => {
                  setIndoorDropdown(false);
                  setShowDropdown(false);
                }}
              >
                <div className="flex justify-center items-center gap-1 text-xs hover:text-[#F2667C] hover:scale-110 transition-all duration-300">
                  <p>MORE</p>
                  <CiCircleMore />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Navbar;
