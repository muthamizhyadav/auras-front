import React from "react";
//import phySpec1 from "../../assets/phy-spec_-1.png"
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
  // Other specifications...
  {
    name: "Lumen maintenance",
    spec1: "70 000 Hours L70 25°C , 50 000 Hours L70 50°C",
  },
  {
    name: "Housing material",
    spec1: "Eco PVC or Silicone",
  },
  {
    name: "Installation temperature",
    spec1: "0°C to -55°C",
  },
  {
    name: "Ambient temperature",
    spec1: "-25°C to +55°C",
  },
  {
    name: "Ingress protection",
    spec1: "IP68 wet location submersible* to 2m",
  },
  {
    name: "Warranty",
    spec1: "3 years as standard, 5 years guarantee maximum",
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
                  {/* Other table headers */}
                </tr>
              </thead>
              <tbody className="">
                {Specification.map((item, index) => (
                  <tr key={index} className=" ">
                    <td
                      className={` border-r border-black bg-gray-400 text-xs  border-b text-start px-3 py-2`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={` border-r border-gray-400 text-xs border-b text-center px-3 py-2`}
                      colSpan="7" // Adjust the colspan according to the number of columns in the table
                    >
                      {item.spec1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Images */}
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