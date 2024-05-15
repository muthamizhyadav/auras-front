import React from "react";
import CountUp from "react-countup";
import icon1 from "../../assets/1 (12).png";
import icon2 from "../../assets/2 (9).png";
import icon3 from "../../assets/3 (8).png";
import icon4 from "../../assets/4 (1).png";
import line from "../../assets/Vector 36.png";
import img1 from "../../assets/Rectangle 37.png";
import img2 from "../../assets/Rectangle 38.png";
import img3 from "../../assets/Rectangle 39.png";
import line2 from "../../assets/Vector 35.png";
import ourServices from "../../assets/Group 49.png";
const About = () => {
  const data = [
    {
      image: icon1,
      number: "13",
      content: "Years of experience",
    },
    {
      image: icon2,
      number: "1000",
      content: "Employee",
    },
    {
      image: icon3,
      number: "600",
      content: "Patents",
    },
    {
      image: icon4,
      number: "200",
      content: "Design Engineers",
    },
  ];
  const [culture, setculture] = React.useState([
    {
      image: img1,
      header: "Client-centric",
      paragraph:
        "We prioritize client-centric, streamlined workflows, fostering seamless interaction across the client platform.",
    },
    {
      image: img2,
      header: "Solution Provider",
      paragraph:
        "Becoming World's top LED company, aiming to surpass client expectations with quality and innovation.",
    },
    {
      image: img3,
      header: "Services",
      paragraph:
        "We prioritize customers, embrace innovation, value teamwork, uphold commitment, and pursue continuous improvement.",
    },
  ]);

  return (
    <>
      <div className="bg-about  sm:h-[500px] h-full w-full bg-no-repeat ">
        <div className="bg-black sm:h-[500px] h-full  w-full bg-opacity-60  flex flex-col justify-center items-center ">
          <div className=" text-center text-white sm:p-10  p-5 space-y-4">
            <h1 className="md:text-5xl text-2xl">Welcome to Auras Lighting</h1>
            <h3 className="text-2xl">
              {" "}
              Where every light shines with elegance and purpose
            </h3>
            <p className="text-sm sm:w-[70%] text-justify md:text-center mx-auto">
              Established in Dubai with a vision for brilliance and innovation,
              Auras Lighting has become a leading provider of lighting
              solutions, illuminating residential, home decor, and office spaces
              with sophistication and style. With over a decade of expertise, we
              pride ourselves on offering personalized and diversified lighting
              solutions, tailored to the unique needs of our clientele.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1  justify-around px-10 items-center">
        {data.map((item, index) => (
          <div className="">
            <div className="flex flex-row lg:justify-center  items-center gap-3 p-5">
              <div className="">
                <img
                  src={item.image}
                  alt=""
                  className="bg-white rounded-full p-2 w-fit"
                />
              </div>
              <div className=" flex flex-col justify-start lg:justify-center items-start">
                <div className="flex flex-row justify-center items-center">
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={5}
                    className="text-white font-semibold text-3xl"
                  />
                  <p className="text-white font-semibold text-3xl">+</p>
                </div>
                <div>
                  <p className="text-white text-sm">{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="relative">
        <h1 className="text-center text-2xl font-bold">Our Culture</h1>
        <div className="absolute right-0 top-1/2 overflow-hidden ">
          <img src={line} alt="" />
        </div>
        <div>
          AURAS has strong capacity in engineering technology and plenty of
          experience. We are highly appraised by our clients and the markets for
          our credible quality and zealous after-service.
        </div>
      </div> */}
      <div className="py-10">
        <div className="relative p-5 py-3">
          <h1 className="lg:text-center text-justify text-2xl font-bold">Our Culture</h1>
          <div className="absolute right-0 top-7 overflow-hidden w-[40%]">
            <img src={line} alt="" className="lg:block hidden w-full" />
          </div>
          <div>
            <hr className="w-[60%] h-[2px] bg-primaryColor lg:hidden block" />
          </div>
          <div className="lg:w-[70%] lg:text-center text-justify mx-auto py-5">
            <p >
              AURAS has strong capaci ty in engineering technology and plenty of
              experience. We are highly appraised by our clients and the markets
              for our credible quality and zealous after-service.
            </p>
          </div>
        </div>

        <div className="grid justify-center items-center gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center md:px-[80px] 2xl:grid-cols-4 ">
          {culture.map((content, index) => (
            <div
              key={index}
              className="md:h-[350px]  w-[90%] md:w-72  bg-center bg-cover relative gap-5   text-white flex flex-col"
            >
              <img src={content.image} className="w-full h-full  rounded-xl" alt="" />
              <h2 className="h-full w-full bg-gradient-to-t absolute bottom-0 left-0 from-black rounded-xl to-transparent"></h2>
              <div className="absolute bottom-3 ">
                <h2 className="text-white text-2xl font-semibold text-center z-50">
                  {content.header}
                </h2>
                <p className="px-6 py-2 text-center font-light z-50">
                  {content.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="lg:relative p-5">
          <h1 className="lg:text-center text-2xl font-bold">Our Services</h1>
          <div className="absolute left-0 top-9 overflow-hidden w-[50%]">
            <img
              src={line2}
              alt=""
              className="w-[80%] lg:block hidden"
            />
          </div>
          <div>
            <hr className="w-[60%] h-[2px] bg-primaryColor lg:hidden block" />
          </div>
          <div className="">
            <p className="text-sm sm:text-center text-justify sm:px-0  sm:w-[70%] w-full mx-auto mt-5">
              We're excited to offer you our comprehensive suite of services and
              advantageous business terms. We're dedicated to maximizing your
              benefits and fully committed to supporting your business
              endeavors. Let's collaborate for mutual success!
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center px-5 py-5">
            <img src={ourServices} alt="" className="w-full"/>
          </div>
        </div>
      </div>

      <section className="pt-5">
        <div className="bg-form lg:h-[500px] h-full bg-cover  ">
          <div className="bg-black lg:h-[500px] h-full bg-opacity-40 w-full  flex lg:flex-row flex-col justify-center items-center sm:py-10 py-5 sm:px-24 px-5 text-white">
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
            <div className="form-content bg-gradient-to-b from-white to-transparent lg:w-[70%] w-full sm:p-5 p-3  rounded-3xl shadow-2xl ">
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
        </div>
      </section>
    </>
  );
};

export default About;
