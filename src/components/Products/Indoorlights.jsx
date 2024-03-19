import React from "react";
import Indoor1 from "../../assets/indoorLight.jpg";
import Indoor2 from "../../assets/indoorLight2.jpg";
import indoor3 from "../../assets/indoorLight3.jpg";
import indoor4 from "../../assets/indoorLight4.jpg";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { Explore } from "./Explore";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";
import IndoorPdf from "../../assets/Indoor DL284.pdf";
import line1 from "../../assets/line1.png";
import { FaGreaterThanEqual } from "react-icons/fa6";
import spec1 from "../../assets/Indoor Spec.jpg";
import spec2 from "../../assets/overview.jpeg";
import DataTable from "react-data-table-component";
import overview from "../../assets/indoor light.png";
import overview1 from "../../assets/overview (2).jpeg";

const Indoorlights = () => {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const Specification = [
    {
      title: "",
      name: "Dimension(mm)",
      spec1: "Ø110*51",
      spec2:"Ø110*51",
      spec3: "Ø150x64",
      spec4:"Ø150x64",
      spec5: "Ø172x69",
      spec6:"Ø172x69",
      spec7:"Ø172x69",
      spec8:"Ø235x81",
      spec9:"Ø235x81",
      spec10:"Ø235x81",
    },
    {
      title: "",
      name: "Cutout (mm)",
      spec1: "Ø90-Ø95",
      spec2:"Ø90-Ø95",
      spec3: "Ø125-140",
      spec4:"Ø125-140",
      spec5: "Ø150-165",
      spec6:"Ø150-165",
      spec7:"Ø150-165",
      spec8:"Ø200-220",
      spec9:"Ø200-22",
      spec10:"Ø200-22",
    },  
    {
      title: "",
      name: "Watt(W)",
      spec1: "10W",
      spec2:"13w",
      spec3:"18w",
      spec4:"25w",
      spec5:"18w",
      spec6:"25w",
      spec7:"30w",
      spec8:"18w",
      spec9:"25w",
      spec10:"35w",
    },  
    {
      title: "",
      name: "Rated Input Voltage(V)",
      spec1: "AC230V",
      spec2: "AC230V",
      spec3: "AC230V",
      spec4:"AC230V",
      spec5:"AC230V",
      spec6:"AC230V",
      spec7:"AC230V",
      spec8:"AC230V",
      spec9:"AC230V",
      spec10:"AC230V",

    },  

    { 
      title: "", 
      name: "Input Voltage(V)",
      spec1:"AC220-240V",
      spec2: "AC220-240V",
      spec3: "AC220-240V",
      spec4:"AC220-240V",
      spec5:"AC220-240V",
      spec6:"AC220-240V",
      spec7:"AC220-240V",
      spec8:"AC220-240V",
      spec9:"AC220-240V",
      spec10:"AC220-240V",
    },
    {
      title: "",
      name: "LED Module Input",
      spec1:"DC33-38V",
      spec2: "DC33-38V",
      spec3: "DC33-38V",
      spec4:"DC33-38V",
      spec5:"DC33-38V",
      spec6:"DC33-38V",
      spec7:"DC33-38V",
      spec8:"DC33-38V",
      spec9:"DC33-38V",
      spec10:"DC33-38V",
    },
    { 
      title: "", 
      name: "Light Source",
      spec1:"COB / SMD",
      spec2: "COB / SMD",
      spec3: "COB / SMD",
      spec4:"COB / SMD",
      spec5:"COB / SMD",
      spec6:"COB / SMD",
      spec7:"COB / SMD",
      spec8:"COB / SMD",
      spec9:"COB / SMD",
      spec10:"COB / SMD",
    },

    { 
      name: "SDCM", 
      spec1:"<6",
      spec2: "<6",
      spec3: "<6",
      spec4:"<6",
      spec5:"<6",
      spec6:"<6",
      spec7:"<6",
      spec8:"<6",
      spec9:"<6",
      spec10:"<6",
    },

    // { 
    //   name: "CCT(K)",
    //   spec1:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec2: "COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec3: "COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec4:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec5:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec6:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec7:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec8:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec9:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    //   spec10:"COB:1-CCT: 2700K/3000K/4000K/5000K",
    // },

    {
      name: "CCT Selection DIP Switch",
      spec1:"Yes",
      spec2: "Yes",
      spec3: "Yes",
      spec4:"Yes",
      spec5:"Yes",
      spec6:"Yes",
      spec7:"Yes",
      spec8:"Yes",
      spec9:"Yes",
      spec10:"Yes",
    },
    {
      name:"Non-DIM 1-CCT Luminous Flux (lm) ±5%（COB）",
      spec1:"950-1050",
      spec2:"950-1050",
      spec2: "1200-1350",
      spec3: "1200-1350",
      spec4:"1200-1350",
      spec5:"1200-1350",
      spec6:"1200-1350",
      spec7:"1200-1350",
      spec8:"1200-1350",
      spec9:"1200-1350",
      spec10:"1200-1350",
    },
    {
      name:"Non-DIM 1-CCT Luminous Flux (lm) ±5% （SMD）",
      spec1:"750-950",
      spec2:"900-1300",
      spec3:"1650-1950",
      spec4:"2250-2750",
      spec5:"1650-1950",
      spec6:"2250-2750",
      spec7:"3150-3500",
      spec8:"1650-1950",
      spec9:"2250-2750",
      spec10:"3150-3850",
    },
   
    {
      name:"DIM 1-CCT Luminous Flux (lm) ±5%（COB）",
      spec1:"850-960",
      spec2:"850-960",
      spec3:"1080-1250",
      spec4:"1080-1250",
      spec5:"1080-1250",
      spec6:"1080-1250",
      spec7:"1080-1250",
      spec8:"1080-1250",
      spec9:"1080-1250",
      spec10:"1080-1250",
    },
    {
      name:"DIM 1-CCT Luminous Flux (lm) ±5%（SMD）",
      spec1:"670-900",
      spec2:"810-1200",
      spec3:"1500-1950",
      spec4:"2150-2750",
      spec5:"1500-1950",
      spec6:"2150-2750",
      spec7:"3000-3300",
      spec8:"1500-1950",
      spec9:"2150-2750",
      spec10:"3000-3650",
    },
    {
      name:"Non-DIM 3-CCT Luminous Flux (lm) ±5%(SMD)", 
      spec1:"650-800",
      spec2:"800-1000",
      spec3:"1500-1950",
      spec4:"2000-2750",
      spec5:"1550-1950",
      spec6:"2100-2750",
      spec7:"2900-3500",
      spec8:"1650-1950",
      spec9:"2250-2750",
      spec10:"3150-3850",
    },
    {
      name:"DIM 3-CCT Luminous Flux (lm) ±5% （SMD）",
      spec1:"580-740",
      spec2:"720-950",
      spec3:"1400-1950",
      spec4:"1900-2750",
      spec5:"1450-1950",
      spec6:"2000-2750",
      spec7:"2850-3300",
      spec8:"1500-1950",
      spec9:"2150-2750",
      spec10:"3000-3650",
    },
    {
      name:"CRI",
      spec1:"Ra>80",
      spec2:"Ra>80",
      spec3:"Ra>80",
      spec4:"Ra>80",
      spec5:"Ra>80",
      spec6:"Ra>80",
      spec7:"Ra>80",
      spec8:"Ra>80",
      spec9:"Ra>80",
      spec10:"Ra>80",
    },
    {
      name:"Beam Angle (°)",
      spec1:"COB: 24°/36° /60° SMD:75°",
      spec3:"COB: 24°/ 38°/60°    SMD: 90°",
      spec4:"COB: 24°/ 38°/60°    SMD: 90°",
      spec5:"COB: 24°/ 38°/60°    SMD: 90°",
      spec6:"COB: 24°/ 38°/60°    SMD: 90°",
      spec7:"COB: 24°/ 38°/60°    SMD: 90°",
      spec8:"COB: 24°/ 38°/60°    SMD: 90°",
      spec9:"COB: 24°/ 38°/60°    SMD: 90°",
      spec10:"COB: 24°/ 38°/60°    SMD: 90°",
    },
    {
      name:"UGR (COB)",
      spec1:"24° / 36°<21 ;",
      spec2:"24° / 36°<21 ;",
      spec3:"<19",
      spec4:"<22",
      spec5:"<19",
      spec6:"<19",
      spec7:"<19",
      spec8:"<19",
      spec10:"<19",
    },
    {
      name:"LED Driver",
      spec1:"Built-out",
      spec2:"Built-out",
      spec3:"	(60°<22)",
      spec4:"(60°<22)",
      spec5:"(60°<22)",
      spec6:"(60°<22)",
      spec7:"(60°<22)",
      spec8:"(60°<22)",
      spec9:"(60°<22)",
      spec10:"(60°<22)",
    },
    {
      name:"Dimming  Option",
      spec1:"Triac dim, 0-10V, DALI",
      spec2:"Triac dim, 0-10V, DALI",
      spec3:"	Triac dim, 0-10V, DALI",
      spec4:"Triac dim, 0-10V, DALI",
      spec5:"Triac dim, 0-10V, DALI",
      spec6:"Triac dim, 0-10V, DALI",
      spec7:"Triac dim, 0-10V, DALI",
      spec8:"Triac dim, 0-10V, DALI",
      spec9:"Triac dim, 0-10V, DALI",
      spec10:"Triac dim, 0-10V, DALI",
      
    },
    {
      name:"Electrical Class",
      spec1:"Class II",
      spec2:"Class II",
      spec3:"	Class II",
      spec4:"Class II",
      spec5:"Class II",
      spec6:"Class II",
      spec7:"Class II",
      spec8:"Class II",
      spec9:"Class II",
      spec10:"Class II",
    },
    {
      name:"Ingress Protection (IP Rating)",
      spec1:"IP65",
      spec2:"IP65",
      spec3:"	IP65",
      spec4:"IP65",
      spec5:"IP65",
      spec6:"IP65",
      spec7:"IP65",
      spec8:"IP65",
      spec9:"IP65",
      spec10:"IP65",
    },
    {
      name:"Impact Resistance (IK Rating)",
      spec1:"IK06",
      spec2:"IK06",
      spec3:"IK08",
      spec4:"IK08",
      spec5:"IK08",
      spec6:"IK08",
      spec7:"IK08",
      spec8:"IK08",
      spec9:"IK08",
      spec10:"IK08",
    },
    {
      name:"Product Finishing(Base)",
      spec1:"White  RAL9016;Black RAL9005",
      spec2:"White  RAL9016;Black RAL9005",
      spec3:"White  RAL9016;Black RAL9005",
      spec4:"White  RAL9016;Black RAL9005",
      spec5:"White  RAL9016;Black RAL9005",
      spec6:"White  RAL9016;Black RAL9005",
      spec7:"White  RAL9016;Black RAL9005",
      spec8:"White  RAL9016;Black RAL9005",
      spec9:"White  RAL9016;Black RAL9005",
      spec10:"White  RAL9016;Black RAL9005",
    },
    {
      name:"Materials of Optics",
      spec1:"PC+Al1070+Tempered glass",
      spec2:"PC+Al1070+Tempered glass",
      spec3:"PC+Al1070+Tempered glass",
      spec4:"PC+Al1070+Tempered glass",
      spec5:"PC+Al1070+Tempered glass",
      spec6:"PC+Al1070+Tempered glass",
      spec7:"PC+Al1070+Tempered glass",
      spec8:"PC+Al1070+Tempered glass",
      spec9:"PC+Al1070+Tempered glass",
      spec10:"PC+Al1070+Tempered glass",
    },
    {
      name:"Materials of Housing",
      spec1:"Aluminum Die-casting",
      spec2:"Aluminum Die-casting",
      spec3:"Aluminum Die-casting",
      spec4:"Aluminum Die-casting",
      spec5:"Aluminum Die-casting",
      spec6:"Aluminum Die-casting",
      spec7:"Aluminum Die-casting",
      spec8:"Aluminum Die-casting",
      spec9:"Aluminum Die-casting",
      spec10:"Aluminum Die-casting",
    },
    {
      name:"Lifetime (hr)",
      spec1:"50,000h",
      spec2:"50,000h",
      spec3:"50,000h",
      spec4:"50,000h",
      spec5:"50,000h",
      spec6:"50,000h",
      spec7:"50,000h",
      spec8:"50,000h",
      spec9:"50,000h",
      spec10:"50,000h",
    },
    {
      name:"Glow wire test (℃ )",
      spec1:"750℃",
      spec2:"750℃",
      spec3:"750℃",
      spec4:"750℃",
      spec5:"750℃",
      spec6:"750℃",
      spec7:"750℃",
      spec8:"750℃",
      spec9:"750℃",
      spec10:"750℃",
    },
    {
      name:"Operating Temp. (℃ )",
      spec1:"-20℃ ~45℃",
      spec2:"-20℃ ~45℃",
      spec3:"-20℃ ~45℃",
      spec4:"-20℃ ~45℃",
      spec5:"-20℃ ~45℃",
      spec6:"-20℃ ~45℃",
      spec7:"-20℃ ~45℃",
      spec8:"-20℃ ~45℃",
      spec9:"-20℃ ~45℃",
      spec10:"-20℃ ~45℃",
    },
    {
      name:"Storage Temp. (℃ )",
      spec1:"-20℃ ~65℃",
      spec2:"-20℃ ~65℃",
      spec3:"-20℃ ~65℃",
      spec4:"-20℃ ~65℃",
      spec5:"-20℃ ~65℃",
      spec6:"-20℃ ~65℃",
      spec7:"-20℃ ~65℃",
      spec8:"-20℃ ~65℃",
      spec9:"-20℃ ~65℃",
      spec10:"-20℃ ~65℃",
    },
    {
      name:"Installation",
      spec1:"Recessed",
      spec2:"Recessed",
      spec3:"Recessed",
      spec4:"Recessed",
      spec5:"Recessed",
      spec6:"Recessed",
      spec7:"Recessed",
      spec8:"Recessed",
      spec9:"Recessed",
      spec10:"Recessed",
    },
  ];

  const customStyles = {
    th: {
      style: {},
    },
    rows: {
      style: {
        minHeight: "25px", 
        minWidth: "800px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "",
        color: "#fff",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", 
        paddingRight: "8px",
        paddingTop: "10px",
        width: "10px",
        height: "0px",
        color: "#364353",
      },
    },
  };

 
  const bgimages = [Indoor1, Indoor2, indoor3, indoor4];

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

  return (
    <>
      <article className="font">
        <section className="">
          <div className="w-full flex">
            <div className="w-[9.5%] md:block hidden"></div>
            <div className="w-[90.5%]">
              <p className="flex items-center font-medium sm:text-base xs:text-xs text-[10px] text-black py-5">
                Home &nbsp; <FaChevronRight className=" sm:size-3 size-2" />{" "}
                &nbsp; Products &nbsp;{" "}
                <FaChevronRight className=" sm:size-3 size-2" /> &nbsp; Indoor
                Lights &nbsp; <FaChevronRight className=" sm:size-3 size-2" />{" "}
                &nbsp; DL284A 
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
                    className="absolute right-3 xl:top-20 top-14 cursor-pointer text-black"
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
                  DL284A IP65 COB Downlight
                </p>
                <img
                  src={line1}
                  alt=""
                  className=" pt-1 md:block hidden xl:w-[90%] h-10"
                />
                <div className="text-xs  lg:text-[13px]  leading-7 md:leading-7 text-[#666666] lg:pl-[21%] md:pl-10 p-4">
                  <p>
                    This downlight with traditional deep reflector which
                    provides a perfect combination of high lighting efficiency,
                    comfortable lighting and low glare design, without
                    compromising on lighting performance (color rendering and
                    color uniformity). Two kinds of light source COB and SMD for
                    option, CCT changeable function is available for SMD
                    version. ADC12 aluminum housing provides a great thermal
                    management, IP65 waterproof with high protection level,
                    which offers a wider application area.
                  </p>
                </div>
                <h3 className=" text-sm lg:text-[16px] font-semibold text-black lg:pl-[21%] md:pl-10">
                  Features
                </h3>

                <div className="text-xs  lg:text-[13px]  leading-7 md:leading-7 text-[#666666] lg:pl-[24%] md:pl-10 pl-4 space-y-3">
                  <ul className="list-disc">
                    <li>Tempered glass cover with high transmittance rate.</li>
                    <li>
                      High lumen efficiency with COB and SMD light source
                      options.
                    </li>
                    <li>
                      Faceted reflector and specular reflector for option.
                    </li>
                    <li>Size range: 2.5/3/4/6/8inches.</li>
                    <li>
                      Interchangeable CCT(3000K+4000K+5700K) with slide
                      switch.(Only for SMD version)
                    </li>
                    <li>External flicker free driver.</li>
                    <li>Dimming option: Non-dim, triac dim, 0-10V, DALI.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs lg:text-[13px] leading-8 md:leading-5 text-[#666666] lg:pl-[22%] md:pl-10 p-4">
                    <span className="font-semibold text-black">
                      Application Areas:
                    </span>{" "}
                    It is designed for general lighting applications in office,
                    supermarket, shop, school, hotel etc.
                  </p>
                </div>
                <div className="flex items-center justify-start md:pl-10 lg:pl-[22%]">
                  <a
                    href={IndoorPdf}
                    download
                    className="hover:bg-pink-100 flex justify-center items-center mt-5 sm:mt-3  w-48 h-10 rounded bg-white shadow-md"
                  >
                    Specification File
                    <MdDownload className="text-[#F2667C] my-1 mx-2 " />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div className="bg-slate-100 w-full  md:px-14 px-5 rounded-t-xl pt-5">
          <div className=" ">
            <div className=" ">
              <p className="text-center font-semibold text-xl py-5">
                Specifications
              </p>
              <p className="text-black font-medium py-5">
                DL284A/B Download COB & Download SMD
              </p>
            </div>
            <div className="bg-white overflow-x-scroll flex flex-col justify-center items-center rounded-md py-10 px-10 shadow-2xl drop-shadow-2xl ">
              <table
                style={customStyles}
                className="border border-black  ml-auto p-32 "
              >
                <thead className="border-b border-gray-400">
                  <tr className="text-center ">
                    <th className="border-r border-gray-400">Code No.</th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      DL284A-3- 10W
                    </th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      DL284A-3- 13W
                    </th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      DL284A-4- 18W
                    </th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      DL284A-4- 25W
                    </th>
                    <th className="border-r border-gray-400 text-sm ">
                      DL284A-6- 18W
                    </th>
                    <th className="border-r border-gray-400 text-sm">
                      DL284A-6- 25W
                    </th>
                    <th className="border-r border-gray-400 text-sm">
                      DL284A-6- 30W
                    </th>

                    <th className="border-r border-gray-400 text-sm ">
                      DL284A-6- 18W
                    </th>
                    <th className="border-r border-gray-400 text-sm">
                      DL284A-6- 25W
                    </th>
                    <th className="border-gray-400 text-sm">DL284A-6- 30W</th>
                  </tr>
                </thead>

                <tbody className="">
                {Specification.map((item, index) => (
                  <tr key={index} className=" ">
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-start font-semibold px-3 py-2`}
                      
                    >
                      {item.name}
                    </td>
                    <td
                      className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                    >
                      {item.spec1}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2 `}
                    >
                      {item.spec2}
                    </td>
                    
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2 `}
                    >
                      {item.spec3}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2 `}
                    >
                      {item.spec4}
                    </td>
                    <td
                      className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2 `}
                    >
                      {item.spec5}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2 `}
                    >
                      {item.spec6}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2 `}
                    >
                      {item.spec7}
                    </td>
                    <td
                      className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}

                    >
                      {item.spec8}
                    </td>
                    <td
                      className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}

                    >
                      {item.spec9}
                    </td>
                    <td
                      className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                    >
                      {item.spec10}
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
              {/* <table
                style={customStyles}
                className="border border-black sm:ml-0 ml-auto w-full"
              >
                <thead className="border-b border-gray-400">
                  <tr className="text-center ">
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      Code
                    </th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      Watt
                    </th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      Size
                    </th>
                    <th className="border-r px-3 py-1 border-gray-400 text-sm">
                      Cut-out(mm)
                    </th>
                    <th className="border-r border-gray-400 text-sm ">
                      Lumens(±5%)
                    </th>
                    <th className="border-r border-gray-400 text-sm">
                      N.W/pc(kgs)
                    </th>
                    <th className="border-gray-400 text-sm">Q&apos;ty/CTN</th>
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
                      >
                        {item.watt}
                      </td>
                      <td
                        className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                      >
                        {item.size}
                      </td>
                      <td
                        className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                        rowSpan="1"
                      >
                        {item.cutout}
                      </td>
                      <td
                        className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                      >
                        {item.lumen}
                      </td>
                      <td
                        className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                      >
                        {item.nw}
                      </td>
                      <td
                        className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                        
                      >
                        {item.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
              {/* <DataTable
                columns={columns}
                data={Specification}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
                className="border border-black text-center overflow-auto "
              /> */}
            </div>
            {/* <p className="text-black font-medium py-5">
              DL284C Download COB & Download SMD
            </p>
            <div className="bg-white flex flex-col justify-center items-center rounded-md py-10 px-10 shadow-2xl drop-shadow-2xl ">
              <DataTable
                columns={columns}
                data={Specification2}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
                className="border border-black text-center overflow-auto "
              />
            </div> */}
          </div>
          <div className=" py-10 ">
            <p className="font-bold py-5 text-lg ">IP65 WATERPROOF</p>
            <div className=" bg-white drop-shadow-xl rounded-lg flex  flex-col items-center justify-between gap-5">
              <img
                src={overview1}
                alt=""
                className="w-full h-full border-none"
              />
            </div>
          </div>
          <div className=" bg-white drop-shadow-xl rounded-lg flex  flex-col items-center justify-between">
            <img src={spec1} alt="" className="w-full h-full border-none" />
          </div>
          <div className="flex flex-col justify-between">
            <img src={spec2} alt="" className="pt-5 py-10" />
          </div>
          <div className="flex flex-col justify-between">
            <img src={overview} alt="" className="pt-5 py-10" />
          </div>
        </div>

        <div>
          <Explore />
        </div>

        {/* footer */}
      </article>
    </>
  );
};

export default Indoorlights;
