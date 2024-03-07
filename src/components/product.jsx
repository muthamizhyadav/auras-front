import img3 from "../assets/image3.png";
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
  return (
    <>
      {/*kaushik  */}
      <section>
        <div className="fixd w-full z-99">
          <div className="bg-black text-white px-20 flex justify-between">
            <div className="py-2 flex">
              <div className="flex items-center pr-10 border-r">
                <MdEmail className="text-white" />
                <p className="ml-1">contact@auraslightings.com</p>
              </div>
              <div className="flex items-center ml-2">
                <TiLocation className="text-white" />
                <p className="ml-1">UAE</p>
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

          <div className="flex justify-around w-full py-1 px-10 items-center bg-transparent fxed">
            <div className="">
              <img src={logo} alt="auras logo" className="ml-16 w-[160px]" />
            </div>
            <div className="flex ml-10 w-3/4 justify-evenly">
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
            <div className="w-1/4 flex items-center justify-around px-4">
              <div className="capitalize  shadow-lg cursor-pointer text-[#F2667C] hover:bg-[#F2667C] hover:text-white p-2 rounded">
                <p>contact us</p>
              </div>
              <div>
                <FiSearch className="text-[#F2667C] text-3xl" />
              </div>
              <div>
                <MdAccountCircle className="text-[#F2667C] text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* syed  */}
      <section className="">
        <div className="font-int">
          <div className="p-10 ml-24">
            <p className="flex text-md font-bold tracking-wide">
              LED Downlights <FaChevronRight className="m-1" /> DL284c
            </p>
          </div>
          <div className="grid grid-cols-2 bg-[#f3f3f3] ml-28 p-3 relative">
            <div className="relative">
              <div className="absolute top-7 -left-16 h-[370px] w-[500px] bg-white rounded-3xl shadow-2xl">
                <img src={img3} alt="" className=" rounded-xl" />
              </div>
            </div>

            <div className="mr-14 ">
              <p className="text-3xl tracking-wider py-3  mt-5 font-semibold border-[#f2667c] border-b-2">
                DL284 IP65 IK10 SMD Downlight
              </p>
              <div className="text-[14px] opacity-50 font-medium">
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
              <a href={product1} download>
                <button className=" flex my-6 py-2 px-2 rounded bg-white shadow-md  shadow-black">
                  Specification File
                  <FaArrowDown className="text-[#f2667c] my-1 mx-2 " />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* vijay */}
      <section>
        <div>
          <div className="img1 ml-[188px] mt-5 py-3 w-[490px] px-9 space-x-8 ">
            <button className="img bg-[#f2667c] p-2 rounded text-white border-none">
              Overview{" "}
            </button>
            <button className="img p-2 bg-white rounded border-none">
              Specifications
            </button>
            <button className="img p-2 bg-white rounded border-none">
              Related Products
            </button>
          </div>
          <div className="img w-9/12 mx-auto ">
            <img className="  h-[450px] w-11/12 py-5 mx-9" src={img1} alt="" />
          </div>
        </div>
      </section>

      {/* kavin */}
      <section>
        <div className="form flex justify-evenly items-center flex-wrap lg:flex-nowrap sm:px-36 sm:py-10">
          <div className="px-">
            <p className="text-2xl text-center sm:text-6xl font-bold">
              Keen to explore further?
            </p>
            <p className="my-5 sm:px-10 px-5">
              If you are interested in our products and would like to receive
              further information, please fill out the form below to send us
              your request. or mail to info@auraslighting.com directly.
            </p>
          </div>
          <div className="form-content">
            <div className="flex flex-col items-center justify-evenly p-5  rounded-3xl shadow-2xl">
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
                cols="58"
                rows="5"
                className="bg-gray-200 p-2 my-1 rounded-lg"
                placeholder="Messege"
              ></textarea>
              <button
                type="submit"
                className=" bg-white p-3 px-8 shadow-2xl rounded-lg my-2 text-right"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section>
        <div className="bg-black text-white p-8 ">
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
