import React from "react";
import phySpec1 from "../../assets/phy-spc1.png";
import physpec2 from "../../assets/phySpc2.png";
import physpec3 from "../../assets/physpc-3.png";
import physpec4 from "../../assets/physpc-4.png";
import physpec5 from "../../assets/phy-spc5.png";

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
  {
    name: "Lumen maintenance",
    spec3: "70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
    noBorder: true,
  },
  {
    name: "Housing material",
    spec3: "Eco PVC or Silicone",
    noBorder: true,
  },
  {
    name: "Installation temperature",
    spec3: "0°C to -55°C",
    noBorder: true,
  },
  {
    name: "Ambient temperature",
    spec3: "-25°C to +55°C",
    noBorder: true,
  },
  {
    name: "Ingress protection",
    spec3: "IP68 wet location submersible* to 2m",
    noBorder: true,
  },
  {
    name: "Warranty",
    spec3: "3 years as standard, 5 years guarantee maximum",
    noBorder: true,
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

const Collection = () => {
  return (
    <div>
      <div className="bg-slate-100 w-full md:px-14 px-5 rounded-t-xl pt-5">
        <div className=" ">
          <div className=" ">
            <p className="text-center font-semibold text-xl py-5">
              Technical Specification
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center rounded-b-xl py-5 px-10 overflow-x-scroll shadow-2xl drop-shadow-2xl ">
            <table
              style={customStyles}
              className="border border-black sm:ml-0 ml-auto"
            >
              <thead className="border-b border-gray-400">
                <tr className="text-center ">
                  <th className=" bg-gray-400 border border-black">Model</th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    F21-24V-5050-72
                  </th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    F21-24V-5050-60
                  </th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    F21-24V-5050-60-U10
                  </th>
                  <th className="border-r px-3 py-1 border-gray-400 text-sm">
                    F21-36V-5050-60
                  </th>
                  <th className="border-r border-gray-400 text-sm ">
                    F21-24V-3528-72
                  </th>
                  <th className="border-r border-gray-400 text-sm">
                    F21-12V-3528-72
                  </th>
                  <th className=" text-sm">F21-24V-2835-72-CC</th>
                </tr>
              </thead>
              <tbody className="">
              {Specification.map((item, index) => (
  <tr key={index} className={item.name === "Lumen maintenance" || item.name === "Housing material" || item.name === "Installation temperature" || item.name === "Ambient temperature" || item.name === "Ingress protection" || item.name === "Warranty" ? "no-border" : ""}>
    <td className={`border-r border-black bg-gray-400 text-xs  border-b text-start px-3 py-2`}>
      {item.name}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`} colSpan="1">
      {item.spec1}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`} colSpan="1">
      {item.datas}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`} colSpan="1">
      {item.spec2}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`} colSpan="1">
      {item.spec3}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2 `} colSpan="1">
      {item.spec4}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`} colSpan="1">
      {item.spec5}
    </td>
    <td className={`border-r border-gray-400 text-xs border-b text-center px-3 py-2`} colSpan="1">
      {item.spec6}
    </td>
  </tr>
))}

              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 py-3 px-3 md:gap-4 md:py-10 md:px-5 ">
        <div className="rounded-lg shadow-xl col-span-2 md;mx-16 md:py-5">
          <img src={phySpec1} alt="" />
        </div>
        <div className="rounded-lg shadow-2xl">
          <img src={physpec2} alt="" className="md:py-10 md:px-20" />
        </div>
        <div className="rounded-lg shadow-2xl">
          <img src={physpec3} alt="" className="md:py-10 md:px-20" />
        </div>
        <div className="rounded-lg shadow-2xl">
          <img src={physpec4} alt="" className="md:py-10 md:px-20" />
        </div>
        <div className="rounded-lg shadow-2xl">
          <img src={physpec5} alt="" className="md:py-10 md:px-20" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
