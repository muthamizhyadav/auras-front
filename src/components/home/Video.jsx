import React from "react";
import  auras from "../../assets/auras (2).gif"
import play from "../../assets/play.png";
import { Link } from "react-router-dom";
function Video() {
  return (
    <div>
      <div className="w-full relative h-screen">
        <img src={auras} className='w-full h-full absolute top-0 left-0' alt="" />
        <div className="bg-black bg-opacity-60 absolute w-full h-full "></div>
        <div className="h-full w-full  absolute flex justify-center items-center">
          <div className="h-full flex flex-col justify-around items-center gap-">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl fl">
                VIDEO GALLERY
              </h1>
              <p className="text-white sm:text-base text-sm">
                Get more in your vision
              </p>
            </div>
            <Link to="#">
              <img
                src={play}
                alt="play"
                className="sm:w-16 w-12 cursor-pointer"
              ></img>
            </Link>
            <div className="text-white  text-sm w-[80%] mx-auto text-justify md:w-[50%]">
              Dive into our video gallery to uncover an extensive range of
              products waiting to captivate you. Explore further for an
              immersive experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
