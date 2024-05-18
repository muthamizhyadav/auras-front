import React, { useEffect } from "react";
import auraslight from "../../assets/aurasLight1.png";
import line from "../../assets/line.png";
import line2 from "../../assets/line2.png";
import tl90 from "../../assets/TL90-LED-Track-light1.png";
import line3 from "../../assets/line3.png";
import back from "../../assets/home1.png";
import vector from "../../assets/vec.png";
import vector2 from "../../assets/img2.png";
import vector3 from "../../assets/img3.png";
import Video from "./Video";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import strip from '../../assets/strip.jpg'
import strip2 from '../../assets/strips.jpg'
import strip3 from '../../assets/roll.jpg'
import second from '../../assets/Facadelight5.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

// import required modules
import { Navigation ,Autoplay,Pagination} from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";
import Sanityclient from "../common/Sanityclient";
import BlockContent from "@sanity/block-content-to-react";
const Homepage = () => {
  const[loader,setloader]=useState(true)
   const nav=useNavigate()
  const[alldata,setalldata]=useState([])
  const[image,setimages]=useState([])
useEffect(()=>{
  const getdata=async()=>{
await Sanityclient.fetch(`*[_type == "home"]{
  banner[]{
    Image{
    asset->{
      url
    }
    },
    title,
    description,
    button
  },
  second[]{
    image{
    asset->{
      url
    }
    },
  title,
  title2,
  side,
  para
  },
  thirdSection[]{
    thirdheading,
      third[]{
    image{
        asset->{
         url}
    },
  title,buttonlink
      }
  },
  fourth[]{
    title,content,card[]{
  
    image{
      asset->{
        url
      }
    },Cardtitle,
    Cardcategory,
    Cardtype
    }
  },
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
    setalldata(res[0])
    setloader(false)
    setimages(res[0].thirdSection[0].third)
    console.log(res[0])
    console.log(res[0].thirdSection[0].third)
  })
  }
  getdata();
},[])
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const swiperRef = useRef(null);
  const [run,setrun]=useState(0)
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setrun(
        (prevIndex) => (prevIndex + image.length+1) % image.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  
  },[image])
  useEffect(()=>{
    console.log(run)
  },[run])
  return (
<div>
{loader == true ?
      (
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <p className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent  bg-clip-text">
         
        </p>
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div className="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"></div>
          <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full "></div>
          <div className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"></div>
        </div>
      </div>
    ):<>
    <div>
    <Swiper
    pagination={{
      clickable: true,
    }}
    ref={swiperRef}
  
      rewind={true}
      // navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation,Autoplay,Pagination]}
      className="mySwiper w-full h-screen -mt-10 "
    >
      {alldata&& alldata.banner&& alldata.banner.map((item,index)=>(
            <SwiperSlide className="w-full h-full flex p-5 justify-center  items-center relative">
            <img src={item&&item?.Image?.asset?.url} className="w-full h-full absolute top-0 object-cover"></img>
    
              <div className="w-full h-full bg-black bg-opacity-50 absolute top-0"></div>
            <div className="flex gap-10 z-10   justify-center items-center w-full h-full flex-col">
              <p className="lg:text-6xl text-2xl xs:text-4xl text-white   font-semibold">{item?.title}</p>
              <p className="sm:text-base text-xs text-white text-center"> {item?.description} </p>
              <button onClick={()=>{nav(`${item?.button}`),window.scrollTo({top:0,behavior:'smooth'})} } className="bg-primaryColor overflow-hidden group px-3 py-2 hover:bg-white hover:text-black duration-200  rounded-lg flex justify-center items-center relative gap-2"><span className="group-hover:translate-x-5 transition-all duration-150">Learn More</span>
              <FaArrowRight className="group-hover:translate-x-10 transition-all duration-150"></FaArrowRight>
              <FaArrowRight className="group-hover:-translate-x-12 -translate-x-40 absolute transition-all duration-150"></FaArrowRight>
              
              
              </button>
            </div>
            </SwiperSlide>
      ))
}
      {/* <SwiperSlide className="w-full h-full flex p-5 justify-center  items-center relative">
      <img src={strip} className="w-full h-full absolute top-0 object-cover"></img>

        <div className="w-full h-full bg-black bg-opacity-50 absolute top-0"></div>
      <div className="flex gap-10 z-10   justify-center items-center w-full h-full flex-col">
        <p className="lg:text-6xl text-2xl xs:text-4xl text-white   font-semibold">LED STRIP LIGHTS</p>
        <p className="sm:text-base text-xs text-white text-center"> LEDs consume significantly less power, helping you save on energy bills while reducing your carbon footprint </p>
        <button className="bg-primaryColor overflow-hidden group px-3 py-2 hover:bg-white hover:text-black duration-200  rounded-lg flex justify-center items-center relative gap-2"><span className="group-hover:translate-x-5 transition-all duration-150">Learn More</span>
        <FaArrowRight className="group-hover:translate-x-10 transition-all duration-150"></FaArrowRight>
        <FaArrowRight className="group-hover:-translate-x-12 -translate-x-40 absolute transition-all duration-150"></FaArrowRight>
        
        
        </button>
      </div>
      </SwiperSlide> */}
      {/* <SwiperSlide className="w-full h-full flex p-5 justify-center  items-center relative">
      <img src={strip2} className="w-full h-full absolute top-0 object-cover"></img>

        <div className="w-full h-full bg-black bg-opacity-50 absolute top-0"></div>
      <div className="flex gap-10 z-10   justify-center items-center w-full h-full flex-col">
        <p className="lg:text-6xl text-2xl xs:text-4xl text-white   font-semibold">LED STRIP LIGHTS</p>
        <p className="sm:text-base text-xs text-white text-center"> LEDs consume significantly less power, helping you save on energy bills while reducing your carbon footprint </p>
        <button className="bg-primaryColor overflow-hidden group px-3 py-2 hover:bg-white hover:text-black duration-200  rounded-lg flex justify-center items-center relative gap-2"><span className="group-hover:translate-x-5 transition-all duration-150">Learn More</span>
        <FaArrowRight className="group-hover:translate-x-10 transition-all duration-150"></FaArrowRight>
        <FaArrowRight className="group-hover:-translate-x-12 -translate-x-40 absolute transition-all duration-150"></FaArrowRight>
        
        
        </button>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-full flex p-5 justify-center  items-center relative">
      <img src={strip3} className="w-full h-full absolute top-0 object-cover"></img>

        <div className="w-full h-full bg-black bg-opacity-50 absolute top-0"></div>
      <div className="flex gap-10 z-10   justify-center items-center w-full h-full flex-col">
        <p className="lg:text-6xl text-2xl xs:text-4xl text-white   font-semibold">LED STRIP LIGHTS</p>
        <p className="sm:text-base text-xs text-white text-center"> LEDs consume significantly less power, helping you save on energy bills while reducing your carbon footprint </p>
        <button className="bg-primaryColor overflow-hidden group px-3 py-2 hover:bg-white hover:text-black duration-200  rounded-lg flex justify-center items-center relative gap-2"><span className="group-hover:translate-x-5 transition-all duration-150">Learn More</span>
        <FaArrowRight className="group-hover:translate-x-10 transition-all duration-150"></FaArrowRight>
        <FaArrowRight className="group-hover:-translate-x-12 -translate-x-40 absolute transition-all duration-150"></FaArrowRight>
        
        
        </button>
      </div>
      </SwiperSlide> */}
      

      
      
     
    </Swiper>
      {/* banner */}
      {/* <div className="bg-banner h-screen w-full bg-cover bg-no-repeat flex flex-col justify-center ">
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="bg-white bg-opacity-50 w-[70%] h-[110px] flex flex-col justify-center items-center ">
            <p className="text-white  shadow-black md:text-4xl px-2 sm:text-xl text-sm drop-shadow-lg ">
              Lighting the Way to Inspired Living
            </p>
          </div>
          <div className="bg-white bg-opacity-50 w-[30%] h-[110px]"></div>
        </div>
      </div> */}
 
      {/* second secction */}
      {alldata&&alldata.second&&alldata.second.map((item, index)=>(
        <div className="bg-gradient-to-r from-black to-[#666666]">
        <div className="flex lg:flex-row flex-col lg:items-start  items-center justify-center lg:relative">
          <hr className="w-16 h-[1px] bg-[#666666] mt-36 lg:block hidden" />
          <div className="lg:w-[50%] w-full py-10 p-5 lg:pt-20 pt-10">
            <div className="flex flex-row items-baseline lg:ml-10">
              <p className="text-white sm:text-base text-sm">{item?.
side}</p>
              <p className="text-primaryColor xs:text-6xl text-3xl">{item?.
title
}</p>
            </div>
            <div className="lg:block hidden w-full h-full">
              <img src={line2} alt="" className="ml-7 w-full h-full" />
            </div>
            <div className="lg:hidden block">
              <hr className="w-full h-0.5 bg-white mt-2" />
            </div>
            <div className="lg:absolute top-36 left-56 lg:mt-0 mt-2 lg:pl-0 pl-[90px]">
              <p className="text-primaryColor xs:text-6xl text-3xl">
                {item?.title2
}
              </p>
            </div>
            <div className="lg:absolute top-1/2 lg:-mt-5 mt-5 lg:text-start text-justify lg:ml-10 text-white text-sm font-light lg:w-[33%] w-full space-y-5">
              <BlockContent blocks={item?.para} />
            </div>
          </div>
          <div className="sm:w-[50%]  flex lg:py-16 lg:flex-row  flex-col justify-center lg:p-0 p-10">
            <img src={item&&item?.image.asset?.url} alt="" className="w-full" />
            <img
              src={line}
              alt=""
              className="h-[50%] w-full overflow-hidden lg:block hidden"
            />
          </div>
        </div>
      </div>
      ))}
      {/* <div className="bg-gradient-to-r from-black to-[#666666]">
        <div className="flex lg:flex-row flex-col lg:items-start  items-center justify-center lg:relative">
          <hr className="w-16 h-[1px] bg-[#666666] mt-36 lg:block hidden" />
          <div className="lg:w-[50%] w-full py-10 p-5 lg:pt-20 pt-10">
            <div className="flex flex-row items-baseline lg:ml-10">
              <p className="text-white sm:text-base text-sm">Unveiling Our</p>
              <p className="text-primaryColor xs:text-6xl text-3xl">Lux </p>
            </div>
            <div className="lg:block hidden w-full h-full">
              <img src={line2} alt="" className="ml-7 w-full h-full" />
            </div>
            <div className="lg:hidden block">
              <hr className="w-full h-0.5 bg-white mt-2" />
            </div>
            <div className="lg:absolute top-36 left-56 lg:mt-0 mt-2 lg:pl-0 pl-[90px]">
              <p className="text-primaryColor xs:text-6xl text-3xl">
                Edition
              </p>
            </div>
            <div className="lg:absolute top-1/2 lg:-mt-5 mt-5 lg:text-start text-justify lg:ml-10 text-white text-sm font-light lg:w-[33%] w-full space-y-5">
              <p className="">
                Experience sophistication with Our Lux Edition. Elevate your
                space with opulent chandeliers, exquisite table lamps, and
                luxurious decor pieces. Indulge in timeless elegance.
              </p>
              <p>
                From opulent chandeliers that cast a mesmerizing glow to
                exquisite table lamps that add a touch of glamour to any room,
                each piece is crafted to perfection. Indulge in the richness
                of materials and impeccable finishes that define luxury
                living.
              </p>
            </div>
          </div>
          <div className="sm:w-[50%]  flex lg:py-16 lg:flex-row  flex-col justify-center lg:p-0 p-10">
            <img src={auraslight} alt="" className="" />
            <img
              src={line}
              alt=""
              className="h-[50%] w-full overflow-hidden lg:block hidden"
            />
          </div>
        </div>
      </div> */}

      {/* third section */}
      {alldata&&alldata.thirdSection&&alldata.thirdSection.map((item,index)=>( <div>
        <div className="lg:hidden block p-5">
          <h1 className=" font-medium text-2xl downtext">{item?.thirdheading}</h1>
          <div className="">
            <hr className="w-1/2 h-0.5 bg-primaryColor " />
          </div>
        </div>
       
        
        <div className="w-full lg:min-h-[400px] relative overflow-hidden">
        <div className="hidden lg:block absolute w-full pl-20  pt-10">
          <h1 className=" font-medium text-3xl downtext">{item?.thirdheading}</h1>
          <div className="">
            <hr className="w-1/2 h-0.5 ml-5 bg-primaryColor " />
          </div>
        </div>
{item&&item?.third&&item?.third?.map((listItem,indexes)=>(
<div className="w-full h-full">
   {run==indexes&&
        <div className="flex lg:flex-row flex-col-reverse w-full h-full justify-between 2xl:items-center ">
        <div className="lg:w-[60%] w-full">
         
          
          <div className="lg:p-10 lg:ml-5 lg:pt-40 flex p-5 flex-col lg:items-start items-center justify-center gap-7 ">
            <p className="md:text-3xl downtext sm:text-2xl xs:text-xl text-lg font-semibold  lg:text-start text-center">
              {listItem?.title}
            </p>
            <Link onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} to={listItem?.buttonlink}>
              <button className="w-fit buds drop-shadow-2xl mx-auto font-medium lg:mx-0 text-xs rounded-md px-7 bg-white shadow-xl  p-3 hover:bg-primaryColor hover:text-white">
                Browse More
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:w-[35%] lg:h-[350px] 2xl:h-[500px] w-[80%] flex mx-auto h-full downtext  lg:pt-0">
          <img src= {listItem?.image?.asset?.url} alt="" className="w-full h-full " />
        </div>
      </div>}
</div>
))}
        

          
        
        
        </div>
        
      </div>))}
     {alldata&&alldata.fourth&&alldata?.fourth?.map((item,index)=>(
      <div className="p-5 my-5 flex flex-col gap-5 lg:p-0">
        <div className="relative ">
          <div className=" relative w-full lg:h-16 h-fit flex lg:justify-end">
            <div className="absolute w-[47%] 2xl:w-[44%] lg:flex hidden bottom-0 2xl:-bottom-2 left-0">
              <img src={line3} alt="" className="w-full" />
            </div>
            <div className="flex lg:flex-row flex-col lg:w-[60%] w-full  relative lg:gap-5 gap-2 items-start lg:items-center ">
              <h1 className="lg:text-3xl text-2xl font-semibold">
               {item?.
title
}
              </h1>
              <hr className="w-full h-0.5 bg-primaryColor" />
            
            </div>
          </div>
        </div>
        <div>
          <p className="lg:text-center text-justify text-sm lg:w-[75%] lg:px-5 mx-auto">
            {item?.
content}
          </p>
        </div>

        <div className="grid lg:grid-cols-3  2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-10 justify-items-center lg:px-10 justify-center items-center">
          {item&&item.card&&item?.card.map((items,indexes)=>(
<Link className="rounded-xl hover:shadow-lg transition-all ease-in-out flex justify-center items-center  hover:shadow-slate-500" onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}} to={`/home/products/${items?.Cardtype
}/${items?.Cardcategory}`}> <div className="xss:w-[300px] w-[95%] relative  h-[350px]">
<div
 style={{ backgroundImage: `url(${vector})` }}
 className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
>
 <div className="relative w-full h-full">
   <p className="absolute top-[40%] left-10 -translate-y-1/2 text-primaryColor w-full flex  items-center font-semibold">
     {items?.Cardtitle
}
   </p>
 </div>
</div>
<img src={items&&items?.image?.asset?.url} className="w-full h-full rounded-xl"></img>
</div></Link>
          ))}
       
          {/* <Link className="rounded-xl flex justify-center items-center hover:shadow-lg transition-all ease-in-out  hover:shadow-slate-500" onClick={()=>{window.screenTop({top:0,behaviour:'smooth'})}} to={'/home/products/Outdoor/OutdoorCategory'}>
          <div className="xss:w-[300px] w-[95%] relative  h-[350px]">
            <div
              style={{ backgroundImage: `url(${vector})` }}
              className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
            >
              <div className="relative w-full h-full">
                <p className="absolute w-full  flex items-center top-[40%] left-10  -translate-y-1/2 text-primaryColor font-semibold">
                  Outdoor Lights
                </p>
              </div>
            </div>
            <img src={vector2} className="w-full h-full rounded-xl"></img>
          </div></Link>
          <Link className="rounded-xl flex justify-center items-center hover:shadow-lg transition-all ease-in-out  hover:shadow-slate-500" onClick={()=>{window.screenTop({top:0,behaviour:'smooth'})}} to={'/home/products/facade/FacadeCategory'}>
          <div className="xss:w-[300px] w-[95%] relative  h-[350px]">
            <div
              style={{ backgroundImage: `url(${vector})` }}
              className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
            >
              <div className="relative w-full h-full">
                <p className="absolute flex w-full  items-center top-[40%] left-10 -translate-y-1/2 text-primaryColor font-semibold">
                  Facade Lights
                </p>
              </div>
            </div>
            <img src={vector3} className="w-full h-full rounded-xl"></img>
          </div></Link>
          
          <Link className="rounded-xl flex justify-center items-center hover:shadow-lg transition-all ease-in-out  hover:shadow-slate-500" onClick={()=>{window.screenTop({top:0,behaviour:'smooth'})}} to={'/home/products/linear/linearCategory'}><div className="xss:w-[300px] w-[95%] relative  h-[350px]">
            <div
              style={{ backgroundImage: `url(${vector})` }}
              className="h-14 w-full bg-no-repeat flex justify-center items-center absolute bottom-5 -left-5 "
            >
              <div className="relative w-full h-full">
                <p className="absolute flex w-full  items-center top-[40%] left-10 -translate-y-1/2 text-primaryColor font-semibold">
                  Linear Lights
                </p>
              </div>
            </div>
            <img src={vector3} className="w-full h-full rounded-xl"></img>
          </div></Link> */}
          
        </div>
      </div>
     ))}
      {/* 4th section */}
      
      
    </div>
    <Video />
    <section>
      <div className="bg-Formbg h-full bg-cover  flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 md:px-24 px-5 lg:gap-10 gap-3">
        <div className="">
          <p className="text-3xl sm:text-5xl font-medium">
            Keen to explore further?
          </p>
          <p className="py-5 text-[13px] md:text-start text-justify">
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
  </>}
</div>

    
  );
};

export default Homepage;
