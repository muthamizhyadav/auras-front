import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import line1 from "../../assets/line1.png";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";
import Sanityclient from "../common/Sanityclient";
import { useParams } from "react-router-dom";
import picture from "../../assets/DL228A-1.jpg";
import picture2 from "../../assets/DL228A-2.jpg";
import picture3 from "../../assets/DL228A-3.jpg";

export const Product = () => {
  const { productname } = useParams();
  const { id } = useParams();
  const [bgimage, Setbgimage] = useState([]);
  const [modalname, setModalName] = useState("");
  const [addFeature, setaddFeature] = useState("");
  const [addfeaturepoints, setaddfeaturepoints] = useState([]);
  const [addapplicationareas, setaddapplicationareas] = useState("");
  const [productpdf, setproductpdf] = useState("");
  const [specificationHeading, setSpecificationHeading] = useState("");
  const [specificationTableHeading1, setSpecificationTableHeading1] =
    useState("");
  const [specificationTableHeading2, setSpecificationTableHeading2] =
    useState("");
  const [specificationTableHeading3, setSpecificationTableHeading3] =
    useState("");
  const [specificationTableHeading4, setSpecificationTableHeading4] =
    useState("");
  const [specificationTableHeading5, setSpecificationTableHeading5] =
    useState("");
  const [specificationTableHeading6, setSpecificationTableHeading6] =
    useState("");
  const [leftSideImage, setleftSideImage] = useState("");
  const [rightSideImage1, setrightSideImage1] = useState("");
  const [rightSideImage2, setrightSideImage2] = useState("");
  const [title1, setTitle1] = useState("");
  const [modelImage1, setmodelImage1] = useState("");
  const [content1, setContent1] = useState("");
  const [title2, setTitle2] = useState("");
  const [modelImage2, setmodelImage2] = useState("");
  const [content2, setContent2] = useState("");
  const [title3, setTitle3] = useState("");
  const [modelImage3, setmodelImage3] = useState("");
  const [content3, setContent3] = useState("");
  const [title4, setTitle4] = useState("");
  const [modelImage4, setmodelImage4] = useState("");
  const [content4, setContent4] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [table1Column, setTable1Column] = useState([]);
  const [table2Column, setTable2Column] = useState([]);
  const [table3Column, setTable3Column] = useState([]);
  const [table4Column, setTable4Column] = useState([]);
  const [table5Column, setTable5Column] = useState([]);
  const [table6Column, setTable6Column] = useState([]);
  const [table1Header, setTable1Header] = useState([]);
  const [table2Header, setTable2Header] = useState([]);
  const [table3Header, setTable3Header] = useState([]);
  const [table4Header, setTable4Header] = useState([]);
  const [table5Header, setTable5Header] = useState([]);
  const [table6Header, setTable6Header] = useState([]);
  const [modelId, setModelId] = useState("");
  const [contactTitle, setcontactTitle] = useState("");
  const [contactContent, setcontactContent] = useState("");
  const [notes, setnotes] = useState([]);
  const [modeloverview, setModeloverview] = useState([]);
  const [modelcct, setmodelcct] = useState([]);
  const [modelimages,setmodelimages] = useState([])
  // React.useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex(
        (prevIndex) => (prevIndex + bgimage.length - 1) % bgimage.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [bgimage]);

  const [Loadings, setLodaing] = useState(false);

  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == ${JSON.stringify(productname)} && modelid == ${JSON.stringify(
        id
      )} ]{notes[]{
        notes
      },modelid, bannerimages[]{ bannerimage{ asset->{ url, id }}}, modalname, features, featurepoints, applicationareas, productPdf{ asset->{ url, id }}, specificationheading, datatable1heading, datatable2heading, datatable3heading, leftsideimage{asset->{ url, id }}, rightsideimage1{asset->{ url, id }}, rightsideimage2{asset->{ url, id }}, model1title, model1contents, model1image{asset->{ url, id }}, model2title, model2contents, model2image{asset->{ url, id }}, model3title, model3contents, model3image{asset->{ url, id }}, model4title, model4contents, model4image{asset->{ url, id }}, contacttitle,  contactcontent, table1headers, table1columns, table2headers, table2columns, table3headers, table3columns, table4columns, table4headers,table5columns, table5headers,table6columns, table6headers, modelOverview[]{image{asset->{url}},title,overview},specs[]{specname,content[]{contentlist}}, productImages[]{image{asset->{url}}}  }`
    )
      .then((data) => {
    
        if (data.length !== 0) {
          Setbgimage(
            data[0].bannerimages.map((item) => item.bannerimage.asset.url)
          );
          setModalName(data[0].modalname);
          setaddFeature(data[0].features);
          setaddfeaturepoints(data[0].featurepoints);
          setaddapplicationareas(data[0].applicationareas);
          setproductpdf(data[0]?.productPdf?.asset?.url);
          setSpecificationHeading(data[0].specificationheading);
          setSpecificationTableHeading1(data[0].datatable1heading);
          setSpecificationTableHeading2(data[0].datatable2heading);
          setSpecificationTableHeading3(data[0].datatable3heading);
          setSpecificationTableHeading4(data[0].datatable4heading);
          setSpecificationTableHeading5(data[0].datatable5heading);
          setSpecificationTableHeading6(data[0].datatable6heading);
          setleftSideImage(data[0].leftsideimage);
          setrightSideImage1(data[0].rightsideimage1);
          setrightSideImage2(data[0].rightsideimage2);
          setTitle1(data[0].model1title);
          setContent1(data[0].model1contents);
          setmodelImage1(data[0].model1image);
          setTitle2(data[0].model2title);
          setContent2(data[0].model2contents);
          setmodelImage2(data[0].model2image);
          setTitle3(data[0].model3title);
          setContent3(data[0].model3contents);
          setmodelImage3(data[0].model3image);
          setTitle4(data[0].model4title);
          setContent4(data[0].model4contents);
          setmodelImage4(data[0].model4image);
          setTable1Header(data[0].table1headers);
          setnotes(data[0].notes);
          setTable2Header(data[0].table2headers);
          setTable3Header(data[0].table3headers);
          setTable1Column(data[0].table1columns);
          setTable2Column(data[0].table2columns);
          setTable3Column(data[0].table3columns);
          setModelId(data[0].modelid);
          setcontactTitle(data[0].contacttitle);
          setcontactContent(data[0].contactcontent);
          setTable4Column(data[0].table4columns);
          setTable4Header(data[0].table4headers);
          setTable5Column(data[0].table5columns);
          setTable5Header(data[0].table5headers);
          setTable6Column(data[0].table6columns);
          setTable6Header(data[0].table6headers);
          setModeloverview(data[0].modelOverview);
          setmodelcct(data[0].specs);
          setmodelimages(data[0].productImages)
        } else {
          console.log("nodata found");
          setLodaing(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, [id]);

  const handleThumbnailClick = (index) => {
    setPreviewIndex(index);
  };

  const handleCloseOutsideClick = () => {
    setPreviewIndex(null);
  };

  const handlePrevClick = (event) => {
    event.stopPropagation();
    setPreviewIndex((prevIndex) =>
      prevIndex === 0 ? bgimage.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = (event) => {
    event.stopPropagation();
    setPreviewIndex((prevIndex) =>
      prevIndex === bgimage.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <div>
      {Loadings == false ? (
        <article className="font">
          {/* Banner Section */}
          <section className="">
            <div className="w-full flex pl-5 md:pl-0">
              <div className="w-[9.5%] md:block hidden"></div>
              <div className="w-[90.5%]">
                <p className="flex items-center font-medium sm:text-base xs:text-xs text-[10px] text-black py-5">
                  Home &nbsp; <FaChevronRight className=" sm:size-3 size-2" />{" "}
                  &nbsp; Products &nbsp;{" "}
                  <FaChevronRight className=" sm:size-3 size-2" /> &nbsp;{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => window.history.go(-2)}
                  >
                    {productname == "product" ? "Indoor" : productname} Lights
                  </span>{" "}
                  &nbsp; <FaChevronRight className=" sm:size-3 size-2" /> &nbsp;{" "}
                  {modelId ? modelId : ""}
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
                    className="w-10 text-white flex  justify-center items-center text-xl"
                    onClick={handlePrevClick}
                  >
                    <GrPrevious />
                  </button>

                  <div className="relative w-64 h-64 previewxs:w-80 previewxs:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] flex flex-col justify-center items-center">
                    <div className=" w-[90%] h-[90%] bg-transparent">
                      <img
                        className="w-full object-contain h-full"
                        src={bgimage[previewIndex]}
                        alt="preview"
                      />
                    </div>

                    <button
                      className="absolute -right-5 xl:top-10 top-14 cursor-pointer text-black bg-white rounded-full p-1"
                      onClick={handleCloseOutsideClick}
                    >
                      <TfiClose />
                    </button>
                  </div>
                  <button
                    className="w-10 text-white flex justify-center items-center text-xl"
                    onClick={handleNextClick}
                  >
                    <GrNext />
                  </button>
                </div>
              )}

              <div className=" bg-[#F3F3F3] py-5 lg:py-8 md:bg-Bannerbg bg-contain bg-no-repeat w-full px-5 sm:px-14 flex md:flex-row flex-col md:gap-3 gap-10">
                <div className="relative w-full md:w-[42%] lg:w-[37%]">
                  <div
                    className="cursor-pointer bg-no-repeat bg-cover h-[250px] sm:h-[379px] shadow-2xl drop-shadow-lg rounded-xl w-full"
                    style={{
                      backgroundImage: `url(${bgimage[selectedImageIndex]})`,
                      backgroundPosition: "center",
                      transition: "1s ease",
                    }}
                    onClick={() => handleThumbnailClick(selectedImageIndex)}
                  />
                </div>
                <div className=" w-full md:w-[58%] lg:w-[63%]   sm:pl-0 ">
                  <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-5 capitalize">
                    {modalname ? modalname : ""}
                  </p>
                  <img
                    src={line1}
                    alt=""
                    className=" pt-1 md:block hidden xl:w-[90%] h-10"
                  />
                  <div className="md:text-xs  lg:text-[13px]  leading-7  md:leading-7 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                    <ul className="list-disc">
                      <p className="-ml-4 pb-5 text-justify">
                        {addFeature ? addFeature : ""}
                      </p>
                      {addfeaturepoints &&
                        addfeaturepoints.map((point) => (
                          <li key={point._key}>{point.featurepoint}</li>
                        ))}
                      <p className="pt-5 -ml-4 text-justify">
                        {addapplicationareas ? addapplicationareas : ""}
                      </p>
                    </ul>
                  </div>
                  <div className="flex items-center justify-start md:pl-10 lg:pl-[22%] pb-5 md:pb-0">
                    <a
                      href={productpdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className=" flex justify-center cursor-pointer items-center mt-3  w-48 h-10 rounded bg-white hover:bg-pink-100 shadow-md"
                    >
                      Specification File
                      <MdDownload className="text-[#F2667C]  my-1 mx-2 " />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Tables */}
          <div className="w-full md:px-14  rounded-t-xl py-5">
            <div className="">
              <div className="">
                <p className="text-center font-semibold text-xl pt-5">
                  {specificationHeading ? specificationHeading : ""}
                </p>
              </div>
              <div
                className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
                  table1Column === null ? "hidden" : ""
                }`}
              >
                <h2 className="font-semibold text-sm pt-5 pb-2">
                  {specificationTableHeading1 ? specificationTableHeading1 : ""}
                </h2>
                <table
                  className=" xl:w-full w-[1400px] text-xs border border-gray-400"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="">
                    <tr>
                      {table1Header &&
                        table1Header.map((header) => (
                          <th 
                            className="border-r capitalize border-b border-gray-400 text-xs px-3 py-2"
                            key={header._key}
                          >
                            {header.addtableheaders}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table1Column &&
                      table1Column.map((columnarray, index) => (
                        <tr key={index}> 
                          {columnarray &&
                            columnarray.addtablecolumns.map((item, ind) => (
                              <td key={ind}
                                className={`border-r border-b border-gray-400  px-3 py-2 `}
                              >
                                {item.column}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div
                className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
                  table2Column === null ? "hidden" : ""
                }`}
              >
                <h2 className="font-semibold text-sm pt-5 pb-2">
                  {specificationTableHeading2 ? specificationTableHeading2 : ""}
                </h2>
                <table
                  className=" xl:w-full w-[1400px] text-xs border border-gray-400"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="">
                    <tr>
                      {table2Header &&
                        table2Header.map((header) => (
                          <th
                            className="border-r border-b border-gray-400 text-xs px-3 py-2"
                            key={header._key}
                          >
                            {header.addtableheaders}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table2Column &&
                      table2Column.map((columnarray, index) => (
                        <tr>
                          {columnarray &&
                            columnarray.addtablecolumns.map((item, ind) => (
                              <td
                                className={`border-r border-b border-gray-400  px-3 py-2 `}
                              >
                                {item.column}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div
                className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
                  table3Column === null ? "hidden" : ""
                }`}
              >
                <h2 className="font-semibold text-sm pt-5 pb-2">
                  {specificationTableHeading3 ? specificationTableHeading3 : ""}
                </h2>
                <table
                  className=" xl:w-full w-[1400px] text-xs border border-gray-400"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="">
                    <tr>
                      {table3Header &&
                        table3Header.map((header) => (
                          <th
                            className="border-r border-b border-gray-400 text-xs px-3 py-2"
                            key={header._key}
                          >
                            {header.addtableheaders}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table3Column &&
                      table3Column.map((columnarray, index) => (
                        <tr>
                          {columnarray &&
                            columnarray.addtablecolumns.map((item, ind) => (
                              <td
                                className={`border-r border-b border-gray-400  px-3 py-2 `}
                              >
                                {item.column}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div
                className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
                  table4Column === null ? "hidden" : ""
                }`}
              >
                <h2 className="font-semibold text-sm pt-5 pb-2">
                  {specificationTableHeading4 ? specificationTableHeading4 : ""}
                </h2>
                <table
                  className=" xl:w-full w-[1400px] text-xs border border-gray-400"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="">
                    <tr>
                      {table4Header &&
                        table4Header.map((header) => (
                          <th
                            className="border-r border-b border-gray-400 text-xs px-3 py-2"
                            key={header._key}
                          >
                            {header.addtableheaders}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table4Column &&
                      table4Column.map((columnarray, index) => (
                        <tr>
                          {columnarray &&
                            columnarray.addtablecolumns.map((item, ind) => (
                              <td
                                className={`border-r border-b border-gray-400  px-3 py-2 `}
                              >
                                {item.column}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div
                className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
                  table5Column === null ? "hidden" : ""
                }`}
              >
                <h2 className="font-semibold text-sm pt-5 pb-2">
                  {specificationTableHeading5 ? specificationTableHeading5 : ""}
                </h2>
                <table
                  className=" xl:w-full w-[1400px] text-xs border border-gray-400"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="">
                    <tr>
                      {table5Header &&
                        table5Header.map((header) => (
                          <th
                            className="border-r border-b border-gray-400 text-xs px-3 py-2"
                            key={header._key}
                          >
                            {header.addtableheaders}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table5Column &&
                      table5Column.map((columnarray, index) => (
                        <tr>
                          {columnarray &&
                            columnarray.addtablecolumns.map((item, ind) => (
                              <td
                                className={`border-r border-b border-gray-400  px-3 py-2 `}
                              >
                                {item.column}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div
                className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
                  table6Column === null ? "hidden" : ""
                }`}
              >
                <h2 className="font-semibold text-sm pt-5 pb-2">
                  {specificationTableHeading6 ? specificationTableHeading6 : ""}
                </h2>
                <table
                  className=" xl:w-full w-[1400px] text-xs border border-gray-400"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="">
                    <tr>
                      {table6Header &&
                        table4Header.map((header) => (
                          <th
                            className="border-r border-b border-gray-400 text-xs px-3 py-2"
                            key={header._key}
                          >
                            {header.addtableheaders}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table6Column &&
                      table6Column.map((columnarray, index) => (
                        <tr>
                          {columnarray &&
                            columnarray.addtablecolumns.map((item, ind) => (
                              <td
                                className={`border-r border-b border-gray-400  px-3 py-2 `}
                              >
                                {item.column}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* notes */}
          {notes && notes.length > 0 ? (
            <div className="md:px-[75px] px-5">
              <p className="text-sm font-semibold pb-1">Notes:</p>
              <ul className="flex text-sm flex-col gap-3 list-disc p-5">
                {" "}
                {notes &&
                  notes.map((note, index) => (
                    <li className="">{note?.notes.replace(/^\s+/, "")}</li>
                  ))}
              </ul>
            </div>
          ) : null}

          {/* Images   */}
          <div
            className={`flex md:flex-row flex-col justify-center gap-10 lg:gap-0 lg:justify-evenly items-center pt-10 ${
              leftSideImage === null ? "hidden" : ""
            }`}
          >
            <img
              src={leftSideImage && leftSideImage.asset.url}
              alt=""
              className="w-96 lg:px-0 px-5"
            />
            <section className="flex flex-col gap-10 p-4">
              <img
                src={rightSideImage1 && rightSideImage1.asset.url}
                className="w-80"
                alt=""
              />
              <img
                src={rightSideImage2 && rightSideImage2.asset.url}
                className="w-80"
                alt=""
              />
            </section>
          </div>

          {/* Images section 2 */}
          <div className={`w-full ${modelimages === null ? "hidden" : ""}`}>
            <div className="w-[87%] mx-auto space-y-5 flex flex-col">
              {
                modelimages?.map((item,index)=>(
                  <img key={index} src={item?.image?.asset?.url} alt="" className="" />
                ))
              }
            </div>
          </div>

          {/* model overview*/}
          <div className={`py-5 ${modeloverview === null ? "hidden" : ""}`}>
            <h2 className="text-center font-semibold text-xl py-5">
              Model Overview
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-5 xs:px-0 px-4 drop-shadow-lg">
              {modeloverview?.map((item,index) => (
                <div key={index} className=" flex md:flex-row flex-col  items-center border border-pink-400 p-5 gap-5 w-80  rounded-md bg-white hover:drop-shadow-lg transition-all duration-500">
                  <div className="w-1/2  rounded-lg">
                    <img
                      src={item?.image?.asset?.url}
                      alt=""
                      className="w-24
               h-full rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-semibold text-sm">{item?.title}</h2>
                    {item?.overview?.map((items,index) => (
                      <p key={index} className="text-xs text-gray-700 text-justify">
                        {items?.overviewList}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* model cct*/}
          <div className={`py-5 ${modelcct === null ? "hidden" : ""}`}>
            <h2 className="text-center font-semibold text-xl py-5">
              Model CCT
            </h2>
            <div className=" flex flex-wrap justify-center items-center gap-5 xs:px-0 px-4 drop-shadow-lg">
              {modelcct?.map((item,index) => (
                <div key={index} className="w-80  bg-white rounded-lg border-t-8 border-pink-400 px-4 py-3 flex flex-col justify-around shadow-md hover:drop-shadow-lg transition-all duration-500">
                  <p className="text-lg font-bold font-sans">{item?.specname}</p>

                  <ul className="list-disc w-full pl-4 py-3 flex flex-col gap-y-1 text-xs text-gray-700 text-justify">
                   {item?.content?.map((items,ind)=>(
                    <li key={ind}>{items?.contentlist}</li>
                   ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* title and content */}
          <div>
            <div className=" sm:p-5 flex flex-col gap-5">
              {/* <h1 className="text-center font-bold text-xl">
                {modelId ? modelId : ""}
              </h1> */}
              <div
                className={`flex sm:px-14 px-5 py-10 md:py-5 sm:flex-row flex-col gap-10 items-center justify-center ${
                  title1 === null ? "hidden" : ""
                }`}
              >
                <img
                  src={modelImage1 && modelImage1.asset.url}
                  alt=""
                  className="w-24"
                />
                <div className="sm:w-[90%]">
                  <p className="font-medium pb-2 text-start">
                    {title1 ? title1 : ""}
                  </p>
                  <p className="text-[12px] sm:text-start text-justify">
                    {content1 ? content1 : ""}
                  </p>
                </div>
              </div>
              <div
                className={`flex sm:px-14 px-5 sm:flex-row flex-col gap-10 items-center justify-center ${
                  title2 === null ? "hidden" : ""
                }`}
              >
                <img
                  src={modelImage2 && modelImage2.asset.url}
                  alt=""
                  className="w-24 h-24"
                />
                <div className="sm:w-[90%]">
                  <p className="font-medium pb-2 text-start">
                    {title2 ? title2 : ""}
                  </p>
                  <p className="text-[12px] sm:text-start text-justify">
                    {content2 ? content2 : ""}
                  </p>
                </div>
              </div>
              <div
                className={`flex sm:px-14 px-5 sm:flex-row flex-col gap-10 items-center justify-center ${
                  title3 === null ? "hidden" : ""
                }`}
              >
                <img
                  src={modelImage3 && modelImage3.asset.url}
                  alt=""
                  className="w-24 h-24"
                />
                <div className="sm:w-[90%]">
                  <p className="font-medium pb-2 text-start">
                    {title3 ? title3 : ""}
                  </p>
                  <p className="text-[12px] sm:text-start text-justify">
                    {content3 ? content3 : ""}
                  </p>
                </div>
              </div>
              <div
                className={`flex sm:px-14 px-5 sm:flex-row flex-col gap-10 items-center justify-center ${
                  title4 === null ? "hidden" : ""
                }`}
              >
                <img
                  src={modelImage4 && modelImage4.asset.url}
                  alt=""
                  className="w-24 h-24"
                />
                <div className="sm:w-[90%]">
                  <p className="font-medium pb-2 text-start">
                    {title4 ? title4 : ""}
                  </p>
                  <p className="text-[12px] sm:text-start text-justify">
                    {content4 ? content4 : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* contactus */}
          <section>
            <div className="bg-Formbg h-full bg-cover form flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 md:px-24 px-5 lg:gap-10 gap-3">
              <div className="">
                <p className="text-3xl sm:text-5xl font-medium">
                  {contactTitle ? contactTitle : "Loading..."}
                </p>
                <p className="py-5 text-[13px] md:text-start text-justify">
                  {contactContent ? contactContent : "Loading..."}
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
                    placeholder="E-mail"
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
                    name="message"
                    id="message"
                    rows="4"
                    className="bg-gray-200 p-2 my-1 rounded-lg w-full border border-[#0E82B4]"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                  <div className="bg-white rounded-lg drop-shadow-2xl">
                    <button type="submit" className=" px-8   my-2  font-medium">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      ) : (
        <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
          <p className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent  bg-clip-text">
            No Data Found
          </p>
          <div className="w-full gap-x-2 flex justify-center items-center">
            <div className="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"></div>
            <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full "></div>
            <div className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"></div>
          </div>
        </div>
      )}
    </div>
  );
};
