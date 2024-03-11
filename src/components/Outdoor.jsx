import React from 'react'
import DataTable from "react-data-table-component";
import outdoor1 from "../assets/outdoorImage1.jpg";
import outdoor2 from "../assets/outdoorImage2.jpg";
import outdoor3 from "../assets/outdoorImage3.jpg";
import outdoor4 from "../assets/outdoorImage4.jpg";
import outdoor5 from "../assets/outdoorImage5.jpg";
import outdoor6 from "../assets/outdoorImage6.jpg";
import outdoor7 from "../assets/outdoorImage7.jpg";
import outdoor8 from "../assets/outdoorImage8.jpg";
import outdoor9 from "../assets/outdoorImage9.jpg";
import outdoorPdf from "../assets/Spec sheet for B3QE Architectural and landscape Lights.pdf";
import line1 from "../assets/line1.png";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import overview1 from "../assets/overviewOutdoor.jpeg";
import overview2 from "../assets/overviewOutdoor1.jpeg";

const Outdoor = () => {
    const bgimages = [outdoor1, outdoor2, outdoor3, outdoor4, outdoor5, outdoor6, outdoor7, outdoor8, outdoor8, outdoor9];
    const [bgimage, Setbgimage] = React.useState(bgimages);
    const [index, SetIndex] = React.useState(0);
    const changeBgimages = () => {
        SetIndex((prev) => (prev + 1) % bgimage.length);
    };

    React.useEffect(() => {
        const interval = setInterval(changeBgimages, 2000);
        return () => clearInterval(interval);
    }, []);

    const columns = [
        {
            name: <h1></h1>,
            selector: (row) => row.name
        },
        {
            name: <h1></h1>,
            selector: (row) => row.datas
        }
    ]

    const data = [
        {
            name: "Housing",
            datas: "12#Die-Casting grey powder coated aluminum.T=60 - 80μm Adhesion of ISO class 1 / ASTM class 4B"
        },
        {
            name: "Light Window",
            datas: "Step tempered glass. T=4mm"
        },
        {
            name: "Lens",
            datas: "Optical lens, or reflector efficiency≥90%"
        },
        {
            name: "LED",
            datas: "CREE high power LED or COB LED"
        },
        {
            name: "Gasket",
            datas: "Molding shaped silicone seal"
        },
        {
            name: "Driver",
            datas: "Constant current driver"
        },
        {
            name: "Power Cable",
            datas: "0.5m H05RN-F 2× 1.0mm² to open wires (Low Voltage) 0.5m H05RN- F 3×0.75mm² to open wires(High Voltage) 0.5m H05RN - F 4× 0.75mm² to open wires(RGB) 0.5m H05RN - F 5× 0.50mm² to open wires(RGBW, or DMX) "
        },
        {
            name: "Operating Temperature ",
            datas: "-20˚C~45˚C"
        },
        {
            name: "Optional Control Support",
            datas: "Standard Non-dimmable. Optional 0/1-10V, DALI dimmable or DMX512 controllable support upon request"
        },
        {
            name: "Optional Accessories",
            datas: "Aluminum round base PVC ground spike Tree/ pole Stainless Steel Strap + aluminum bracket Aluminum extended pole "
        },
    ]
    const customStyles = {

        rows: {
            style: {
                minHeight: "45px", // override the row height
                minWidth: "800px",
            },
        },
        headCells: {
            style: {
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
                backgroundColor: "",
                color: "#fff",
                height: "30px",

            },
        },
        cells: {
            style: {
                paddingLeft: "10px", // override the cell padding for data cells
                paddingRight: "8px",

                width: "10px",
                height: "0px",
                color: "#364353",
            },
        },
    };

    const columns2 = [
        {
            name: <h1 className='text-black'>Item No</h1>,
            selector: (row) => row.item
        },
        {
            name: <h1 className='text-black'>Light Source</h1>,
            selector: (row) => row.light
        },
        {
            name: <h1 className='text-black'>Beam Angle</h1>,
            selector: (row) => row.beam
        },
        {
            name: <h1 className='text-black'>input Voltage</h1>,
            selector: (row) => row.input
        },
        {
            name: <h1 className='text-black'>Typical Operating Current(mA)</h1>,
            selector: (row) => row.typical
        },
        {
            name: <h1 className='text-black'>Typical Power Consumption(W)</h1>,
            selector: (row) => row.power
        },
        {
            name: <h1 className='text-black'>Typical Luminance(lm)</h1>,
            selector: (row) => row.lm
        },
        {
            name: <h1 className='text-black'>IK Rate</h1>,
            selector: (row) => row.ik
        },
    ]
    const data2 = [
        {
            item: <h1>B3QEM0658 <br /> B3QEB0658</h1>,
            light: <h1> 6×3W Single <br /> Color <br />CREE LED</h1>,
            beam: <h1>6°, 12°,<br /> 25°, 40°, <br />60°</h1>,
            input: <h1>24VDC <br /> 110/120 <br />220/240V</h1>,
            typical: <h1>24V=758 <br /> 110V = 166 <br /> 240V = 83</h1>,
            power: <h1>24V=18.2 <br /> 110V = 18.3 <br /> 240V = 18.3</h1>,
            lm: <h1>Cool White=1288 <br /> Warm White=1026</h1>,
            ik: "10",
        },
        {
            item: <h1>B3QEM0618 <br />B3QEB0618</h1>,
            light: <h1>6×3W <br /> RGB 3-in -1 <br /> LED</h1>,
            beam: <h1>15°,30°,<br /> 45°, 60°</h1>,
            input: <h1>24VDC</h1>,
            typical: <h1>775</h1>,
            power: <h1>18.6</h1>,
            lm: <h1>369</h1>,
            ik: "10",
        },
        {
            item: <h1>B3QEM0620 <br /> B3QEB0620</h1>,
            light: <h1>6×4W <br /> RGB 4-in-1 <br /> LED</h1>,
            beam: <h1>15°, 30°,<br /> 45°,60°</h1>,
            input: <h1>24VDC</h1>,
            typical: "1000",
            power: "24",
            lm: "577",
            ik: "10",
        },
        {
            item: <h1>B3QEM0125 <br /> B3QEB0125</h1>,
            light: <h1>1×25W <br /> Single Color <br /> CREE COB <br /> LED</h1>,
            beam: <h1>18°, 24°, <br /> 38°,60°</h1>,
            input: <h1>24VDC <br /> 110/120 <br /> 220/240V</h1>,
            typical: <h1>24V=758 <br /> 110V = 169 <br /> 240V = 85</h1>,
            power: <h1>24V=18.2 <br /> 110V = 18.6 <br /> 240V = 18.6</h1>,
            lm: <h1>Cool White=1351 <br /> Warm White=1080</h1>,
            ik: "10",
        },
    ]

    return (
        <article className='font'
        >
            {/* first section */}
            <section className="">
                <div className="w-full md:flex hidden">
                    <div className="w-[10%]"></div>
                    <div className="w-[90%]">
                        <p className="flex font-medium text-black py-5">
                            L3QE LED Architectural &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
                            B3QEB0125(Mono, Spike)
                        </p>
                    </div>
                </div>

                <section className="md:relative ">
                    <div className="xl:h-[600px] md:h-[650px] lg:h-[800px]   w-full md:flex hidden">
                        <div className="w-[10%] bg-white"></div>
                        <div className="w-[90%] bg-[#F3F3F3]"></div>
                    </div>
                    <div className=" bg-[#F3F3F3] py-10 lg:py-0 md:bg-inherit w-full px-5 sm:px-14 flex md:flex-row flex-col items-center md:gap-3 gap-10 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:top-[35%] lg:top-[40%] xl:top-[45%]  md:left-1/2">
                        <p className="flex md:hidden font-medium  text-black">
                            3QE LED Architectural &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
                            B3QEB0125(Mono, Spike)
                        </p>
                        <div
                            className="bg-cover h-[250px] sm:h-[400px] shadow-2xl drop-shadow-lg rounded-xl w-full md:w-[42%]  lg:w-[37%]"
                            style={{
                                backgroundImage: `url(${bgimage[index]})`,
                                backgroundPosition: "center",
                                transition: "background-image 1s ease",
                            }}
                        />
                        <div className="sm:h-[387px] w-full md:w-[58%] lg:w-[63%]   sm:pl-0 capitalize">
                            <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-2">
                                3QE LED Architectural & Landscape Spot Light
                            </p>
                            <img
                                src={line1}
                                alt=""
                                className=" pt-1 md:block hidden xl:w-[90%] h-10"
                            />
                            <div className="md:text-xs  lg:text-[13px]  md:leading-6 space-y-0.5 text-[#666666] lg:pl-[22%] md:pl-10 ">
                                <ul className='list-disc px-5'>
                                    <li className=""> 6pcs*2W (Mono or tunable white), 3W(RGB) or 4W(RGBW) LED or 1piece CREE COB LED as its light source.</li>
                                    <li className="">
                                        70-80LM/W (high light efficiency 100-120LM/W is available upon request).
                                    </li>
                                    <li className="">
                                        Standard input voltage is 24Vdc or 220-240Vac (110-120Vac is available).
                                    </li>
                                    <li>High luminous flux and maximum visual comfort for lighting tasks in the outdoor area.</li>
                                    <li>Light distributions: narrow spot, spot, flood, or wall-wash.</li>
                                    {/* <li>The luminaire is with round base for wall/ceiling/ ground surface mounted;
                                    also provides extensive mounting accessories for options:
                                    (1) Ground spike;
                                    (2) Screw fixed pole mounting Bracket;
                                    (3) Mounting Bracket with stainless steel tree strap;
                                    (4) Extended pole(300/500/800/1000mm) with round base (fixed by screws) or spike.</li> */}
                                    <li>Optional anti-glare light accessories: honey comb louver, honeycomb glass and filter.</li>
                                    <li>Finished color: grey and black</li>
                                    <li>Multiple direction adjustable for projection direction. </li>
                                    <li> With pan-and-tilt mounting plate for precisely aligned for projection angle. </li>
                                    <li>0/1-10V, DALI, DMX 512, TRIAC dimming or control are available upon request.
                                    </li>
                                    <li className="flex items-center">
                                        P65 rated and weather-proof
                                    </li>
                                    <li> Applicable environment temperature: -20℃&lt;fixture&lt;+45℃.</li>
                                </ul>
                            </div>
                            <a
                                href={outdoorPdf}
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

            {/* second section */}
            <div className="w-full md:px-14 px-5 rounded-t-xl lg:pt-5 md:pt-20 sm:pt-40 ">
                <div className=" ">
                    <p className="text-center font-semibold text-lg">MATERIAL SPECIFICATIONS</p>
                </div>
                <div className=" shadow-2xl drop-shadow-2xl ">
                    <div className="bg-white flex flex-col justify-center items-center rounded-b-xl py-5 px-10 overflow-x-scroll ">
                        <table
                            style={customStyles}
                            className="border border-black sm:ml-0 ml-auto"
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
                                        <td className='border-r border-gray-400 text-xs  border-b text-start px-3 py-1'>{item.name}</td>
                                        <td className=' border-gray-400 text-xs  border-b text-start px-3 py-1'>{item.datas}</td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-full md:px-14 px-5 rounded-t-xl lg:pt-5 md:pt-20 pt-5 ">
                <div className=" ">
                    <p className='text-center font-semibold text-lg'>TECHNICAL SPECIFICATIONS</p>
                </div>
                <div className=" shadow-2xl drop-shadow-2xl ">
                    <div className="bg-white flex flex-col justify-center items-center rounded-b-xl py-5 px-10 overflow-x-scroll ">
                        <table
                            style={customStyles}
                            className="border border-black sm:ml-0 ml-auto">
                            <thead className=" border-gray-400">
                                <tr className='text-center'>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>Item No</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>Light Source</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>Beam Angle</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>input Voltage</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>Typical Operating Current(mA)</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>Typical Power Consumption(W)</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>Typical Luminance(lm)</th>
                                    <th className='border-r border-b px-3 py-1 border-gray-400 text-sm'>IK Rate</th>
                                </tr>

                            </thead>
                            <tbody className="">
                                {data2.map((item, index) => (
                                    <tr key={index} className=" ">
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.item}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.light}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.beam}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.input}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.typical}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.power}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.lm}</td>
                                        <td className='border-r border-gray-400 text-xs  border-b text-center px-3 py-1'>{item.ik}</td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <img src={overview1} alt='' className="pt-10 pb-5" />
                    <img src={overview2} alt='' className="pt-10 pb-5" />

                </div>

            </div>


            {/* third section */}
            <section>
                <div className="bg-Formbg bg-cover form flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 md:px-24 px-5 gap-10">
                    <div className="">
                        <p className="text-3xl sm:text-5xl font-medium">
                            Keen to explore further?
                        </p>
                        <p className="py-5 text-xs md:text-start text-justify">
                            If you are interested in our products and would like to receive
                            further information, please fill out the form below to send us
                            your request. or mail to info@auraslighting.com directly.
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
                                placeholder="E-Mail"
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
                                placeholder="Messege"
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
            <section className="">
                <div className="bg-black text-white p-8">
                    <div className="capitalize flex flex-wrap justify-center p-1 text-sm">
                        <p className=" m-0.5 font-medium  cursor-pointer ">Home </p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium  cursor-pointer">Linear Light</p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium  cursor-pointer">LED Strip</p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium  cursor-pointer">LED Neon Light </p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium  cursor-pointer">LED Sensor </p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium  cursor-pointer">LED Sensor </p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium  cursor-pointer">Recruit</p>
                        <p className=" m-0.5 font-medium ">|</p>
                        <p className=" m-0.5 font-medium cursor-pointer">Contact Us </p>
                    </div>
                    <div className="text-center font-medium text-sm">
                        <p>Powered By WHY Global Services</p>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Outdoor