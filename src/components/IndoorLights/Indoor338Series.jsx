import React from "react";
import Indoorlights338series1 from "../../assets/Indoor338-series1.jpg";
import Indoorlights338series2 from "../../assets/Indoor338-series2.jpg";
import Indoorlights338series3 from "../../assets/Indoor338-series3.jpg";
import Indoorlights338series4 from "../../assets/Indoor338-series4.jpg";
import img1 from "../../assets/light2.jpg";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import product1 from "../../assets/338Series.pdf";
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
import changable from "../../assets/changable.png";
import seriespic from "../../assets/338seriespic1.png";
import dl338 from "../../assets/dl338.png";
import dl338ab from "../../assets/dl338ab.png";
import pd338 from "../../assets/pd338.png";
import tl338 from "../../assets/tl338.png";
import sizeoptions from "../../assets/foursizeoptions.png";
import reflector from '../../assets/338pic2.png'

export const Indoor338Series = () => {
  React.useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, []);

  const bgimages = [
    Indoorlights338series2,
    Indoorlights338series3,
    Indoorlights338series4,
    Indoorlights338series1,
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
      name: "Dimension (mm)",
      spec1: "55*160",
      spec2: "",
      spec3: "65*180",
      spec4: "",
      spec5: "",
      spec6: "85*206",
      spec7: "",
      spec8: "",
      spec9: "100*220",
      spec10: "",
      spec11: "",
    },
    {
      name: "Watt(W)",
      spec1: "6W	",
      spec2: "10W",
      spec3: "10W",
      spec4: "15W",
      spec5: "10W / 12W / 15W",
      spec6: "20W",
      spec7: "25W",
      spec8: "15W / 20W / 25W",
      spec9: "30W",
      spec10: "35W",
      spec11: "25W / 30W / 35W",
    },
    {
      name: "Rated Input Voltage(V)",
      spec1: <p className="w-[1000px]">AC230V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Input Voltage(V)",
      spec1: <p className="w-[500px]">AC220-240V</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Light Source",
      spec1: <p className="w-[500px]">COB</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "SDCM",
      spec1: <p className="w-[500px]">&lt;5</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "CCT(K)",
      spec1: (
        <p className="w-[500px]">
          1-CCT: 2700K/3000K/4000K/5000K//3-CCT: 3000K + 4000K + 5000K
        </p>
      ),
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)",
      spec1: "600-750",
      spec2: "1030-1200",
      spec3: "1030-1200",
      spec4: "1550- 1750",
      spec5: "10W 1100-1250 12W 1250-1400 15W 1550-1750",
      spec6: "2300-2550",
      spec7: "2850-3150",
      spec8: "15W 1800-2000 20W 2300-2550 25W 2850-3150",
      spec9: "3300-3650",
      spec10: "3800-4100",
      spec11: "25W 2850-3150 30W 3300-3650 35W 3800-4100",
    },
    {
      name: "DIM  1-CCT Luminous Flux (lm) ±5%(White)",
      spec1: "550-700",
      spec2: "950-1150",
      spec3: "950-1150",
      spec4: "1500-1700",
      spec5: "-",
      spec6: "2150-2450",
      spec7: "2700-3000",
      spec8: "-",
      spec9: "3200-3500",
      spec10: "3650-4000",
      spec11: "-",
    },
    {
      name: "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)",
      spec1: "-",
      spec2: "-",
      spec3: "800-900",
      spec4: "1200-1400",
      spec5: "10W 900-1000 12W 1050-1150 15W 1200-1400",
      spec6: "1800-2000",
      spec7: "2300-2500",
      spec8: "15W 1500-1600 20W 1900-2050 25W 2300-2500",
      spec9: "2750-3050",
      spec10: "2900-3300",
      spec11: "25W 2300-2500 30W 2600-2900 35W 2900-3300",
    },
    {
      name: "DIM  3-CCT Luminous Flux (lm) ±5%(White)",
      spec1: "-",
      spec2: "-",
      spec3: "740-850",
      spec4: "1150-1350",
      spec5: "-",
      spec6: "1700-1900",
      spec7: "2150-2350",
      spec8: "-",
      spec9: "2550-2850",
      spec10: "2750-3100",
      spec11: "-",
    },
    {
      name: "CRI",
      spec1: <p className="w-[500px]"> 80/90/97(1-CCT) /90(3-CCT) </p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Beam Angle (°)",
      spec1: <p className="w-[500px]">24° / 36° / 60 </p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "UGR",
      spec1: <p className="w-[500px]"> &lt; 19 / &lt; 22 </p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "LED Driver",
      spec1: <p className="w-[500px]">Built-in</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Dimming  Option",
      spec1: <p className="w-[500px]">Triac</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Electrical Class",
      spec1: <p className="w-[500px]">Class I</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Ingress Protection (IP Rating)",
      spec1: <p className="w-[500px]">IP20</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Product Finishing (Base)",
      spec1: <p className="w-[500px]">Black RAL9005/White RAL9016</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Materials of Optics",
      spec1: <p className="w-[500px]">Aluminum+transparent tempered glass</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Materials of Housing",
      spec1: <p className="w-[500px]">Aluminum</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Lifetime (hr)",
      spec1: <p className="w-[500px]">50,000h</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Glow wire test (C )",
      spec1: <p className="w-[500px]">650°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Operating Temp. (C )",
      spec1: <p className="w-[500px]">-20°C~40°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Storage Temp. (C )	",
      spec1: <p className="w-[500px]">-20°C~60°C</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },
    {
      name: "Installation",
      spec1: <p className="w-[500px]">Surface mount/Pendant/Recessed/Track</p>,
      spec2: "",
      spec3: "",
      spec4: "",
      spec5: "",
      spec6: "",
      spec7: "",
      spec8: "",
      spec9: "",
      spec10: "",
      spec11: "",
    },

    // {
    //   name:"",
    //   dimension:"55*160",
    //   watt:"12",
    //   ratedInput:"",
    //   inputVoltage:"",
    //   lightSource:"",
    //   sdcm:"",
    //   cct:"",
    //   nondim1:"",
    //   dim1:"",
    //   nondim3:"",
    //   dim3:"",
    //   cri:"",
    //   beamAngle:"",
    //   ugr:"",
    //   ledDriver:"",
    //   dimmingOption:"",
    //   electricalClass:"",
    //   ingressProtection:"",
    //   productFinishing:"",
    //   materialsofOptics:"",
    //   materialsofHousing:"",
    //   lifetime:"",
    //   glowwiretest:"",
    //   operatingTemp:"",
    //   storageTemp:"",
    //   installation:"",
    // },
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
              &nbsp; 338 Series
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
                338 Series Pandent light/Track lighti/ Downlight
              </p>
              <img
                src={line1}
                alt=""
                className=" pt-1 md:block hidden xl:w-[90%] h-10"
              />
              <div className="md:text-xs  lg:text-[13px]  leading-7  md:leading-7 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                <ul className="list-disc">
                  <p className="-ml-4 pb-5 text-justify">
                    This is a DIY modular series with an exquisite appearance
                    and anti-glare UGR19 design. It shares one module lamp body
                    but compatible with 6 kinds of installation
                    accessories(track/track pendant/surface pendant/surface
                    mounted/ ceiling canopy/recessed) and 3 replaceable
                    reflectors which realized a liberalization DIY
                    modularization . The lamp adopts Bridgelux brand COB light
                    source, and the lumen efficiency reaches 120lm/W so it can
                    do more energy saving.
                  </p>
                  <li className="">
                    Four size options: Ø55mm, Ø65mm, Ø85mm, Ø100mm.
                  </li>
                  <li className="">
                    Multiple installation ways: track/track pendant/surface
                    pendant/surface mounted/ceiling canopy/recessed.
                  </li>
                  <li className="">Anti-glare UGR &lt; 19 for whole series.</li>
                  <li>High lumen efficiency, 120lm/W.</li>
                  <li>
                    Interchangeable CCT and interchangeable wattage with DIP
                    switch (except Ø55mm module).
                  </li>
                  <li>Reflector module:24°/36°/60° exchangeable.</li>
                  <li>
                    Finished color: White/Black for lamp body, white/black/gold
                    for front ring.
                  </li>
                  <li>
                    Internal flicker free driver for on/off, Triac dim and DALI
                    dim (except Ø55mm module).
                  </li>
                  <p className="-ml-4 pt-5 text-justify">
                    Application Areas：Applicable for commercial lighting in
                    office, hotel, restaurant, shops, supermarket, art-gallery,
                    museum, etc; Also suitable for residential lighting for
                    bedroom, living room, corridor, etc.
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

      <div className="w-full md:px-14 px-5 rounded-t-xl py-5">
        <div className="">
          <div className="">
            <p className="text-center font-semibold text-xl py-5">
              Technical Specification
            </p>
          </div>

          <div className="w-full lg:overflow-auto overflow-x-scroll drop-shadow-2xl">
            <table
              className=" border border-black xl:w-full w-[1400px]"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="border-b border-gray-400">
                <tr>
                  <th className="border-r border-black text-xs px-3 py-2 text-start ">
                    Model
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-55-6W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-55-10W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-65-10W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-65-15W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-65-15W-A3
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-85-20W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-85-25W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-85-25W-A3
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-100-30W
                  </th>
                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-100-35W
                  </th>

                  <th className="border-r border-gray-400 text-xs px-3 py-2">
                    338-100-35W-A3
                  </th>
                </tr>
              </thead>
              <tbody>
                {Specification.map((item, index) => (
                  <tr key={index}>
                    <td className="border-r border-b border-black text-xs px-3 py-2 font-semibold ">
                      {item.name}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                       
                           item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec1}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec2}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec3}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                         item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec4}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec5}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec6}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec7}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec8}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec9}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? ""
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec10}
                    </td>
                    <td
                      className={` border-b border-gray-400 text-xs px-3 py-2   ${
                        item.name === "Dimension (mm)"
                          ? "border-r"
                          : item.name === "Watt(W)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  1-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "Non-DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : item.name ===
                            "DIM  3-CCT Luminous Flux (lm) ±5%(White)"
                          ? "border-r"
                          : ""
                      }`}
                    >
                      {item.spec11}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-0 lg:justify-evenly items-center py-10">
        <img src={seriespic} alt="" className="w-96 lg:px-0 px-5"/>
        <section className="flex flex-col gap-10">
          <div>
            <div className="flex sm:flex-row flex-col items-center sm:items-start gap-8">
              <div>
                <h2 className="font-medium text-sm pl-3 text-start">Four size options :</h2>
                <img src={sizeoptions} alt="" className="sm:w-52 w-72" />
              </div>
              <div>
                <h2 className="font-medium text-sm pl-5 text-start">3-CCT changeable :</h2>
                <img src={changable} alt="" className="sm:w-52 w-72 mt-4 ml-3" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex  sm:flex-row flex-col items-center sm:items-start  gap-8">
              <div>
                <h2 className="font-medium text-sm text-start sm:pl-3">Replaceable reflector :</h2>
                <img src={reflector} alt="" className="sm:w-52 w-64 mt-4" />
              </div>
              <div className="space-y-3 mr-32 sm:mr-0">
                <h2 className="font-medium text-sm text-center">Power adjustable :</h2>
                <div className="pl-5 space-y-1 mt-4">
                <p className="text-xs">Ø65mm :10W/12W/15W</p>
                <p className="text-xs">Ø85mm :15W/20W/25W</p>
                <p className="text-xs">Ø100mm :25W/30W/35W</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="py-5 p-5 ">
        <h2 className="font-bold sm:text-xl py-5 text-center">
          338 SERIES
        </h2>

        <div className="flex flex-col gap-10 py-5">
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="sm:w-[30%] flex justify-center items-center">
              <img src={dl338} alt="" className="w-24 h-24" />
            </div>
            <div className="sm:w-[70%]">
              <ul className="flex flex-col text-justify justify-center items-center sm:justify-start sm:items-start gap-2">
                <p className="font-medium">DL338</p>
                <li className="text-[12px] w-[95%]">
                  DL338 is a DIY modular series with an exquisite appearance and
                  anti-glare UGR19 design, 6 kinds of installation ways, 3
                  reflectors and 3 front ring colors can be exchangeable. It
                  adopts brand Bridgelux COB led chip with 120lm/W light
                  efficiency, AL6063 Aluminum profile provides excellent thermal
                  dissipation. Four size options : Ø55mm, Ø65mm, Ø85mm, Ø100mm.
                  It can do triac dim, DALI dim, CCT interchangeable and wattage
                  adjustable.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-5 ">
            <div className="sm:w-[30%] flex justify-center items-center">
              <img src={dl338ab} alt="" className="w-24 h-24" />
            </div>
            <div className="sm:w-[70%]">
              <ul className=" flex flex-col text-justify justify-center items-center sm:justify-start sm:items-start gap-2">
                <p className="font-medium ">DL338A/B</p>
                <li className="text-[12px] w-[95%]">
                  DL338A/B is a DIY modular series with an exquisite appearance
                  and anti-glare UGR19 design, 6 kinds of installation ways, 3
                  reflectors and 3 front ring colors can be exchangeable. It
                  adopts brand Bridgelux COB led chip with 120lm/W light
                  efficiency, AL6063 Aluminum profile provides excellent thermal
                  dissipation. Four size options : Ø55mm, Ø65mm, Ø85mm, Ø100mm.
                  It can do triac dim, DALI dim, CCT interchangeable and wattage
                  adjustable.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="sm:w-[30%] flex justify-center items-center">
              <img src={pd338} alt="" className="w-24 h-24" />
            </div>
            <div className="sm:w-[70%]">
              <ul className="  flex flex-col text-justify justify-center items-center sm:justify-start sm:items-start gap-2">
                <p className="font-medium">PD338A/B</p>
                <li className="text-[12px] w-[95%]">
                  PD338A/B is a DIY modular series with an exquisite appearance
                  and anti-glare UGR19 design, 6 kinds of installation ways, 3
                  reflectors and 3 front ring colors can be exchangeable. It
                  adopts brand Bridgelux COB led chip with 120lm/W light
                  efficiency, AL6063 Aluminum profile provides excellent thermal
                  dissipation. Four size options : Ø55mm, Ø65mm, Ø85mm, Ø100mm.
                  It can do triac dim, DALI dim, CCT interchangeable and wattage
                  adjustable
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="sm:w-[30%] flex justify-center items-center">
              <img src={tl338} alt="" className="w-24 h-24 " />
            </div>
            <div className="sm:w-[70%]">
              <ul className="flex flex-col text-justify justify-center items-center sm:justify-start sm:items-start gap-2">
                <p className="font-medium">TL338</p>
                <li className="text-[12px] w-[95%]">
                  TL338 is a DIY modular series with an exquisite appearance and
                  anti-glare UGR19 design, 6 kinds of installation ways, 3
                  reflectors and 3 front ring colors can be exchangeable. It
                  adopts brand Bridgelux COB led chip with 120lm/W light
                  efficiency, AL6063 Aluminum profile provides excellent thermal
                  dissipation. Four size options : Ø55mm, Ø65mm, Ø85mm, Ø100mm.
                  It can do triac dim, DALI dim, CCT interchangeable and wattage
                  adjustable.
                </li>
              </ul>
            </div>
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
