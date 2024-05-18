import React, { useEffect, useState } from "react";
import  auras from "../../assets/auras (2).gif"
import play from "../../assets/play.png";
import { Link } from "react-router-dom";
import Sanityclient from "../common/Sanityclient";
function Video() {
  const[alldata,setalldata] =useState([])
  useEffect(()=>{
    const getdata=async()=>{
      await Sanityclient.fetch(`*[_type == "home"]{
      
        fifth[]{
          image{
            asset->{
              url
            }
          },title
          ,subtitle,
          link,
          para
        }
      }`).then((res)=>{
          console.log(res[0],'video')
          setalldata(res[0])
        })
        }
        getdata();
      
  },[])
  return (
    <div>
      {alldata&&alldata.fifth&&alldata.fifth.map((item,index)=>(
 <div className="w-full relative h-screen">
 <img src={item&&item?.image?.asset?.url} className='w-full h-full absolute top-0 left-0' alt="" />
 <div className="bg-black bg-opacity-60 absolute w-full h-full "></div>
 <div className="h-full w-full  absolute flex justify-center items-center">
   <div className="h-full flex flex-col justify-around items-center gap-">
     <div className="flex flex-col gap-2 justify-center items-center">
       <h1 className="text-white text-3xl md:text-4xl fl">
         {item?.title}
       </h1>
       <p className="text-white sm:text-base text-sm">
         {item?.subtitle}
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
     {item?.para}
     </div>
   </div>
 </div>
</div>
      ))}
     
    </div>
  );
}

export default Video;
