import React from "react";
import dl228light1 from "../../assets/DL228A-1.jpg";
import dl228light2 from "../../assets/DL228A-2.jpg";
import dl228light3 from "../../assets/DL228A-3.jpg";
import dl228light4 from "../../assets/DL228A-4.jpg";
import img1 from "../../assets/light2.jpg";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import product1 from "../../assets/228Series.pdf";
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
import dl228a from "../../assets/dl228a.png";
import dl228b from "../../assets/dl228b.png";
import pd228 from "../../assets/pd228.png";
import tl228 from "../../assets/tl228.png";
import series228pic1 from "../../assets/228seriespic1.png";
import series228pic2 from "../../assets/228seriespic2.png";
import series228pic3 from "../../assets/228seriespic3.png";

export const IndoorDL228 = () => {
  //   React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  const bgimages = [dl228light1, dl228light2, dl228light3, dl228light4];

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
      spec2: "Ø65*157",
      spec3: "Ø85*178",
      spec4: "Ø85*178",
      spec5: "Ø100*211",
      spec6: "Ø100*211",
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
      spec1: "AC230V",
      spec2: "AC230V",
      spec3: "AC230V",
      spec4: "AC230V",
      spec5: "AC230V",
      spec6: "AC230V",
    },
    {
      name: "Input Voltage(V)",
      spec1: "AC200-240V",
      spec2: "AC200-240V",
      spec3: "AC200-240V",
      spec4: "AC200-240V",
      spec5: "AC200-240V",
      spec6: "AC200-240V",
    },
    {
      name: "Light Source",
      spec1: "COB",
      spec2: "COB",
      spec3: "COB",
      spec4: "COB",
      spec5: "COB",
      spec6: "COB",
    },
    {
      name: "SDCM",
      spec1: "<6",
      spec2: "<6",
      spec3: "<6",
      spec4: "<6",
      spec5: "<6",
      spec6: "<6",
    },
    {
      name: "CCT(K)",
      spec1: "1-CCT: 2700K/3000K/4000K/5000K",
      spec2: "1-CCT: 2700K/3000K/4000K/5000K",
      spec3: "1-CCT: 2700K/3000K/4000K/5000K",
      spec4: "1-CCT: 2700K/3000K/4000K/5000K",
      spec5: "1-CCT: 2700K/3000K/4000K/5000K",
      spec6: "1-CCT: 2700K/3000K/4000K/5000K",
    },
    {
      name: "CCT Selection DIP Switch",
      spec1: "NO",
      spec2: "NO",
      spec3: "NO",
      spec4: "NO",
      spec5: "NO",
      spec6: "NO",
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
      spec1: "80(90/97 optional)",
      spec2: "80(90/97 optional)",
      spec3: "80(90/97 optional)",
      spec4: "80(90/97 optional)",
      spec5: "80(90/97 optional)",
      spec6: "80(90/97 optional)",
    },
    {
      name: "Beam Angle (°)",
      spec1: "24° / 30° / 45°",
      spec2: "24° / 30° / 45°",
      spec3: "24° / 36° / 60°",
      spec4: "24° / 36° / 60°",
      spec5: "24° / 36° / 60°",
      spec6: "24° / 36° / 60°",
    },
    {
      name: "LED Driver",
      spec1: "Built-in",
      spec2: "Built-in",
      spec3: "Built-in",
      spec4: "Built-in",
      spec5: "Built-in",
      spec6: "Built-in",
    },
    {
      name: "Electrical Class",
      spec1: "Class I",
      spec2: "Class I",
      spec3: "Class I",
      spec4: "Class I",
      spec5: "Class I",
      spec6: "Class I",
    },
    {
      name: "Ingress Protection (IP Rating)",
      spec1: "IP20",
      spec2: "IP20",
      spec3: "IP20",
      spec4: "IP20",
      spec5: "IP20",
      spec6: "IP20",
    },
    {
      name: "Product Finishing(Base)",
      spec1: "White RAL 9016/Black RAL9005",
      spec2: "White RAL 9016/Black RAL9005",
      spec3: "White RAL 9016/Black RAL9005",
      spec4: "White RAL 9016/Black RAL9005",
      spec5: "White RAL 9016/Black RAL9005",
      spec6: "White RAL 9016/Black RAL9005",
    },
    {
      name: "Materials of Optics",
      spec1: "PMMA",
      spec2: "PMMA",
      spec3: "PMMA",
      spec4: "PMMA",
      spec5: "PMMA",
      spec6: "PMMA",
    },
    {
      name: "Materials of Housing",
      spec1: "PC/Aluminum",
      spec2: "PC/Aluminum",
      spec3: "PC/Aluminum",
      spec4: "PC/Aluminum",
      spec5: "PC/Aluminum",
      spec6: "PC/Aluminum",
    },
    {
      name: "Lifetime (hr)",
      spec1: "50,000h",
      spec2: "50,000h",
      spec3: "50,000h",
      spec4: "50,000h",
      spec5: "50,000h",
      spec6: "50,000h",
    },
    {
      name: "Glow wire test (C )",
      spec1: "650°C",
      spec2: "650°C",
      spec3: "650°C",
      spec4: "650°C",
      spec5: "650°C",
      spec6: "650°C",
    },
    {
      name: "Operating Temp. (C )",
      spec1: "-20°C~40°C",
      spec2: "-20°C~40°C",
      spec3: "-20°C~40°C",
      spec4: "-20°C~40°C",
      spec5: "-20°C~40°C",
      spec6: "-20°C~40°C",
    },
    {
      name: "Storage Temp. (C )	",
      spec1: "-20°C~65°C",
      spec2: "-20°C~65°C",
      spec3: "-20°C~65°C",
      spec4: "-20°C~65°C",
      spec5: "-20°C~65°C",
      spec6: "-20°C~65°C",
    },
    {
      name: "Installation",
      spec1: "Surface mount",
      spec2: "Surface mount",
      spec3: "Surface mount",
      spec4: "Surface mount",
      spec5: "Surface mount",
      spec6: "Surface mount",
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
                    DL228A Anti-glare Lens Design Surface Mounted SpotlightThis
                    downlight is an anti-glare design. High lumen COB chip and
                    PMMA lens offer a uniform lighting output. AL6063 aluminum
                    lamp body provides excellent heat dissipation. Special lens
                    design reaches anti-glare effect and creates a comfortable
                    visual experience. Multiple beam angle lens optional,
                    modular lens design make a convenient maintenance. Easy
                    installation, recreational for various application.
                  </p>
                  <p className="-ml-4">
                    Integrated COB spot downlight features:
                  </p>
                  <li className="">Anti-glare design.</li>
                  <li className="">CRI80/90/97 available.</li>
                  <li className="">
                    {" "}
                    Modular lens design: 30°/45°for 10W, 36°/60°for 20W and
                    above.
                  </li>
                  <li>SDCM &lt; 6.</li>
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
            <table
              className="border-collapse border border-black w-full"
              style={{ tableLayout: "fixed" }}
            >
              <thead>
                <tr>
                  <th className="border border-black text-xs px-3 py-2 text-start ">
                    Model
                  </th>
                  <th className="border border-gray-400 text-xs px-3 py-2">
                    DL228A-10W
                  </th>
                  <th className="border border-gray-400 text-xs px-3 py-2">
                    DL228A-15W
                  </th>
                  <th className="border border-gray-400 text-xs px-3 py-2">
                    DL228A-20W
                  </th>
                  <th className="border border-gray-400 text-xs px-3 py-2">
                    DL228A-25W
                  </th>
                  <th className="border border-gray-400 text-xs px-3 py-2">
                    DL228A-30W
                  </th>
                  <th className="border border-gray-400 text-xs px-3 py-2">
                    DL228A-40W
                  </th>
                </tr>
              </thead>
              <tbody>
                {Specification.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-black text-xs px-3 py-2 font-semibold overflow-x-auto">
                      {item.name}
                    </td>
                    <td className="border border-gray-400 text-xs px-3 py-2 overflow-x-auto">
                      {item.spec1}
                    </td>
                    <td className="border border-gray-400 text-xs px-3 py-2 overflow-x-auto">
                      {item.spec2}
                    </td>
                    <td className="border border-gray-400 text-xs px-3 py-2 overflow-x-auto">
                      {item.spec3}
                    </td>
                    <td className="border border-gray-400 text-xs px-3 py-2 overflow-x-auto">
                      {item.spec4}
                    </td>
                    <td className="border border-gray-400 text-xs px-3 py-2 overflow-x-auto">
                      {item.spec5}
                    </td>
                    <td className="border border-gray-400 text-xs px-3 py-2 overflow-x-auto">
                      {item.spec6}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-0 lg:justify-evenly items-center pt-10">
        <img src={series228pic1} alt="" className="w-96 lg:px-0 px-10" />
        <section className="flex flex-col gap-10 p-4">
          <img src={series228pic2} className="w-80" alt="" />
          <img src={series228pic3} className="w-80" alt="" />
        </section>
      </div>
      <div className=" p-5 ">
        <div className="flex sm:px-14 px-4 sm:flex-row flex-col gap-10 items-center justify-center">
          <img src={dl228a} alt="" className="w-24 h-24" />

          <div className="sm:w-[90%]">
            <p className="font-medium pb-2">DL228A</p>
            <p className="text-[12px]">
              DL228A adopt high lumen COB chip and PMMA lens for uniform light
              effect and enhanced glare control. Aluminum profile with
              sufficient heat dissipation guarantee long lifespan. It offers a
              wide choice of beam angles 24°/30°/36°/45°/60° for optional.
            </p>
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
