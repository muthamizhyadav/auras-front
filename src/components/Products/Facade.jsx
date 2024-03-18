import React from "react";
import Facade1 from "../../assets/Facadelight1.png";
import Facade2 from "../../assets/Facadelight2.png";
import Facade4 from "../../assets/Facadelight4.png";
import Facade5 from "../../assets/Facadelight5.png";
import Facade6 from "../../assets/Facadelight6.png";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import product1 from "../../assets/FacadeLights.pdf";
import line1 from "../../assets/line1.png";
import phySpec1 from "../../assets/phy-spc1.png";
import physpec2 from "../../assets/phySpc2.png";
import physpec3 from "../../assets/physpc-3.png";
import physpec4 from "../../assets/physpc-4.png";
import physpec5 from "../../assets/phy-spc5.png";
import { Explore } from "./Explore";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";
import Collection from "./Collection";
import whiteChart from "../../assets/white chart.png";
import whiteChart1 from "../../assets/black chart.png";
import dimming1 from "../../assets/dimming1.png";
import dimming2 from "../../assets/dimming2.png";
import dimming3 from "../../assets/dimming3.png";

export const Facade = () => {
  // React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  const bgimages = [Facade1, Facade2, Facade4, Facade5, Facade6];

  const [bgimage, Setbgimage] = React.useState(bgimages);
  const [index, SetIndex] = React.useState(0);

  const changeBgimages = () => {
    SetIndex((prev) => (prev + 1) % bgimage.length);
  };

  React.useEffect(() => {
    const interval = setInterval(changeBgimages, 2000);
    return () => clearInterval(interval);
  }, []);

  const [previewIndex, setPreviewIndex] = React.useState(null);

  const handleThumbnailClick = (index) => {
    setPreviewIndex(index);
  };

  const handleNextClick = () => {
    setPreviewIndex((prevIndex) => (prevIndex + 1) % bgimage.length);
  };

  const handlePrevClick = () => {
    setPreviewIndex(
      (prevIndex) => (prevIndex - 1 + bgimage.length) % bgimage.length
    );
  };

  const handleClosePreview = () => {
    setPreviewIndex(null);
  };

  const handleCloseOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePreview();
    }
  };

  //DataTable
  const Specification = [
    {
      name: "Operating voltage",
      spec1: "24V",
      datas: "24V",
      spec2: "24V",
      spec3: "36V",
      spec4: "24V",
      spec5: "12V",
      spec6: "24V",
    },
    {
      name: "Power consumption",
      spec1: "15W/M",
      datas: "12W/M",
      spec2: "7.2W/M",
      spec3: "12W/M",
      spec4: "5W/M",
      spec5: "5W/M",
      spec6: "10W/M",
    },
    {
      name: "Working Mode",
      spec1: "CV",
      datas: "CV",
      spec2: "CV",
      spec3: "CV",
      spec4: "CV",
      spec5: "CV",
      spec6: "CC",
    },
    {
      name: "LED type",
      spec1: "SMD5050",
      datas: "SMD5050",
      spec2: "SMD5050",
      spec3: "SMD5050",
      spec4: "SMD3528",
      spec5: "SMD3528",
      spec6: "SMD2835",
    },
    {
      name: "LED Quantity",
      spec1: "72 pcs/m",
      datas: "60 pcs/m",
      spec2: "60 pcs/m",
      spec3: "60 pcs/m",
      spec4: "72 pcs/m",
      spec5: "72 pcs/m",
      spec6: "72 pcs/m",
    },
    {
      name: "Available CCT",
      spec1: "2200-6500K",
      datas: "2200-6500K",
      spec2: "/",
      spec3: "2200-6500K",
      spec4: "2200-6500K",
      spec5: "2200-6500K",
      spec6: "2200-6500K",
    },
    {
      name: "Available Color",
      spec1: "G/B/LY/P",
      datas: "G/B/LY/P",
      spec2: "R/A/O",
      spec3: "G/B/LY/P",
      spec4: "G/B/P/R/A/O",
      spec5: "G/B/P/R/A/O",
      spec6: "G/B/LY/P",
    },
    {
      name: "Min. cutting Unit",
      spec1: "6 LEDs",
      datas: "6 LEDs",
      spec2: "10 LEDs",
      spec3: "10 LEDs",
      spec4: "12 LEDs",
      spec5: "6 LEDs",
      spec6: "6 LEDs",
    },
    {
      name: "Min. cutting length",
      spec1: "8.33cm",
      datas: "10cm",
      spec2: "16.67cm",
      spec3: "16.67cm",
      spec4: "16.67cm",
      spec5: "8.33cm",
      spec6: "8.33cm",
    },
    {
      name: "Max. length single feed",
      spec1: "8m",
      datas: "10m",
      spec2: "15m",
      spec3: "15m",
      spec4: "15m",
      spec5: "7m",
      spec6: "15m",
    },
    {
      name: "Max. length double feed",
      spec1: "16m",
      datas: "20m",
      spec2: "30m",
      spec3: "30m",
      spec4: "30m",
      spec5: "/",
      spec6: "30m",
    },
    // {
    //   name: "Lumen maintenance",
    //   spec1: "70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    //   datas:"70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    //   spec2:"70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    //   spec3:"70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    //   spec4:"70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    //   spec5:"70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    //   spec6:"70 000 Hours L70 25°C , 50 000 Hours L70 50°C",

    // },
    // {
    //   name: "Housing material",
    //   spec1: "Eco PVC or Silicone",
    //   datas:"Eco PVC or Silicone",
    //   spec2:"Eco PVC or Silicone",
    //   spec3:"Eco PVC or Silicone",
    //   spec4:"Eco PVC or Silicone",
    //   spec5:"Eco PVC or Silicone",
    //   spec6:"Eco PVC or Silicone",

    // },
    // {
    //   name: "Installation temperature",
    //   spec1: "0°C to -55°C",
    //   datas:"0°C to -55°C",
    //   spec2:"0°C to -55°C",
    //   spec3:"0°C to -55°C",
    //   spec4:"0°C to -55°C",
    //   spec5:"0°C to -55°C",
    //   spec6:"0°C to -55°C",

    // },
    // {
    //   name: "Ambient temperature",
    //   spec1: "-25°C to +55°C",
    //   datas:"-25°C to +55°C",
    //   spec2:"-25°C to +55°C",
    //   spec3:"-25°C to +55°C",
    //   spec4:"-25°C to +55°C",
    //   spec5:"-25°C to +55°C",
    //   spec6:"-25°C to +55°C",

    // },
    // {
    //   name: "Ingress protection",
    //   spec1: "IP68 wet location submersible* to 2m",
    //   datas:"IP68 wet location submersible* to 2m",
    //   spec2:"IP68 wet location submersible* to 2m",
    //   spec3:"IP68 wet location submersible* to 2m",
    //   spec4:"IP68 wet location submersible* to 2m",
    //   spec5:"IP68 wet location submersible* to 2m",
    //   spec6:"IP68 wet location submersible* to 2m",

    // },
    // {
    //   name: "Warranty",
    //   spec1: "3 years as standard, 5 years guarantee maximum",
    //   datas:"3 years as standard, 5 years guarantee maximum",
    //   spec2:"3 years as standard, 5 years guarantee maximum",
    //   spec3:"3 years as standard, 5 years guarantee maximum",
    //   spec4:"3 years as standard, 5 years guarantee maximum",
    //   spec5:"3 years as standard, 5 years guarantee maximum",
    //   spec6:"3 years as standard, 5 years guarantee maximum",

    // },
  ];

  return (
    <article className="font">
      <section className="">
        <div className="w-full md:flex">
          <div className="w-[10%] md:block hidden"></div>
          <div className="w-[90%]">
            <p className="flex items-center font-medium sm:text-base xs:text-xs text-[10px] text-black py-5">
              Home &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp; Products &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp; Facade Lights &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp;
              F21-24V-5050
            </p>  
          </div>
        </div>

        <section className="relative ">

          {previewIndex !== null && (
            <div
              onClick={handleCloseOutsideClick}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
            >
              <button
                className=" w-10 text-white flex justify-center items-center  text-xl"
                onClick={handlePrevClick}
              >
                <GrPrevious className="" />
              </button>

              <div className="relative w-64 h-64 previewxs:w-80 previewxs:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]">
                <div className=" bg-white">
                  <img
                    className="w-full h-full "
                    src={bgimage[previewIndex]}
                    alt="preview"
                  />
                </div>
                <button
                  className="absolute right-3 top-3 cursor-pointer text-black bg-white rounded-full p-1"
                  onClick={handleClosePreview}
                >
                  <TfiClose />
                </button>
              </div>
              <button
                className=" w-10 text-white flex justify-center items-center  text-xl"
                onClick={handleNextClick}
              >
                <GrNext />
              </button>
            </div>
          )}
          <div className=" bg-[#F3F3F3] py-5 lg:py-8 md:bg-Bannerbg bg-contain w-full px-5 sm:px-14 flex md:flex-row flex-col md:gap-3 gap-10">
            <div className="relative w-full md:w-[42%] lg:w-[37%]">
              <div
                className="cursor-pointer bg-cover h-[250px] sm:h-[379px] shadow-2xl drop-shadow-lg rounded-xl w-full"
                style={{
                  backgroundImage: `url(${bgimage[index]})`,
                  backgroundPosition: "center",
                  transition: "background-image 1s ease",
                }}
                onClick={() => handleThumbnailClick(index)}
              />
            </div>
            <div className=" w-full md:w-[58%] lg:w-[63%]   sm:pl-0 capitalize">
              <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-5">
                F21 Mono color series led neon flex
              </p>
              <img
                src={line1}
                alt=""
                className=" pt-1 md:block hidden xl:w-[90%] h-10"
              />
              <div className="md:text-xs  lg:text-[13px] leading-8 md:leading-8 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                <ul className="list-disc">
                  <li className="">Uniform and even light output.</li>
                  <li className="">Dome surface with 270 degree beam angle.</li>
                  <li className="">Constant Current IC built in optional.</li>
                  <li> Dimmable with Dali, 0/1-10, DMX,PWM.</li>
                  <li>High Lumen output, up to 320lm/m for 12W version.</li>
                  <li>High Reliability.</li>
                  <li>
                    Lumen maintenance - 70 000 Hours L70 25°C , 50 000 Hours L70
                    50°C
                  </li>
                  <li>Housing material - Eco PVC or Silicone</li>
                  <li>Installation temperature - 0°C to -55°C</li>
                  <li>Ambient temperature - -25°C to +55°C</li>
                  <li>
                    Ingress protection - IP68 wet location submersible* to 2m
                  </li>
                  <li>
                    Warranty - 3 years as standard, 5 years garuntee maximum
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-start md:pl-10 lg:pl-[22%]">
                <a
                  href={product1}
                  download
                  className=" flex justify-center items-center mt-5 sm:mt-3  w-48 h-10 rounded bg-white shadow-md"
                >
                  Specification File
                  <MdDownload className="text-[#F2667C] my-1 mx-2 " />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div>
        <div className="w-full md:px-14 px-5 rounded-t-xl pt-5">
          <div className="">
            <div className="">
              <p className="text-center font-semibold text-xl py-5">
                Technical Specification
              </p>
            </div>
            <div className="bg-white flex flex-col  py-5 px-10 shadow-2xl drop-shadow-2xl overflow-x-scroll">
              <div className="w-fit">
                <table className="border-collapse border border-black">
                  <thead>
                    <tr>
                      <th className="border border-black text-xs px-3 py-2 text-start">
                        Model
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-24V-5050-72
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-24V-5050-60
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-24V-5050-60-U10
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-36V-5050-60
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-24V-3528-72
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-12V-3528-72
                      </th>
                      <th className="border border-gray-400 text-xs px-3 py-2">
                        F21-24V-2835-72-CC
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Specification.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-black text-xs px-3 py-2 w-40 font-semibold">
                          {item.name}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.spec1}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.datas}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.spec2}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.spec3}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.spec4}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.spec5}
                        </td>
                        <td className="border border-gray-400 text-xs px-3 py-2">
                          {item.spec6}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <table className="border-collapse border border-black">
          <tbody>
            {Specification2.map((item, index) => (
            <tr key={index}>
              <td className="bg-gray-400 border border-black text-xs px-[43px] py-2 ">{item.name}</td>
              <td className="border border-gray-400 text-xs px-3 py-2 w-full">{item.spec1}</td>
            </tr>
            ))}
          </tbody>
        </table> */}
              </div>

              {/* <div className="overflow-x-auto mt-5">
        
      </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10">
        <h2 className="text-center text-xl font-semibold">
          Physical Specifications
        </h2>
        <div className="flex justify-center px-5 gap-5">
          <img
            src={phySpec1}
            alt=""
            className="sm:w-96 lg:w-[800px] mb-5 lg:mb-0"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly items-center px-10 gap-5">
          <img
            src={physpec2}
            alt=""
            className=" sm:w-96 lg:w-[300px] mb-5 lg:mb-0"
          />
          <img
            src={physpec3}
            alt=""
            className=" sm:w-96 lg:w-[300px] mb-5 lg:mb-0"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly items-center px-10 gap-5">
          <img
            src={physpec4}
            alt=""
            className=" sm:w-96 lg:w-[300px] mb-5 lg:mb-0"
          />
          <img
            src={physpec5}
            alt=""
            className=" sm:w-96 lg:w-[300px] mb-5 lg:mb-0"
          />
        </div>
        <div className="flex  flex-col  py-10 space-y-5">
          <h2 className="text-center text-xl font-semibold">
            White Color Charts
          </h2>{" "}
          <div className="flex md:flex-row flex-col px-5">
            <div>
              <p className="md:px-32 px-5">White Color Charts</p>
              <div className="flex flex-col justify-between items-center">
                <img
                  src={whiteChart}
                  alt=""
                  className="md:w-[80%] px-5 mb-5 lg:mb-0"
                />
              </div>
            </div>
            <div>
              <p className="md:px-32 px-5">Photometric <br/> F21-24V-5050-60-12W-3000K</p>
              <div className="flex flex-col justify-between items-center">
                <img
                  src={whiteChart1}
                  alt=""
                  className="md:w-[80%] px-5 mb-5 lg:mb-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col space-y-5">
          <h2 className="text-center text-xl font-semibold">
              Dimming system Connection
          </h2>
          <div className=" space-y-10">
            <p className="md:px-32 px-5">0-10V dimming system</p>
            <div className="flex flex-col justify-between items-center">
              <img
                src={dimming2}
                alt=""
                className="md:w-[80%] px-5 mb-5 lg:mb-0"
              />
            </div>
            <p className="md:px-32 px-5">DMX512 dimming system</p>
            <div className="flex flex-col justify-between items-center">
              <img
                src={dimming1}
                alt=""
                className="md:w-[80%] px-5 mb-5 lg:mb-0"
              />
            </div>
            <p className="md:px-32 px-5">DALI dimming system</p>
            <div className="flex flex-col justify-between items-center">
              <img
                src={dimming3}
                alt=""
                className="md:w-[80%] px-5 mb-5 lg:mb-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Explore />
      </div>
    </article>
  );
};
