import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { IoIosClose, IoMdArrowDropright } from "react-icons/io";
import Sanityclient from "./Sanityclient";
import { CiCircleMore } from "react-icons/ci";
const Navbar = () => {
  const [colours, setcolour] = useState(true);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownsmall, setShowDropdownsmall] = useState(false);
  const [IndoorDropdown, setIndoorDropdown] = useState(false);
  const [search, setSearch] = useState(false);
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
  const navbardata = [
    { title: "Indoor Lights", value: "product", boo: false },
    { title: "Outdoor Lights", value: "Outdoor", boo: false },
    { title: "Facade Lights", value: "facade", boo: false },
    { title: "Linear Lights", value: "linear", boo: false },
  ];

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setShowDropdown(false);
      setIndoorDropdown(false);
    }, 600);
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
    setIsOpen(!isOpen);
  };
  const productsearch = () => {
    setIsOpen(false);
    setSearch(!search);
    setdummydata(model);
  };
  const width = window.innerWidth;
  const [dummydata, setdummydata] = useState([]);
  //dynamic navbar
  const newColours = Array(navbardata.length).fill(false);
  const { id } = useParams();
  const [model, setModel] = useState([]);
  const [searchproduct, setSearchproduct] = useState("product");
  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == ${JSON.stringify(
        searchproduct
      )}]{ modelid, modelimage{asset->{url,id}} }`
    )
      .then((data) => {
        //console.log(data);
        setModel(data);
        setdummydata(data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, [searchproduct]);
  useEffect(() => {
    newColours[0] = true;
    setcolour(newColours);
  }, []);
  const HandleKeydown = (event) => {
    const fildata = model.filter((items) =>
      items.modelid.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setdummydata(fildata);
  };
  function handleclick(index, value) {
    newColours[index] = true;

    setcolour(newColours);
    console.log(colours);
    setSearchproduct(value);
  }

  return (
    <section
      ref={navbarRef}
      className="bg-white fixed z-50 w-full font shadow-md shadow-gray-400"
    >
      <div className="w-full">
        <div className="bg-gray-400 text-black  px-5 sm:px-10 md:px-20 flex justify-between">
          <div className="py-2 flex">
            <div className="flex items-center pr-2 sm:pr-10 border-r">
              <MdEmail className="" />
              <p className="ml-1 hidden sm:block cursor-pointer text-sm">
                contact@auraslightings.com
              </p>
            </div>
            <div className="flex items-center ml-2">
              <TiLocation className="" />
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
            <Link to="/home">
              <img
                src={logo}
                alt="auras logo"
                className="xl:ml-16 xl:w-[170px] w-28"
              />
            </Link>
          </div>
          <div className="flex ml-10 w-3/4 justify-evenly lg:text-xs xl:text-sm font-medium relative">
            <Link
              to="/home"
              className={`capitalize hover:text-[#F2667C] cursor-pointer ${
                location.pathname === "/home" ? "text-[#F2667C]" : ""
              }`}
            >
              Home
            </Link>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown-container"
            >
              <Link
                className={`capitalize hover:text-[#F2667C] cursor-pointer ${
                  location.pathname.includes("/product") ? "text-[#F2667C]" : ""
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
            <Link
              to="/about"
              className={`capitalize hover:text-[#F2667C] cursor-pointer ${
                location.pathname === "/about" ? "text-[#F2667C]" : ""
              }`}
            >
              about us
            </Link>
            <Link className="capitalize hover:text-[#F2667C] cursor-pointer">
              Project Portfolio
            </Link>
          </div>

          <div className="w-1/4  items-center justify-around xl:px-4 flex">
            <div className="capitalize  shadow-lg cursor-pointer text-[#F2667C] hover:bg-[#F2667C] hover:text-white px-4 py-2 rounded">
              <Link to="/contactus">
                <p className=" lg:text-sm font-medium">Contact us</p>
              </Link>
            </div>
            <div>
              <FiSearch
                className="text-[#F2667C] lg:text-xl xl:text-2xl cursor-pointer"
                onClick={productsearch}
              />
            </div>
            <div>
              <MdAccountCircle className="text-[#F2667C] lg:text-xl xl:text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* smaller devices */}
        <div className=" flex items-center justify-between px-5 py-1 lg:hidden overflow-hidden">
          <div className="">
            <Link to="/home">
              <img src={logo} alt="auras logo" className="w-20" />
            </Link>
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
              <FiSearch
                className="text-[#F2667C] text-3xl"
                onClick={productsearch}
              />
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
            to="/about"
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
          <Link to="/contactus">
            <button
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-[#F2667C] hover:text-white hover:bg-[#F2667C]"
              onClick={toggleNavbar}
            >
              Contact Us
            </button>
          </Link>
          {showDropdownsmall && (
            <div className="navbar-animation font-medium w-full absolute top-0 h-full bg-white text-[#F2667C]  py-2  rounded-b-lg z-10">
              <p
                className="block px-4 py-2   hover:text-[#F2667C] "
                onClick={() => setShowDropdownsmall(false)}
              >
                Back
              </p>
              <Link
                to="/home/products/linear/linearCategory"
                onClick={cancelDropdownSmall}
                className="block px-4 py-2   hover:text-[#F2667C] "
              >
                Linear Lights
              </Link>
              <Link
                to="/home/products/Outdoor/OutdoorCategory"
                className="block px-4 py-2   hover:text-[#F2667C]"
                onClick={cancelDropdownSmall}
              >
                Outdoor Lights
              </Link>
              <Link
                className="block px-4 py-2 text-xs  "
                to="home/products/product/productCategory"
              >
                <div className="relative">
                  <p
                    className="hover:text-[#F2667C] text-base  flex items-center"
                    onClick={toggleNavbar}
                  >
                    Indoor Lights <IoMdArrowDropright />
                  </p>
                </div>
              </Link>
              <Link
                to="home/products/facade/FacadeCategory"
                className="block px-4 py-2   hover:text-[#F2667C] "
                onClick={cancelDropdownSmall}
              >
                Facade Lights
              </Link>
            </div>
          )}
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
                to="/home/products/linear/linearCategory"
                className={`block px-4 py-2 text-xs ${
                  location.pathname.includes("/linear") ? "text-[#F2667C]" : ""
                }  hover:text-[#F2667C]`}
              >
                Linear Lights
              </Link>
              <Link
                onClick={() => setShowDropdown(false)}
                to="/home/products/Outdoor/OutdoorCategory"
                className={`block px-4 py-2 text-xs ${
                  location.pathname.includes("/Outdoor") ? "text-[#F2667C]" : ""
                }  hover:text-[#F2667C]`}
              >
                Outdoor Lights
              </Link>
              <Link
                to={"home/products/product/productCategory"}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                onMouseEnter={() => setIndoorDropdown(true)}
                className={`block px-4 py-2 text-xs ${
                  location.pathname.includes("/productCategory")
                    ? "text-[#F2667C]"
                    : ""
                }  hover:text-[#F2667C]`}
              >
                <div className="relative">
                  <p className=" flex items-center">Indoor Lights</p>
                </div>
              </Link>
              <Link
                onClick={() => setShowDropdown(false)}
                to="home/products/facade/FacadeCategory"
                className={`block px-4 py-2 text-xs ${
                  location.pathname.includes("/facade") ? "text-[#F2667C]" : ""
                }  hover:text-[#F2667C]`}
              >
                Facade Lights
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Search  for both devices*/}
      {search && (
        <div className="flex overflow-hidden  flex-col">
          <div
            className="absolute w-full top-0 h-full flex pl-3 xs:pl-0 xs:justify-center items-center bg-black searchani1"
            // onMouseLeave={productsearch}
          >
            <div>
              <form className="form">
                <button type="submit">
                  <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  required
                  onChange={HandleKeydown}
                  placeholder="Search products..."
                  type="text"
                  className="input sm:w-96 w-full placeholder:text-sm"
                />
              </form>
            </div>

            <IoIosClose
              className="text-white absolute right-2 cursor-pointer"
              size={30}
              onClick={productsearch}
            />
          </div>

          <div className="bg-white absolute w-full h-screen   gap-2 ">
            <div className="flex flex-wrap lg:justify-start lg:items-start justify-center items-center p-5  gap-5">
              {navbardata &&
                navbardata.map((item, index) => (
                  <p
                    key={index}
                    onClick={(ele) => handleclick(index, item.value, ele)}
                    style={{
                      backgroundColor:
                        colours && colours[index] ? "#FFB6C1" : "#D3D3D3",
                    }}
                    className={` cursor-pointer duration-100 w-fit h-fit  rounded-lg px-3 py-2 xs:text-base text-xs`}
                  >
                    {item.title}
                  </p>
                ))}
            </div>
            {dummydata.length != 0 ? (
              <div className="w-full shadow-inner h-[70%] overflow-y-scroll ">
                <div className="flex  pb-8  flex-wrap  gap-3 products  justify-center items-center">
                  {dummydata.map((id) => (
                    <Link
                      to={`home/products/individual/${searchproduct}/${id.modelid}`}
                      onClick={() => {
                        setIndoorDropdown(false);
                        setShowDropdown(false);
                        setSearch(false);
                        window.scrollTo({
                          top: 0,

                          behavior: "smooth",
                        });
                      }}
                      className="flex overflow-hidden  mt-5 flex-col justify-evenly items-center relative p-2 w-28 h-40 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
                    >
                      {" "}
                      <img
                        src={
                          id?.modelimage?.asset?.url &&
                          id?.modelimage?.asset?.url
                        }
                        alt=""
                        className="hover:scale-110 transition-all w-[80%] duration-300"
                      />
                      {/* {console.log(id, "check")} */}
                      <p className="text-nowrap w-full overflow-hidden text-ellipsis  text-center">
                        {id ? id.modelid : ""}
                      </p>
                    </Link>
                  ))}
                  <Link
                    to={`home/products/${
                      searchproduct === "product"
                        ? "product/productCategory"
                        : searchproduct === "Outdoor"
                        ? "Outdoor/OutdoorCategory"
                        : searchproduct === "facade"
                        ? "facade/FacadeCategory"
                        : searchproduct === "linear"
                        ? "linear/linearCategory"
                        : ""
                    }`}
                    onClick={() => {
                      setIndoorDropdown(false);
                      setShowDropdown(false);
                      setSearch(false);
                      window.scrollTo({
                        top: 0,

                        behavior: "smooth",
                      });
                    }}
                    className="flex mt-5 flex-col justify-evenly items-center relative p-2 w-28 h-40 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
                  >
                    <p className="text-pink-500 text-base">More...</p>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
                <p className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent  bg-clip-text">
                  No Data Found
                </p>
                <div className="w-full gap-x-2 flex justify-center items-center">
                  <div className="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"></div>
                  <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full "></div>
                  <div className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Navbar;
