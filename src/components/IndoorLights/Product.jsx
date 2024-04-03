import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import line1 from "../../assets/line1.png";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";
import Sanityclient from "../common/Sanityclient";
import { useParams } from "react-router-dom";

export const Product = () => {
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
  const [table1Header, setTable1Header] = useState([]);
  const [table2Header, setTable2Header] = useState([]);
  const [table3Header, setTable3Header] = useState([]);
  const [table4Header, setTable4Header] = useState([]);
  const [modelId, setModelId] = useState("");
  const [contactTitle, setcontactTitle] = useState('');
  const [contactContent, setcontactContent] = useState('');

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 3) % bgimage.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [bgimage]);

  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "product"]{modelid, bannerimages[]{ bannerimage{ asset->{ url, id }}}, modalname, features, featurepoints, applicationareas, productPdf{ asset->{ url, id }}, specificationheading, datatable1heading, datatable2heading, datatable3heading, leftsideimage{asset->{ url, id }}, rightsideimage1{asset->{ url, id }}, rightsideimage2{asset->{ url, id }}, model1title, model1contents, model1image{asset->{ url, id }}, model2title, model2contents, model2image{asset->{ url, id }}, model3title, model3contents, model3image{asset->{ url, id }}, model4title, model4contents, model4image{asset->{ url, id }}, contacttitle,  contactcontent, table1headers, table1columns, table2headers, table2columns, table3headers, table3columns, table4columns, table4headers  }`
    )
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          console.log(data);
          if (id.toLowerCase() === data[i].modelid.toLowerCase()) {
            console.log(data[i], "console data");
            Setbgimage(
              data[i].bannerimages.map((item) => item.bannerimage.asset.url)
            );
            setModalName(data[i].modalname);
            setaddFeature(data[i].features);
            setaddfeaturepoints(data[i].featurepoints);
            setaddapplicationareas(data[i].applicationareas);
            setproductpdf(data[i]?.productPdf?.asset?.url);
            setSpecificationHeading(data[i].specificationheading);
            setSpecificationTableHeading1(data[i].datatable1heading);
            setSpecificationTableHeading2(data[i].datatable2heading);
            setSpecificationTableHeading3(data[i].datatable3heading);
            setSpecificationTableHeading4(data[i].datatable4heading);
            setleftSideImage(data[i].leftsideimage);
            setrightSideImage1(data[i].rightsideimage1);
            setrightSideImage2(data[i].rightsideimage2);
            setTitle1(data[i].model1title);
            setContent1(data[i].model1contents);
            setmodelImage1(data[i].model1image);
            setTitle2(data[i].model2title);
            setContent2(data[i].model2contents);
            setmodelImage2(data[i].model2image);
            setTitle3(data[i].model3title);
            setContent3(data[i].model3contents);
            setmodelImage3(data[i].model3image);
            setTitle4(data[i].model4title);
            setContent4(data[i].model4contents);
            setmodelImage4(data[i].model4image);
            setTable1Header(data[i].table1headers);
            setTable2Header(data[i].table2headers);
            setTable3Header(data[i].table3headers);
            setTable1Column(data[i].table1columns);
            setTable2Column(data[i].table2columns);
            setTable3Column(data[i].table3columns);
            setModelId(data[i].modelid);
            setcontactTitle(data[i].contacttitle)
            setcontactContent(data[i].contactcontent)
            setTable4Column(data[i].table4columns)
            setTable4Header(data[i].table4headers)
          }
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
              &nbsp; {modelId ? modelId : ""}
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
                className="w-10 text-white flex justify-center items-center text-xl"
                onClick={handlePrevClick}
              >
                <GrPrevious />
              </button>

              <div className="relative w-64 h-64 previewxs:w-80 previewxs:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] flex flex-col justify-center items-center">
                <div className=" bg-white">
                  <img
                    className="w-full h-full"
                    src={bgimage[previewIndex]}
                    alt="preview"
                  />
                </div>
                <button
                  className="absolute right-3 xl:top-20 top-14 cursor-pointer text-black bg-white rounded-full p-1"
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

          <div className=" bg-[#F3F3F3] py-5 lg:py-8 md:bg-Bannerbg bg-contain w-full px-5 sm:px-14 flex md:flex-row flex-col md:gap-3 gap-10">
            <div className="relative w-full md:w-[42%] lg:w-[37%]">
              <div
                className="cursor-pointer bg-cover h-[250px] sm:h-[379px] shadow-2xl drop-shadow-lg rounded-xl w-full"
                style={{
                  backgroundImage: `url(${bgimage[selectedImageIndex]})`,
                  backgroundPosition: "center",
                  transition: "background-image 1s ease",
                }}
                onClick={() => handleThumbnailClick(selectedImageIndex)}
              />
            </div>
            <div className=" w-full md:w-[58%] lg:w-[63%]   sm:pl-0 ">
              <p className="text-base xs:text-lg lg:text-2xl font-medium lg:pl-[22%] md:pl-10  border-b-[1.5px] border-[#F2667C] md:border-none mb-5">
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
              <div className="flex items-center justify-start md:pl-10 lg:pl-[22%]">
                <a
                  href={productpdf}
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
              {specificationHeading ? specificationHeading : ""}
            </p>
          </div>
          <div
            className={`w-full p-5 lg:overflow-auto overflow-x-scroll drop-shadow-2xl ${
              table1Header === null ? "hidden" : ""
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
                        className="border-r border-b border-gray-400 text-xs px-3 py-2"
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
              table2Header === null ? "hidden" : ""
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
              table3Header === null ? "hidden" : ""
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
              table4Header === null ? "hidden" : ""
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
        </div>
      </div>
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
      <div>
        <div className=" sm:p-5 flex flex-col gap-5">
          <h1 className="text-center font-bold text-xl">
            {modelId ? modelId : ""}
          </h1>
          <div
            className={`flex sm:px-14 px-5 sm:flex-row flex-col gap-10 items-center justify-center ${
              title1 === null ? "hidden" : ""
            }`}
          >
            <img
              src={modelImage1 && modelImage1.asset.url}
              alt=""
              className="w-24 h-24"
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
      
    </article>
  );
};
