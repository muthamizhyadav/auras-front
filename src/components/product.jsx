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
import { MdDownload, MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";

import product1 from "../assets/product1.pdf";
import line1 from "../assets/line1.png";
import { FaGreaterThanEqual } from "react-icons/fa6";
import imagecontent1 from "../assets/imagecontent 1.png";
import imagecontent2 from "../assets/imagecontent 2.png";
import linearcontent1 from "../assets/linearcontent1.png";
import linearcontent2 from "../assets/linearcontent2.png";
import lightsway from "../assets/lightsway.png";
import linearoutline from "../assets/linearouline.png";

export function Product() {
  // const [showActiveContent, setShowActiveContent] = useState("Overview");
  // const toggleContent = (content) => {
  //   setShowActiveContent(content);
  // };
  const Specification = [
    {
      title: "",
      name: "Size",
      spec1: "1237mm(4.06ft) x 91mm(0.30ft) x 91mm(0.30ft)",
      datas: "1237mm (4.06ft) x 91mm (0.30ft) x 91mm (0.30ft)",
      spec2: "L2456mm (4.06ft) x 91mm (0.30ft) x 91mm (0.30ft)",
    },
    {
      title: "L8989-A45",
      name: "Power",
      spec1: "68W (11.3w/ft)",
      datas: "45W (11.3w/ft)",
      spec2: "45W (11.3w/ft)",
    },
    {
      title: "L8989-A45S",
      name: "Lumen",
      spec1: "4860 ~ 5150lm (1215 ~ 1287lm/ft)",
      datas: "4860 ~ 5150lm (1215 ~ 1287lm/ft)",
      spec2: "9710~10300LM(1215~1287LM/fit)",
    },
    { title: "L8989-A68", name: "Cover", datas: "PDM (98°)" },
    { title: "L8989-A68S", name: "CRI", datas: "85+ / 90+" },
    {
      title: "L8989-A90",
      name: "CCT",
      datas: " 3000K / 4000K / 6000K (3500K / 5000K)",
    },
    { title: "L8989-A90S", name: "IP grade", datas: "IP 66" },
    { name: "Working Voltage", datas: "AC100 ~ 277V / 50~60Hz" },
    { name: "Max Input Current", datas: "6A" },
    {
      name: "Profile color",
      datas: "Silvery (ral9006) / Black (ral9004) / White (ral9003)",
    },
  ];
  const columns = [
    {
      name: <h1 className="text-black"></h1>,
      selector: (row) => row.name,
    },
    {
      name: <h1 className="text-black">L8989-A45</h1>,
      selector: (row) => row.spec1,
    },

    {
      name: <h1 className="text-black">L8989-A45S</h1>,
      selector: (row) => row.spec1,
    },
    {
      name: <h1 className="text-black">L8989-A68</h1>,
      selector: (row) => row.datas,
    },
    {
      name: <h1 className="text-black">L8989-A68S</h1>,
      selector: (row) => row.datas,
    },
    {
      name: <h1 className="text-black">L8989-A90</h1>,
      selector: (row) => row.spec2,
    },
    {
      name: <h1 className="text-black">L8989-A90S</h1>,
      selector: (row) => row.spec2,
    },
  ];
  const customStyles = {
    th: {
      style: {},
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

  const bgimages = [linear1, linear2, linear3, linear4, linear5, linear6];

  const [bgimage, Setbgimage] = React.useState(bgimages);
  const [index, SetIndex] = React.useState(0);

  const changeBgimages = () => {
    SetIndex((prev) => (prev + 1) % bgimage.length);
  };

  React.useEffect(() => {
    const interval = setInterval(changeBgimages, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className="font">
      <section className="">
        <div className="w-full md:flex hidden">
          <div className="w-[10%]"></div>
          <div className="w-[90%]">
            <p className="flex font-medium  text-black py-5">
              Linear Light &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
              L8989-A45
            </p>
          </div>
        </div>

        <section className="md:relative ">
          <div className="lg:h-[500px] md:h-[550px] w-full md:flex hidden">
            <div className="w-[10%] bg-white"></div>
            <div className="w-[90%] bg-[#F3F3F3]"></div>
          </div>
          <p className="flex bg-[#F3F3F3] pt-5 px-5 md:hidden font-medium  text-black">
            Linear Light &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
            L8989-A45
          </p>
          <div className=" bg-[#F3F3F3] py-5 lg:py-0 md:bg-inherit w-full px-5 sm:px-14 flex md:flex-row flex-col items-center md:gap-3 gap-10 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:top-[45%]  md:left-1/2">
            <div
              className="bg-cover h-[250px] sm:h-[379px] shadow-2xl drop-shadow-lg rounded-xl w-full md:w-[42%]  lg:w-[37%]"
              style={{
                backgroundImage: `url(${bgimage[index]})`,
                backgroundPosition: "center",
                transition: "background-image 1s ease",
              }}
            />
            <div className="sm:h-[387px] w-full md:w-[58%] lg:w-[63%]   sm:pl-0 capitalize">
              <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-2">
                L8989-A45 IP66 IK10 4FT linkable waterproof LED linear light
              </p>
              <img
                src={line1}
                alt=""
                className=" pt-1 md:block hidden xl:w-[90%] h-10"
              />
              <div className="md:text-xs  lg:text-[13px]  md:leading-6 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                <ul className="list-disc">
                  <li className="">IP66 protection class.</li>
                  <li className="">
                    Non-dim, support 0-10V, DALI, Triac dimming solutions.
                  </li>
                  <li className="">
                    Aluminium 6063-T5, good heat radiation with long lifespan.
                  </li>
                  <li>Light source adopts LM-80 certified LED.</li>
                  <li>Adopt UL Class P certified power supply.</li>
                  <li>Long lifespan, &gt;30000 hours (L70B10). </li>
                  <li>High lighting efficiency, save energy.</li>
                  <li>Environment humidity 40-70% RH.</li>
                  <li>Operating Term: -20°C - + 45°C. </li>
                  <li>Storage Term: -40°C - + 60°C. </li>
                  <li>Degradable packaging.</li>
                  <li className="flex items-center">
                    {" "}
                    PF &nbsp;
                    <FaGreaterThanEqual size={10} />
                    &nbsp; 0.9 .
                  </li>
                </ul>
              </div>
              <a
                href={product1}
                download
                className="flex justify-center items-center  md:justify-start md:pl-10 lg:pl-[22%]"
              >
                <button className=" flex justify-center items-center mt-5 sm:mt-3  w-48 h-10 rounded bg-white shadow-md">
                  Specification File
                  <MdDownload className="text-[#F2667C] my-1 mx-2 " />
                </button>
              </a>
            </div>
          </div>
        </section>
      </section>

      <div className="bg-slate-100 w-full  md:px-14 px-5 rounded-t-xl pt-5">
        <div className=" ">
          <div className=" ">
            <p className="text-center font-semibold text-xl py-5">
              Specification
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center rounded-b-xl py-5 px-10 overflow-x-scroll shadow-2xl drop-shadow-2xl ">
            <table
              style={customStyles}
              className="border border-black sm:ml-0 ml-auto"
            >
              <thead className="border-b border-gray-400">
                <tr className="text-center ">
                  <th className="border-r border-gray-400"></th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    L8989-A45
                  </th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    L8989-A45S
                  </th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    L8989-A68
                  </th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    L8989-A68S
                  </th>
                  <th className="border-r border-gray-400 text-sm ">
                    L8989-A90
                  </th>
                  <th className="border-gray-400 text-sm">L8989-A90S</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                {Specification.map((item, index) => (
                  <tr key={index} className=" ">
                    <td
                      className={` border-r border-gray-400 text-xs  border-b text-start px-3 py-2`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                      colSpan="2"
                    >
                      {item.spec1}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                      colSpan="2"
                    >
                      {item.datas}
                    </td>
                    <td
                      className={` border-gray-400 text-xs border-b text-center px-3 py-2`}
                      colSpan="2"
                    >
                      {item.spec2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between py-10 gap-5">
          <div className="w-72 h-72 bg-white drop-shadow-xl p-5 rounded-lg">
            <img
              src={linearcontent1}
              alt=""
              className="w-full h-full border p-2 border-gray-500"
            />
          </div>
          <div className="w-72 h-72 bg-white drop-shadow-xl p-5 rounded-lg">
            <img src={linearcontent2} alt="" className="w-full h-full" />
          </div>
          <div className="w-72 h-72  bg-white drop-shadow-xl p-5 rounded-lg">
            <img src={lightsway} alt="" className="w-full" />
            <div className="w-full  p-3   pb-7 bg-white">
              <img src={linearoutline} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <img src={img1} alt="" className="pt-5 py-10" />
        </div>
        <div>
          <h2 className="font-semibold sm:text-xl py-5 text-center">
            Outdoor waterproof LED linear lighting fixture: L8989
          </h2>
          <div className="flex md:flex-row flex-col py-5 gap-5">
            <div className="flex flex-col gap-5 md:w-[40%] items-center">
              <img src={imagecontent1} alt="" className="w-96 h-72" />
            </div>
            <div className="md:w-[60%] leading-loose xs:w-96 xs:px-0 px-5 mx-auto">
              <ul className="list-disc lg:text-base text-[12px] lg:space-y-3">
                <li>
                  Aluminium 6063-T5 profile, surface treatment by oxidation or
                  metal powder painting which is special for outdoor, good
                  thermostability and low temperature resistance, good
                  resistance to acids and alkalis.
                </li>
                <li>PC diffuser, anti-UV, fire-protection rating 94-V2.</li>
                <li>
                  Linkable, ladder, structure design, easy assembly and
                  disassembly.
                </li>
                <li>
                  Integrated aluminum end cap with silicone seal ring, fix by
                  screws, fashionable surface.
                </li>
                <li>
                  Support 3-in-1 (0-10V, PWM and resistor), DALI or other
                  dimming solutions.
                </li>
                <li className="flex items-center">
                  4ft or 8ft, lifespan <FaGreaterThanEqual size={10} /> 5 years.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col py-5 gap-5">
            <div className="flex flex-col gap-5 md:w-[40%] items-center">
              <img src={imagecontent2} alt="" className="w-96 h-72" />
            </div>
            <div className="md:w-[60%] leading-loose md:px-0 xs:w-96 xs:px-0 px-5 mx-auto">
              <ul className="list-disc lg:text-base text-[12px] lg:space-y-4">
                <li>
                  <span className="font-medium">CONNECTION CABLE: </span>{" "}
                  Several lighting fixtures could be connected quickly and
                  safely by cables with male and female connectors.
                </li>
                <li>
                  <span className="font-medium">STRAIGHT CONNECTION: </span>{" "}
                  Mechanical connection and electrical connection by stainless
                  steel 304 connectors and waterproof cable on the top of
                  profile.
                </li>
                <li>
                  <span className="font-medium">DIFFUSER: </span> PC frosted
                  diffuser, anti-UV, fire-protection rating 94-V2.
                </li>
                <li>
                  <span className="font-medium">MAIN PROFILE: </span> Aluminum
                  6063-T5 profile, surface treated by oxidation or metal powder
                  painting which is special for outdoor use. Good
                  thermostability, good resistance to acids and alkalis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-Formbg bg-cover form flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 md:px-24 px-5 lg:gap-10 gap-3">
          <div className="">
            <p className="text-3xl sm:text-5xl font-medium">
              Keen to explore further?
            </p>
            <p className="py-5 text-xs md:text-start text-justify">
              If you are interested in our products and would like to receive
              further information, please fill out the form below to send us
              your request or mail to info@auraslighting.com directly.
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
                name="messege"
                id="messege"
                rows="4"
                className="bg-gray-200 p-2 my-1 rounded-lg w-full border border-[#0E82B4]"
                placeholder="Message"
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

    </article>
  );
}
