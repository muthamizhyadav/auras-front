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


const Indoorlights = () => {
  // React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  const Specification = [
    {
      name:"DL284A-3- 10W",
      watt: "10w",
      size: "Ø110*51",
      cutout: "Ø90-Ø95",
      lumen: "1050lm",
      nw: "0.34",
      qty: "30pcs",
    },
    {
      name: "DL284A-3- 13W",
      watt: "13w",
      cutout: "Ø90-Ø95",
      size: "Ø110*51",
      lumen: "1350lm",
      nw: "0.34",
      qty: "30pcs",
    },
    {
      name: "DL284A-4- 18W",
      watt: "18w",
      size: "Ø150*64/Ø145*82",
      cutout: "Ø125-140/Ø125-135",
      lumen: "1950lm",
      nw: "0.62/0.72",
      qty: "12pcs",
    },
    {
      name: "DL284A-4- 25W",
      watt: "25w",
      cutout: "Ø125-140/Ø125-135",
      size: "Ø150*64/Ø145*82",
      lumen: "2750lm",
      nw: "0.62/0.72",
      qty: "12pcs",
    },
    {
      name: "DL284A-6- 18W",
      watt: "18w",
      size: "Ø172*69/Ø172*69",
      cutout: "Ø150-165/Ø150-160",
      lumen: "1950lm",
      nw: "0.79/0.90",
      qty: "12pcs",
    },
    {
      name: "DL284A-6- 25W",
      watt: "25w",
      size: "Ø172*69/Ø172*69",
      cutout: "Ø150-165/Ø150-160",
      lumen: "2750lm",
      nw: "0.79/0.90",
      qty: "12pcs",
    },
    {
      name: "DL284A-6- 30W",
      watt: "30w",
      size: "Ø172*69/Ø172*69",
      lumen: "3500lm",
      cutout: "Ø150-165/Ø150-160",
      nw: "0.79/0.90",
      qty: "12pcs",
    },
    {
      name: "DL284A-8- 18W",
      watt: "18w",
      size: "Ø235*81/Ø220*104",
      cutout: "Ø200-220/Ø200-210",
      lumen: "1950lm",
      nw: "1.27/1.45",
      qty: "6pcs",
    },
    {
      name: "DL284A-8- 25W",
      watt: "25w",
      cutout:"Ø200-220/Ø200-210",
      size: "Ø235*81/Ø220*104",
      lumen: "2750lm",
      nw: "1.27/1.45",
      qty: "6pcs",
    },
    {
      name: "DL284A-8- 35W",
      watt: "35w",
      cutout: "Ø200-220/Ø200-210",
      size: "Ø235*81/Ø220*104",
      lumen: "3850lm",
      nw: "1.27/1.45",
      qty: "6pcs",
    },
  ];
  const Specification2 = [
    {
      name:"DL284A-3- 10W",
      watt: "10w",
      size: "Ø110*51",
      cutout: "Ø90-Ø95",
      lumen: "1050lm",
      nw: "0.34",
      qty: "30pcs",
    },
    {
      name: "DL284A-3- 13W",
      watt: "13w",
      cutout: "Ø90-Ø95",
      size: "Ø110*51",
      lumen: "1350lm",
      nw: "0.34",
      qty: "30pcs",
    },
    {
      name: "DL284A-4- 18W",
      watt: "18w",
      size: "Ø150*64",
      cutout: "Ø125-140",
      lumen: "1950lm",
      nw: "0.62",
      qty: "12pcs",
    },
    {
      name: "DL284A-4- 25W",
      watt: "25w",
      cutout: "Ø125-140",
      size: "Ø150*64",
      lumen: "2750lm",
      nw: "0.62",
      qty: "12pcs",
    },
    {
      name: "DL284A-6- 18W",
      watt: "18w",
      size: "Ø172*69",
      cutout: "Ø150-165",
      lumen: "1950lm",
      nw: "0.79",
      qty: "12pcs",
    },
    {
      name: "DL284A-6- 25W",
      watt: "25w",
      size: "Ø172*69",
      cutout: "Ø150-165",
      lumen: "2750lm",
      nw: "0.79",
      qty: "12pcs",
    },
    {
      name: "DL284A-6- 30W",
      watt: "30w",
      size: "Ø172*69",
      lumen: "3500lm",
      cutout: "Ø200-220",
      nw: "0.79",
      qty: "12pcs",
    },
    {
      name: "DL284A-8- 18W",
      watt: "18w",
      size: "Ø235*81",
      cutout: "Ø200-220",
      lumen: "1950lm",
      nw: "1.27",
      qty: "6pcs",
    },
    {
      name: "DL284A-8- 25W",
      watt: "25w",
      cutout: "Ø200-220",
      size: "Ø235*81",
      lumen: "2750lm",
      nw: "1.27",
      qty: "6pcs",
    },
    {
      name: "DL284A-8- 35W",
      watt: "35w",
      cutout: "Ø200-220",
      size: "Ø235*81",
      lumen: "3850lm",
      nw: "1.27",
      qty: "6pcs",
    },
  ];
  const columns = [
    {
      name: (
        <h1 className="text-black  lg:pl-10   py-1 text-[12px] font-medium">code</h1>
      ),
      selector: (row) => row.name,
    },
    {
      name: (
        <h1 className="text-black  py-1 text-[12px] font-medium">watt</h1>
      ),
      selector: (row) => row.watt,
    },
    {
      name:(<h1 className="text-black py-1 text-[12px] font-medium">size(A*Blm)</h1>),
      selector: (row) => row.size,
    },
    {
      name:(<h1 className="text-black   py-1 text-[12px] font-medium">Cut-Out(mm)</h1>),
      selector: (row) => row.cutout,
    },
    {
      name:(<h1 className="text-black   py-1 text-[12px] font-medium">Lumens(±5%)</h1>),
      selector: (row) => row.lumen,
    },
    {
      name:(<h1 className="text-black   py-1 text-[12px] font-medium">N.W/pc(kgs)</h1>),
      selector: (row) => row.nw,
    },
    {
      name:(<h1 className="text-black    py-1 text-[12px] font-medium">Q'ty/CTN</h1>),
      selector: (row) => row.qty,
      
    },
  ];

  const customStyles = {
    th: {
      style: {},
    },
    rows: {
      style: {
        minHeight: "30px", // override the row height
        minWidth: "800px",
        evenRow: {
            backgroundColor: 'lightgrey',
          },
      },
    },
    headCells: {
      style: {
        
        backgroundColor: "",
        color: "#fff",
        borderBottom:"1px solid black"

      },
    },
    cells: {
      style: {
        padding: "15px",
        width: "10px",
        height: "0px",
        color: "#364353",

      },
    },
  };
  const conditionalRowStyles = [
    {
      when: (row) => row.index % 2 === 0,
      style: {
        backgroundColor: "solid gray",
      },
    },
  ];

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
          <div className="w-full md:flex hidden">
            <div className="w-[10%]"></div>
            <div className="w-[90%]">
              <p className="flex font-medium  text-black py-5">
                Indoor Lights &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
                DL284A IP65
              </p>
            </div>
          </div>

          <section className="relative ">
            <div className="md:h-[550px] w-full md:flex hidden">
              <div className="w-[10%] bg-white"></div>
              <div className="w-[90%] bg-[#F3F3F3]"></div>
            </div>
            <p className="flex bg-[#F3F3F3] pt-5 px-5 md:hidden font-medium  text-black">
              Indoor Lights &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
              DL284A IP65
            </p>
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
            <div className=" bg-[#F3F3F3] py-5 lg:py-0 md:bg-inherit w-full px-5 sm:px-14 flex md:flex-row flex-col items-center md:gap-3 gap-10 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:top-[42%]  md:left-1/2">
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
              <div className="sm:h-[387px] w-full md:w-[58%] lg:w-[63%]   sm:pl-0 capitalize">
                <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-5">
                  DL284A IP65 COB Downlight
                </p>
                <img
                  src={line1}
                  alt=""
                  className=" pt-1 md:block hidden xl:w-[90%] h-10"
                />
                <div className="text-xs  lg:text-[13px]  leading-6 text-[#666666] lg:pl-[24%] md:pl-10 pl-4 space-y-3">
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
                    <li>IP65 waterproof for lamp part.</li>
                    <li>
                      Interchangeable CCT(3000K+4000K+5700K) with slide
                      switch.(Only for SMD version)
                    </li>
                    <li>External flicker free driver.</li>
                    <li>Dimming option: Non-dim, triac dim, 0-10V, DALI.</li>
                  </ul>
                </div>
                <div className="flex items-center justify-start md:pl-10 lg:pl-[22%]">
                  <a
                    href={IndoorPdf}
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

        <div className="bg-slate-100 w-full  md:px-14 px-5 rounded-t-xl pt-5">
          <div className=" ">
            <div className=" ">
              <p className="text-center font-semibold text-xl py-5">
                Specifications
              </p>
              <p className="text-black font-medium py-5">DL284A/B Download COB & Download SMD</p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center rounded-md py-10 px-10 shadow-2xl drop-shadow-2xl ">
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
              <DataTable
                columns={columns}
                data={Specification}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
                className="border border-black text-center overflow-auto "
              />
            </div>
            <p className="text-black font-medium py-5">DL284C Download COB & Download SMD</p>
            <div className="bg-white flex flex-col justify-center items-center rounded-md py-10 px-10 shadow-2xl drop-shadow-2xl ">
              <DataTable
                columns={columns}
                data={Specification2}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
                className="border border-black text-center overflow-auto "
              />
            </div>
          </div>
          <div className="flex  flex-col items-center justify-between py-10 ">
            <div className=" bg-white drop-shadow-xl rounded-lg">
              <img src={spec1} alt="" className="w-full h-full border-none" />
            </div>
          </div>
          <div className="flex flex-col ">
            <img src={spec2} alt="" className="pt-5 py-10" />
          </div>
          <div className="flex flex-col ">
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