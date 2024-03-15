import React from "react";
import Facade1 from "../../assets/Facadelight1.png";
import Facade2 from "../../assets/Facadelight2.png";
// import Facade3 from "../../assets/Facadelight3.png";
import Facade4 from "../../assets/Facadelight4.png";
import Facade5 from "../../assets/Facadelight5.png";
import Facade6 from "../../assets/Facadelight6.png";
import Facade7 from "../../assets/Facadelight7.png";
import img1 from "../../assets/light2.jpg";
import { FaChevronRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import product1 from "../../assets/Linear Light L Series.pdf";
import line1 from "../../assets/line1.png";
import { FaGreaterThanEqual } from "react-icons/fa6";
import imagecontent1 from "../../assets/imagecontent 1.png";
import imagecontent2 from "../../assets/imagecontent 2.png";
import linearcontent1 from "../../assets/linearcontent1.png";
import linearcontent2 from "../../assets/linearcontent2.png";
import lightsway from "../../assets/lightsway.png";
import linearoutline from "../../assets/linearouline.png";
import { Explore } from "./Explore";
import { TfiClose } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";
import Collection from "./Collection";

export const Facade = () => {
  // React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);


  

  const bgimages = [Facade1, Facade2, Facade4, Facade5, Facade6, Facade7];

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
    <article className="font">
      <section className="">
        <div className="w-full md:flex hidden">
          <div className="w-[10%]"></div>
          <div className="w-[90%]">
            <p className="flex font-medium  text-black py-5">
              Facade Lights &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
              F21-24V-5050
            </p>
          </div>
        </div>

        <section className="relative ">
          <div className="md:h-[550px] w-full md:flex hidden">
            <div className="w-[10%] bg-white"></div>
            <div className="w-[90%] bg-[#F3F3F3]"></div>
          </div>
          <p className="flex bg-[#F3F3F3] pt-5 px-5 md:hidden font-medium  text-black">
            Facade Lights &nbsp; <FaChevronRight className="mt-1" /> &nbsp;
            F21-24V-5050
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
              F21 Mono color series led neon flex
              </p>
              <img
                src={line1}
                alt=""
                className=" pt-1 md:block hidden xl:w-[90%] h-10"
              />
              <div className="md:text-xs  lg:text-[13px]  md:leading-6 text-[#666666] lg:pl-[24%] md:pl-10 pl-4">
                <ul className="list-disc">
                  <li className="">Uniform and even light output.</li>
                  <li className="">
                  Dome surface with 270 degree beam angle.
                  </li>
                  <li className="">
                  Constant Current IC built in optional.
                  </li>
                  <li> Dimmable with Dali, 0/1-10, DMX,PWM.</li>
                  <li>High Lumen output, up to 320lm/m for 12W version.</li>
                  <li>Full encapsulated with IP68 Level. </li>
                  <li>High Reliability.</li>
                  <li>3 or 5 Years warranty.</li>
                </ul>
              </div>
              <div className="flex items-center justify-start md:pl-10 lg:pl-[22%]">
                <a
                  href={product1}
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

        <div>
          <Collection/>
        </div>
      <div>
        <Explore />
      </div>

      {/* footer */}
    </article>
  );
};
