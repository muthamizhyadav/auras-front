import React from "react";
import dl228light1 from "../../assets/DL228A-1.jpg";
import dl228light2 from "../../assets/DL228A-2.jpg";
import dl228light3 from "../../assets/DL228A-3.jpg";
import dl228light4 from "../../assets/DL228A-4.jpg";
import img1 from "../../assets/light2.jpg";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import product1 from "../../assets/Linear Light L Series.pdf";
import line1 from "../../assets/line1.png";
import { FaGreaterThanEqual } from "react-icons/fa6";
import imagecontent1 from "../../assets/imagecontent 1.png";
import imagecontent2 from "../../assets/imagecontent 2.png";
import linearcontent1 from "../../assets/linearcontent1.png";
import linearcontent2 from "../../assets/linearcontent2.png";
import lightsway from "../../assets/lightsway.png";
import linearoutline from "../../assets/linearouline.png";
import { Explore } from "../Products/Explore";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";

export const IndoorDL228 = () => {
  //   React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  const bgimages = [
    dl228light1,
    dl228light2,
    dl228light3,
    dl228light4,

  ];

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
      name: "Dimension(mm)",
      spec1: "Ø65*157",
      spec2: "",
      spec3: "Ø85*178",
      spec4: "",
      spec5: "Ø100*211",
      spec6: "",
    },
    {
      name: "Watt(W)",
      spec1: "10W	",
      spec2: "15W",
      spec3: "20W",
      spec4: "25W",
      spec5: "30W",
      spec6: "40W",
    },
    {
      name: "Rated Input Voltage(V)",
      spec1: <p className="w-[500px]">AC230V</p> ,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "Input Voltage(V)",
      spec1: <p className="w-[500px]">AC200-240V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "Light Source",
      spec1: <p className="w-[500px]">COB</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "SDCM",
      spec1: <p className="w-[500px]">&lt;6</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",

    },
    {
      name: "CCT(K)",
      spec1: <p className="w-[500px]">1-CCT: 2700K/3000K/4000K/5000K</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },
    {
      name: "CCT Selection DIP Switch",
      spec1: <p className="w-[500px]">NO</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },
    {
      name: "Non-DIM  1-CCT Luminous Flux (lm) ±5%",
      spec1: "780-1100",
      spec2: "1200-1500",
      spec3: "1200-1500",
      spec4: "2150-2700",
      spec5: "2650-3050",
      spec6: "3550-4200",
    },
    
    {
      name: "CRI",
      spec1: <p className="w-[500px]">80(90/97 optional)</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "Beam Angle (°)",
      spec1: "24° / 30° / 45°",
      spec2: "",
      spec3: "24°/36°/60°",
      spec4: "",
      spec5: "",
      spec6: "",
    },
    {
      name: "LED Driver",
      spec1: <p className="w-[500px]">Built-in</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      
    },
    {
      name: "Electrical Class",
      spec1: <p className="w-[500px]">Class I</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      
    },
    {
      name: "Ingress Protection (IP Rating)",
      spec1: <p className="w-[500px]">IP20</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "Product Finishing(Base)",
      spec1: <p className="w-[500px]">White RAL 9016/Black RAL9005</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      
    },
    {
      name: "Materials of Optics",
      spec1: <p className="w-[500px]">PMMA</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      
    },
    {
      name: "Materials of Housing",
      spec1: <p className="w-[500px]">PC/Aluminum</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    
    },
    {
      name: "Lifetime (hr)",
      spec1: <p className="w-[500px]">50,000h</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      
    },
    {
      name: "Glow wire test (C )",
      spec1: <p className="w-[500px]">650°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    
    },
    {
      name: "Operating Temp. (C )",
      spec1: <p className="w-[500px]">-20°C~40°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "Storage Temp. (C )	",
      spec1: <p className="w-[500px]">-20°C~65°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },
    {
      name: "Installation",
      spec1: <p className="w-[500px]">Surface mount</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
     
    },

   
  ];

  return (
    <article className="font">
      <section className="">
        <div className="w-full flex pl-5 md:pl-0">
          <div className="w-[9.5%] md:block hidden"></div>
          <div className="w-[90.5%]">
            <p className="flex items-center font-medium sm:text-base xs:text-xs text-[10px] text-black py-5">
              Home &nbsp; <FaChevronRight className=" sm:size-3 size-2" />{" "}
              &nbsp; Products &nbsp;{" "}
              <FaChevronRight className=" sm:size-3 size-2" /> &nbsp; Indoor
              Lights &nbsp; <FaChevronRight className=" sm:size-3 size-2" />{" "}
              &nbsp; DL228A
            </p>
          </div>
        </div>

        <section className="">
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

                <div className="relative w-64 h-64 previewxs:w-80 previewxs:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] flex flex-col justify-center items-center">
                  <div className=" bg-white">
                    <img
                      className="w-full h-full "
                      src={bgimage[previewIndex]}
                      alt="preview"
                    />
                  </div>
                  <button
                    className="absolute right-3 xl:top-20 top-14 cursor-pointer text-black bg-white rounded-full p-1"
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
              DL228A Anti-glare Lens Design Surface Mounted Spotlight
              </p>
              <img
                src={line1}
                alt=""
                className=" pt-1 md:block hidden xl:w-[90%] h-10"
              />
              <div className="md:text-xs  lg:text-[13px]  leading-7  md:leading-7 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                <ul className="list-disc">
                  <p className="-ml-4 pb-5">
                   DL228A Anti-glare Lens Design Surface Mounted SpotlightThis downlight is an anti-glare design. High lumen COB chip and PMMA lens offer a uniform lighting output. AL6063 aluminum lamp body provides excellent heat dissipation. Special lens design reaches anti-glare effect and creates a comfortable visual experience. Multiple beam angle lens optional, modular lens design make a convenient maintenance. Easy installation, recreational for various application.
                  </p>
                  <p className="-ml-4">Integrated COB spot downlight features:</p>
                  <li className="">
                  Anti-glare design.
                  </li>
                  <li className="">
                  CRI80/90/97 available.
                  </li>
                  <li className="">  Modular lens design: 30°/45°for 10W, 36°/60°for 20W and above.</li>
                  <li>
                  SDCM &lt; 6.
                  </li>
                  <li>Flicker free internal driver.</li>
                </ul>
              </div>
              <div className="flex items-center justify-start md:pl-10 lg:pl-[22%]">
                <a
                  href={product1}
                  download
                  className=" flex justify-center items-center mt-5 sm:mt-3  w-48 h-10 rounded bg-white hover:bg-pink-100 shadow-md"
                >
                  Specification File
                  <MdDownload className="text-[#F2667C]  my-1 mx-2 " />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="w-full md:px-14 px-5 rounded-t-xl py-5">
        <div className="">
          <div className="">
            <p className="text-center font-semibold text-xl py-5">
              Technical Specification
            </p>
          </div>

          <div className="w-full p-5 overflow-x-scroll drop-shadow-2xl">
            <table className="border border-black xl:w-full w-[1400px]" style={{tableLayout:"fixed"}}>
              <thead className="border-b border-gray-400">
                <tr>
                  <th className="border-r border-black text-xs px-3 py-2 text-start ">
                    Model
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                  DL228A-10W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                  DL228A-15W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                  DL228A-20W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                  DL228A-25W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                  DL228A-30W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                  DL228A-40W
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {Specification.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b border-t border-r border-black text-xs px-3 py-2 font-semibold ">
                      {item.name}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r" : ""
                      }`}
                    >
                      {item.spec1}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r" : item.name === "Beam Angle (°)" ? "border-r" : ""
                      }`}
                    >
                      {item.spec2}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r" :  ""
                      }`}
                    >
                      {item.spec3}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r" : ""
                      }`}
                    >
                      {item.spec4}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r" : ""
                      }`}
                    >
                      {item.spec5}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r" : ""
                      }`}
                    >
                      {item.spec6}
                    </td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Explore />
      </div>

      {/* footer */}
    </article>
  );
};
