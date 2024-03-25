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

export const IndoorPD228 = () => {
  React.useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, []);

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
  const Specification1 = [
    {
      name: "Dimension(mm)",
      spec1: "Ø65*1265",
      spec2: "",
      spec3: "Ø85*1285",
      spec4: "",
      spec5: "Ø100*1320",
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
      spec1: <p className="w-[500px]">AC230V </p>,
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
      spec1: <p className="w-[500px]"> &lt; 6</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },
    {
      name: "CCT(K)",
      spec1: (
        <p className="w-[500px]">
          1-CCT: 2700K/3000K/4000K/5000K|| 3-CCT: 3000K + 4000K + 5000K
        </p>
      ),
      spec2: <h2 className=""></h2>,
      spec3: <h2 className=""></h2>,
      spec4: <h2 className=""></h2>,
      spec5: <h2 className=""></h2>,
      spec6: <h2 className=""></h2>,
    },
    {
      name: "CCT Selection DIP Switch",
      spec1: <p className="w-[500px]">Yes</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: <p className="">No</p>,
    },
    {
      name: "Non-DIM  1-CCT Luminous Flux (lm) ±5%",
      spec1: "900-1100",
      spec2: "1350-1650",
      spec3: "1800-2250",
      spec4: "2150-2700",
      spec5: "2650-3050",
      spec6: "3550-4200",
    },
    {
      name: "DIM 1-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },
    {
      name: "Non-DIM 3-CCT Luminous Flux (lm) ±5%",
      spec1: "750-950",
      spec2: "1050-1400",
      spec3: "1750-2100",
      spec4: "2150-2600",
      spec5: "2300-2850",
      spec6: "-",
    },

    {
      name: "DIM 3-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },

    {
      name: "CRI",
      spec1: <p className="w-[500px]">80/90/97（ 1-CCT) /90（3-CCT)</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },
    {
      name: "Beam Angle (°)",
      spec1: <p className="w-[500px]">24° / 36° / 60°</p>,
      spec2: "",
      spec3: "",
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
      spec1: <p className="w-[500px]">Aluminum</p>,
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
      spec1: <p className="w-[500px]">Pendant</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
    },
  ];
  const Specification2 = [
    {
      name: "Dimension(mm)",
      spec1: "Ø65*1265",
      spec2: <p className="">Ø85*1285</p>,
      spec3: "",
      spec4: "",
      spec5: "Ø100*1320",
    },
    {
      name: "Watt(W)",
      spec1: "10W	",
      spec2: "15W",
      spec3: "20W",
      spec4: "25W",
      spec5: "30W",
    },
    {
      name: "Rated Input Voltage(V)",
      spec1: <p className="w-[500px]">AC230V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Input Voltage(V)",
      spec1: <p className="w-[500px]">AC200-240V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Light Source",
      spec1: <p className="w-[500px]">COB</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "SDCM",
      spec1: <p className="w-[500px]">&lt;6</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "CCT(K)",
      spec1: (
        <h2 className="w-[500px]">
          1-CCT: 2700K/3000K/ 4000K/5000K || 3-CCT: 3000K + 4000K + 5000K
        </h2>
      ),
      spec2: <h2 className=""></h2>,
      spec3: <h2 className=""></h2>,
      spec4: <h2 className=""></h2>,
      spec5: <h2 className=""></h2>,
    },
    {
      name: "CCT Selection DIP Switch",
      spec1: <p className="">Yes</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Non-DIM  1-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "DIM 1-CCT Luminous Flux (lm) ±5%",
      spec1: "850-1050",
      spec2: "1350-1650 ",
      spec3: "1750-2150",
      spec4: "1950-2450",
      spec5: "2450-2800",
    },
    {
      name: "Non-DIM 3-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },

    {
      name: "DIM 3-CCT Luminous Flux (lm) ±5%",
      spec1: "700-890",
      spec2: "1050-1400",
      spec3: "1700-2050",
      spec4: "1950-2350",
      spec5: "2100-2650",
    },

    {
      name: "CRI",
      spec1: <p className="w-[500px]">80/90/97（ 1-CCT) /90（3-CCT)</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Beam Angle (°)",
      spec1: <p className="w-[500px]">24° / 36° / 60°</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "LED Driver",
      spec1: <p className="w-[500px]">Built-in</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Electrical Class",
      spec1: <p className="w-[500px]">Class I</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Ingress Protection (IP Rating)",
      spec1: <p className="w-[500px]">IP20</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Product Finishing(Base)",
      spec1: <p className="w-[500px]">White RAL 9016/Black RAL9005</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Materials of Optics",
      spec1: <p className="w-[500px]">PMMA</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Materials of Housing",
      spec1: <p className="w-[500px]">Aluminum</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Lifetime (hr)",
      spec1: <p className="w-[500px]">50,000h</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Glow wire test (C )",
      spec1: <p className="w-[500px]">650°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Operating Temp. (C )",
      spec1: <p className="w-[500px]">-20°C~40°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Storage Temp. (C )	",
      spec1: <p className="w-[500px]">-20°C~65°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Installation",
      spec1: <p className="w-[500px]">Pendant</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
  ];
  const Specification3 = [
    {
      name: "Dimension(mm)",
      spec1: "Ø65*1265",
      spec2: "",
      spec3: "Ø85*1285",
      spec4: "Ø100*1320",
      spec5: "",
    },
    {
      name: "Watt(W)",
      spec1: "10W	",
      spec2: "15W",
      spec3: "20W",
      spec4: "25W",
      spec5: "30W",
    },
    {
      name: "Rated Input Voltage(V)",
      spec1: <p className="w-[500px]">AC230V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Input Voltage(V)",
      spec1: <p className="w-[500px]">AC200-240V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Light Source",
      spec1: <p className="w-[500px]">COB</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "SDCM",
      spec1: <p className="w-[500px]">&lt;6</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "CCT(K)",
      spec1: <h2 className="w-[500px]">1-CCT: 2700K/3000K /4000K/5000K</h2>,
      spec2: <h2></h2>,
      spec3: <h2></h2>,
      spec4: <h2></h2>,
      spec5: <h2></h2>,
    },
    {
      name: "CCT Selection DIP Switch",
      spec1: <p className="w-[500px]">No</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Non-DIM  1-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "DIM 1-CCT Luminous Flux (lm) ±5%",
      spec1: "900-1200",
      spec2: "1350-1650",
      spec3: "1800-2250",
      spec4: "2150-2700",
      spec5: "2500-3250",
    },
    {
      name: "Non-DIM 3-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },

    {
      name: "DIM 3-CCT Luminous Flux (lm) ±5%",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },

    {
      name: "CRI",
      spec1: <p className="w-[500px]">80(90/97 optional)</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Beam Angle (°)",
      spec1: <p className="w-[500px]">24° / 36° / 60°</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "LED Driver",
      spec1: <p className="w-[500px]">Built-in</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Electrical Class",
      spec1: <p className="w-[500px]">Class I</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Ingress Protection (IP Rating)",
      spec1: <p className="w-[500px]">-</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Product Finishing(Base)",
      spec1: <p className="w-[500px]">White RAL 9016/Black RAL9005</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Materials of Optics",
      spec1: <p className="w-[500px]">PMMA</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Materials of Housing",
      spec1: <p className="w-[500px]">Aluminum</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Lifetime (hr)",
      spec1: <p className="w-[500px]">50,000h</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Glow wire test (C )",
      spec1: <p className="w-[500px]">650°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Operating Temp. (C )",
      spec1: <p className="w-[500px]">-20°C~40°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Storage Temp. (C )	",
      spec1: <p className="w-[500px]">-20°C~65°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
    },
    {
      name: "Installation",
      spec1: <p className="w-[500px]">Pendant</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
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
              &nbsp; PD228
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
            <div className=" w-full md:w-[58%] lg:w-[63%]   sm:pl-0 ">
              <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-5">
                PD228 interchangeable beam angle led pendant light
              </p>
              <img
                src={line1}
                alt=""
                className=" pt-1 md:block hidden xl:w-[90%] h-10"
              />
              <div className="md:text-xs  lg:text-[13px]  leading-7  md:leading-7 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                <ul className="list-disc">
                  <p className="-ml-4 pb-5 text-justify">
                    This pendant light is an anti-glare design. High-lumen COB
                    chip and PMMA lens offer a uniform lighting output. AL6063
                    aluminum lamp body provides excellent heat dissipation.
                    Special lens design reaches an anti-glare effect and creates
                    a comfortable visual experience. Multiple beam angle lens
                    optional, modular lens design make a convenient maintenance.
                    Easy installation, recreational for various applications.
                  </p>
                  <li className="">Anti-glare design.</li>
                  <li className="">CRI80/90/97 available.</li>
                  <li className=""> Modular lens design: 24°/36°/60°.</li>
                  <li>Flicker free internal driver.</li>
                  <li>Dimming way: Non-dim, triac dim, DALI dim.</li>
                  <p className="pt-5 -ml-4 text-justify">
                    Application Areas: Applicable for residential lighting in
                    bedrooms, living rooms, corridor etc, also suitable for
                    commercial lighting in office, hotel, restaurant etc.
                  </p>
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

      <div className="w-full md:px-14  rounded-t-xl py-5">
        <div className="">
          <div className="">
            <p className="text-center font-semibold text-xl py-5">
              Technical Specification
            </p>
          </div>

          <div className="w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl">
            <h2 className="font-semibold text-sm pt-5 pb-2">
              Technical Data Sheet (Non-Dimmable) :
            </h2>
            <table
              className="border border-black xl:w-full w-[1400px]"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="border-b border-gray-400">
                <tr>
                  <th className="border-r border-black text-xs px-3 py-2 text-start ">
                    Model
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-10W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-15W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-20W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-25W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-30W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-40W
                  </th>
                </tr>
              </thead>
              <tbody>
                {Specification1.map((item, index) => (
                  <tr key={index}>
                    <td
                      className={`border-r border-b border-black text-xs px-3 py-2 font-semibold `}
                    >
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
                          ? "border-r"
                          : item.name === "Non-DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          ? "border-r"
                          : item.name === "Non-DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          ? "border-r"
                          : item.name === "Non-DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          ? "border-r"
                          : item.name === "Non-DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          ? "border-r"
                          : item.name === "Non-DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "CCT Selection DIP Switch"
                          ? "border-r"
                          : ""
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
                          : item.name === "Non-DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "Non-DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          
                          : ""
                      }`}
                    >
                      {item.spec6}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl">
            <h2 className="font-semibold text-sm pt-5 pb-2">
              Technical Data Sheet (Triac Dimmable) :
            </h2>
            <table
              className="border border-black xl:w-full w-[1400px]"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="border-b border-gray-400">
                <tr>
                  <th className="border-r border-black text-xs px-3 py-2 text-start ">
                    Model
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-10W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-15W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-20W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-25W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-30W
                  </th>
                </tr>
              </thead>
              <tbody>
                {Specification2.map((item, index) => (
                  <tr key={index}>
                    <td
                      className={`border-r border-b border-black text-xs px-3 py-2 font-semibold`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec1}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec4}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : item.name === "DIM 3-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl">
            <h2 className="font-semibold text-sm pt-5 pb-2">
              Technical Data Sheet (DALI Dimmable) :
            </h2>
            <table
              className="border border-black xl:w-full w-[1400px]"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="border-b border-gray-400">
                <tr>
                  <th className="border-r border-black text-xs px-3 py-2 text-start ">
                    Model
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-10W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-15W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-20W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-25W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    PD228-30W
                  </th>
                </tr>
              </thead>
              <tbody>
                {Specification3.map((item, index) => (
                  <tr key={index}>
                    <td
                      className={`border-r border-b border-black text-xs px-3 py-2 font-semibold`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
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
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec2}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec3}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec4}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension(mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name === "DIM 1-CCT Luminous Flux (lm) ±5%"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-10 lg:gap-0 lg:justify-evenly items-center pt-10">
        <img src={series228pic1} alt="" className="w-96 lg:px-0 px-5" />
        <section className="flex flex-col gap-10 p-4">
          <img src={series228pic2} className="w-80" alt="" />
          <img src={series228pic3} className="w-80" alt="" />
        </section>
      </div>
      <div className=" sm:p-5 ">
        

          <h1 className="text-center font-bold text-xl">PD 228</h1>
          <div className="flex sm:px-14 px-5 sm:flex-row flex-col gap-10 items-center justify-center">
            <img src={pd228} alt="" className="w-24 h-24" />

            <div className="sm:w-[90%]">
              <p className="font-medium pb-2 text-start">PD228</p>
              <p className="text-[12px] sm:text-start text-justify">
                PD228 pendant spot light is a high-performance LED luminaire
                that is ideal for commercial or residential applications. It
                adopts high lumen COB chip and PMMA lens for uniform light
                effect and enhanced glare control. AL6063 Aluminum profile with
                sufficient heat dissipation guarantee long lifespan.
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
