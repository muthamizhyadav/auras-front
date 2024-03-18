import React from "react";
import DataTable from "react-data-table-component";
import outdoor1 from "../../assets/outdoorImage1.jpg";
import outdoor2 from "../../assets/outdoorImage2.jpg";
import outdoor3 from "../../assets/outdoorImage3.jpg";
import outdoor4 from "../../assets/outdoorImage4.jpg";
import outdoor5 from "../../assets/outdoorImage5.jpg";
import outdoor6 from "../../assets/outdoorImage6.jpg";
import outdoor7 from "../../assets/outdoorImage7.jpg";
import outdoor8 from "../../assets/outdoorImage8.jpg";
import outdoor9 from "../../assets/outdoorImage9.jpg";
import outdoorPdf from "../../assets/Outdoor Lights.pdf";
import line1 from "../../assets/line1.png";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import overview1 from "../../assets/overviewOutdoor.jpeg";
import overview2 from "../../assets/overviewOutdoor1.jpeg";
import imagecontent3 from "../../assets/imagecontent 3.png";
import imagecontent4 from "../../assets/imagecontent 4.png";
import imagecontent5 from "../../assets/imagecontent 5.png";
import imagecontent6 from "../../assets/imagecontent 6.png";
import { Explore } from "./Explore";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";

const Outdoor = () => {
  const bgimages = [
    outdoor1,
    outdoor2,
    outdoor3,
    outdoor4,
    outdoor5,
    outdoor6,
    outdoor7,
    outdoor8,
    outdoor8,
    outdoor9,
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

  const data = [
    {
      name: "Housing",
      datas:
        "12#Die-Casting grey powder coated aluminum.T=60 - 80μm Adhesion of ISO class 1 / ASTM class 4B",
    },
    {
      name: "Light Window",
      datas: "Step tempered glass. T=4mm",
    },
    {
      name: "Lens",
      datas: "Optical lens, or reflector efficiency≥90%",
    },
    {
      name: "LED",
      datas: "CREE high power LED or COB LED",
    },
    {
      name: "Gasket",
      datas: "Molding shaped silicone seal",
    },
    {
      name: "Driver",
      datas: "Constant current driver",
    },
    {
      name: "Power Cable",
      datas:
        "0.5m H05RN-F 2× 1.0mm² to open wires (Low Voltage) 0.5m H05RN- F 3×0.75mm² to open wires(High Voltage) 0.5m H05RN - F 4× 0.75mm² to open wires(RGB) 0.5m H05RN - F 5× 0.50mm² to open wires(RGBW, or DMX) ",
    },
    {
      name: "Operating Temperature ",
      datas: "-20˚C~45˚C",
    },
    {
      name: "Optional Control Support",
      datas:
        "Standard Non-dimmable. Optional 0/1-10V, DALI dimmable or DMX512 controllable support upon request",
    },
    {
      name: "Optional Accessories",
      datas:
        "Aluminum round base PVC ground spike Tree/ pole Stainless Steel Strap + aluminum bracket Aluminum extended pole ",
    },
  ];
  const customStyles = {
    headRows: {
      style: {
        border: "0.5px solid #787E91",
      },
    },
    rows: {
      style: {
        // override the row height
      },
    },
    headCells: {
      style: {
        // paddingLeft: "20px", // override the cell padding for head cells
        // paddingRight: "8px",
        border: "0.5px solid #787E91",
        backgroundColor: "",
        color: "",
      },
    },
    cells: {
      style: {
        marginTop: "-2px",
        padding: "auto",
        paddingTop: "27px",
        paddingBottom: "27px",
        border: "0.5px solid #787E91",
        height: "30px",
        color: "black",
        fontSize: "10px",
        textAlign: "center",
      },
    },
  };

  const columns2 = [
    {
      name: (
        <h1 className="text-black px-6  py-1 text-[12px] font-medium">
          Item No
        </h1>
      ),
      selector: (row) => row.item,
    },
    {
      name: (
        <h1 className="text-black py-1 px-2 text-[12px] font-medium">
          Light Source
        </h1>
      ),
      selector: (row) => row.light,
    },
    {
      name: (
        <h1 className="text-black  py-1 px-3 text-[12px] font-medium">
          Beam Angle
        </h1>
      ),
      selector: (row) => row.beam,
    },
    {
      name: (
        <h1 className="text-black py-1 px-2 text-[12px] font-medium">
          Input Voltage
        </h1>
      ),
      selector: (row) => row.input,
    },
    {
      name: (
        <h1 className="text-black  py-1 text-[12px] font-medium">
          Typical Operating Current(mA)
        </h1>
      ),
      selector: (row) => row.typical,
    },
    {
      name: (
        <h1 className="text-black  py-1 text-[12px] font-medium">
          Typical Power Consumption (W)
        </h1>
      ),
      selector: (row) => row.power,
    },
    {
      name: (
        <h1 className="text-black py-1 ml-2 border-gray-400 text-[12px] font-medium">
          Typical <br /> Luminance (lm)
        </h1>
      ),
      selector: (row) => row.lm,
    },
    {
      name: (
        <h1 className=" text-black py-1 border-gray-400 text-[12px] ml-6 font-medium">
          IK Rate
        </h1>
      ),
      selector: (row) => row.ik,
    },
  ];
  const data2 = [
    {
      item: (
        <h1 className=" py-1 ml-3">
          B3QEM0658 <br /> B3QEB0658
        </h1>
      ),
      light: (
        <h1 className="ml-4 overflow-x-auto">
          6×3W Single <br /> Color <br />
          CREE LED
        </h1>
      ),
      beam: (
        <h1 className="ml-7">
          6°, 12°,
          <br /> 25°, 40°, <br />
          60°
        </h1>
      ),
      input: (
        <h1 className="ml-6">
          24VDC <br /> 110/120 <br />
          220/240V
        </h1>
      ),
      typical: (
        <h1 className="ml-5">
          24V=758 <br /> 110V = 166 <br /> 240V = 83
        </h1>
      ),
      power: (
        <h1 className="ml-4">
          24V=18.2 <br /> 110V = 18.3 <br /> 240V = 18.3
        </h1>
      ),
      lm: (
        <h1 className="overflow-x-auto">
          Cool White=1288 <br /> Warm White=1026
        </h1>
      ),
      ik: <h1 className="ml-10">10</h1>,
    },
    {
      item: (
        <h1 className=" py-1 ml-4">
          B3QEM0618 <br />
          B3QEB0618
        </h1>
      ),
      light: (
        <h1 className="ml-5">
          6×3W <br /> RGB 3-in -1 <br /> LED
        </h1>
      ),
      beam: (
        <h1 className="ml-7">
          15°,30°,
          <br /> 45°, 60°
        </h1>
      ),
      input: <h1 className="ml-8">24VDC</h1>,
      typical: <h1 className="ml-10">775</h1>,
      power: <h1 className="ml-10">18.6</h1>,
      lm: <h1 className="ml-10">369</h1>,
      ik: <h1 className="ml-10">10</h1>,
    },
    {
      item: (
        <h1 className=" py-1 ml-4">
          B3QEM0620 <br /> B3QEB0620
        </h1>
      ),
      light: (
        <h1 className="ml-4">
          6×4W <br /> RGB 4-in-1 <br /> LED
        </h1>
      ),
      beam: (
        <h1 className="ml-7">
          15°, 30°,
          <br /> 45°,60°
        </h1>
      ),
      input: <h1 className="ml-8">24VDC</h1>,
      typical: <h1 className="ml-9">1000</h1>,
      power: <h1 className="ml-11">24</h1>,
      lm: <h1 className="ml-10">577</h1>,
      ik: <h1 className="ml-10">10</h1>,
    },
    {
      item: (
        <h1 className=" py-1 ml-4">
          B3QEM0125 <br /> B3QEB0125
        </h1>
      ),
      light: (
        <h1 className="ml-2 overflow-x-auto">
          1×25W Single <br /> Color CREE COB <br /> LED
        </h1>
      ),
      beam: (
        <h1 className="ml-7">
          18°, 24°, <br /> 38°,60°
        </h1>
      ),
      input: (
        <h1 className="ml-6">
          24VDC <br /> 110/120 <br /> 220/240V
        </h1>
      ),
      typical: (
        <h1 className="ml-5">
          24V=758 <br /> 110V = 169 <br /> 240V = 85
        </h1>
      ),
      power: (
        <h1 className="ml-4">
          24V=18.2 <br /> 110V = 18.6 <br /> 240V = 18.6
        </h1>
      ),
      lm: (
        <h1 className="overflow-x-auto">
          Cool White=1351 <br /> Warm White=1080
        </h1>
      ),
      ik: <h1 className="ml-10">10</h1>,
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
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
    <article className="font">
      {/* first section */}
      <section className="">
        <div className="w-full flex">
          <div className="w-[9.5%]"></div>
          <div className="w-[90.5%]">
            <p className="flex items-center font-medium sm:text-base xs:text-xs text-[10px] text-black py-5">
              Home &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp; Products &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp; Outdoor Lights &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp;
              B3QEB0125
            </p>
          </div>
        </div>

        <section>
          <div className="bg-[#F3F3F3] md:bg-transparent">
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
            <div className="bg-[#F3F3F3] py-10 sm:pb-44 lg:py-8 md:bg-Bannerbg bg-contain w-full px-5 sm:px-14 flex md:flex-row flex-col md:gap-3 gap-10">
              <div
                className="cursor-pointer bg-cover bg-center h-[250px] sm:h-[400px] shadow-2xl drop-shadow-lg rounded-xl w-full md:w-[42%]  lg:w-[37%]"
                style={{
                  backgroundImage: `url(${bgimage[index]})`,
                  backgroundPosition: "center",
                  transition: "background-image 1s ease",
                }}
                onClick={() => handleThumbnailClick(index)}
              />
              <div className=" w-full md:w-[58%] lg:w-[63%]   sm:pl-0 ">
                <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-5">
                  3QE LED Architectural & Landscape Spot Light
                </p>
                <img
                  src={line1}
                  alt=""
                  className=" pt-1 md:block hidden xl:w-[90%] h-10"
                />
                <div className="md:text-xs  lg:text-[13px] leading-8 md:leading-8 space-y-0.5 text-[#666666] lg:pl-[22%] md:pl-10 ">
                  <ul className="list-disc px-5">
                    <li className="">
                      {" "}
                      6pcs*2W (Mono or tunable white), 3W (RGB) or 4W (RGBW) LED
                      or 1 piece CREE COB LED as its light source.
                    </li>
                    <li className="">
                      70-80LM/W (high light efficiency 100-120LM/W is available
                      upon request).
                    </li>
                    <li className="">
                      Standard input voltage is 24Vdc or 220-240Vac (110-120Vac
                      is available).
                    </li>
                    <li>
                      High luminous flux and maximum visual comfort for lighting
                      tasks in the outdoor area.
                    </li>
                    <li>
                      Light distributions: narrow spot, spot, flood, or
                      wall-wash.
                    </li>
                    <li>
                      Optional anti-glare light accessories: honeycomb louver,
                      honeycomb glass, and filter.
                    </li>
                    <li>Finished color: grey and black</li>
                    <li>
                      Multiple direction adjustable for projection direction.
                    </li>
                    <li>
                      With pan-and-tilt mounting plate for precisely aligned for
                      projection angle.
                    </li>
                    <li>
                      0/1-10V, DALI, DMX 512, TRIAC dimming, or control are
                      available upon request.
                    </li>
                    <li className="flex items-center">
                      IP65 rated and weather-proof
                    </li>
                    <li>
                      Applicable environment temperature:
                      -20℃&lt;fixture&lt;+45℃.
                    </li>
                  </ul>
                </div>
                <div className="flex  items-center justify-start md:pl-10 lg:pl-[22%]">
                  <a
                    href={outdoorPdf}
                    download
                    className=" flex justify-center items-center mt-5 sm:mt-3  w-48 h-10 rounded bg-white shadow-md"
                  >
                    Specification File
                    <MdDownload className="text-[#F2667C] my-1 mx-2 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* second section */}
      <div className="w-full md:px-14 px-5 rounded-t-xl lg:pt-5">
        <div className=" ">
          <p className="text-center font-semibold text-lg py-5">
            Material Specifications
          </p>
        </div>
        <div className=" shadow-2xl drop-shadow-2xl ">
          <div className="bg-white flex flex-col justify-center items-center rounded-b-xl py-5 px-10 overflow-x-scroll ">
            <table
              style={customStyles}
              className="border border-black  ml-auto"
            >
              <thead className=" border-gray-400">
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                {data.map((item, index) => (
                  <tr key={index} className=" ">
                    <td className="border-r border-gray-400 text-[12px]  border-b text-start px-3 py-1">
                      {item.name}
                    </td>
                    <td className=" border-gray-400 text-[12px]  border-b text-start px-3 py-1">
                      {item.datas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full md:px-14 px-5 rounded-t-xl lg:pt-5 md:pt-20 pt-5 ">
        <div className=" ">
          <p className="text-center font-semibold text-lg py-5">
            Technical Specifications
          </p>
        </div>
        {/* <div className=" shadow-2xl drop-shadow-2xl ">
                    <div className="bg-white flex flex-col justify-center items-center rounded-b-xl py-5 px-10 overflow-x-scroll ">
                        <table
                            style={customStyles}
                            className="border border-black  ml-auto"
                        >
                            <thead className=" border-gray-400">
                                <tr className="text-center">
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        Item No
                                    </th>
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        Light Source
                                    </th>
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        Beam Angle
                                    </th>
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        input Voltage
                                    </th>
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        Typical Operating Current (mA)
                                    </th>
                                    <th className="overflow-x-hidden border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        Typical Power Consumption (W)
                                    </th>
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        Typical Luminance (lm)
                                    </th>
                                    <th className=" border-r border-b px-3 py-1 border-gray-400 text-sm">
                                        IK Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {data2.map((item, index) => (
                                    <tr key={index} className=" ">
                                        <td className=" border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.item}
                                        </td>
                                        <td className=" border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.light}
                                        </td>
                                        <td className=" border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.beam}
                                        </td>
                                        <td className=" border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.input}
                                        </td>
                                        <td className="w-[15%] border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.typical}
                                        </td>
                                        <td className="w-[15%] border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.power}
                                        </td>
                                        <td className="w-[15%] border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.lm}
                                        </td>
                                        <td className=" border-r border-gray-400 text-xs  border-b text-center px-3 py-1">
                                            {item.ik}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> */}
        <div className="shadow-2xl drop-shadow-2xl">
          <div className="bg-white flex flex-col justify-center items-center py-5 px-10 ">
            <DataTable
              columns={columns2}
              data={data2}
              customStyles={customStyles}
              className="text-center "
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <img src={overview1} alt="" className="pt-10 pb-5" />
        </div>

        <div>
          <h2 className="font-semibold sm:text-xl py-5 text-center">
            3QE PROJECTOR, FLOODLIGHTS, WALL WASHER – Luminaire Arrangement
          </h2>
          <div className="flex md:flex-row flex-col items-center py-5 gap-5">
            <div className="flex flex-col gap-5 md:w-[40%] items-center">
              <img src={imagecontent3} alt="" className="w-96 h-60" />
            </div>
            <div className="md:w-[60%] leading-loose xs:w-96 xs:px-0 px-5 mx-auto">
              <ul className="list-disc lg:text-base  lg:space-y-3">
                <li className="text-[13px]">
                  <span className="font-medium">Projectors: </span> Narrow spot,
                  Spot, Flood.
                </li>
                <li className="text-[13px]">
                  <span className="font-medium">Accentuation: </span> The ideal
                  angle of tilt (α) for accent lighting with 3QA projectors is
                  around 30°.
                </li>
                <li className="text-[13px]">
                  This emphasizes the three-dimensionality of architectural
                  details, sculptures or trees, without distorting the spatial
                  impression with excessive shadowing.
                </li>
                <li className="text-[13px]">
                  <span className="font-medium">Arrangement: </span> α= 30°.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center py-5 gap-5">
            <div className="flex flex-col gap-5 md:w-[40%] items-center">
              <img src={imagecontent4} alt="" className="w-96 h-60" />
            </div>
            <div className="md:w-[60%] leading-loose md:px-0 xs:w-96 xs:px-0 px-5 mx-auto">
              <ul className="list-disc lg:text-base  lg:space-y-4">
                <li className="text-[12px]">
                  <span className="font-medium">Wash lighting: </span> 3QA
                  projectors ensure uniform floodlighting of walls surfaces or
                  trees.
                </li>
                <li className="text-[12px]">
                  The ideal angle of tilt (y) for this is around 30°.
                </li>
                <li className="text-[12px]">
                  <span className="font-medium">Arrangement:</span> PC frosted
                  α= 30°.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center py-5 gap-5">
            <div className="flex flex-col gap-5 md:w-[40%] items-center">
              <img src={imagecontent5} alt="" className="w-96 h-60" />
            </div>
            <div className="md:w-[60%] leading-loose xs:w-96 xs:px-0 px-5 mx-auto">
              <ul className="list-disc lg:text-base  lg:space-y-3">
                <li className="text-[13px]">
                  <span className="font-medium">Lens wall washers: </span> Wall
                  wash.
                </li>
                <li className="text-[13px]">
                  <span className="font-medium">Wallwashing: </span> Uniform
                  vertical illuminance in the outdoor area defines spatial
                  borders.
                </li>
                <li className="text-[13px]">
                  Here, the distance (a) of 3QA lens wallwashers from the wall
                  should be around one third of the room height (h).
                </li>
                <li className="text-[13px]">
                  This results in an angle of tilt (a) of approx. 55°.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center py-5 gap-5">
            <div className="flex flex-col gap-5 md:w-[40%] items-center">
              <img src={imagecontent6} alt="" className="w-96 h-60" />
            </div>
            <div className="md:w-[60%] leading-loose md:px-0 xs:w-96 xs:px-0 px-5 mx-auto">
              <ul className="list-disc lg:text-base  lg:space-y-4">
                <li className="text-[12px]">
                  For good longitudinal uniformity, the spacing (d) of 3QA lens
                  wallwashers may be up to 1.
                </li>
                <li className="text-[12px]">
                  2 times the offset from the wall (a).
                </li>
                <li className="text-[12px]">
                  <span className="font-medium">Arrangement:</span> PC
                  d ≤ 1.2×a.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <img src={overview2} alt="" className="pt-10 pb-5" />
        </div>
      </div>

      {/* third section */}
      <section>
        <Explore />
      </section>
    </article>
  );
};

export default Outdoor;
