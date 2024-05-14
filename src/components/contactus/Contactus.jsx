import React from "react";
import contact from "../../assets/contact.png";
import circle1 from "../../assets/Group 46.png";
import circle2 from "../../assets/Group 47.png";

const Contactus = () => {
  return (
    <>
      <div className="md:relative lg:h-[700px] md:h-[700px]">
        <div className="m-5 ">
          <div className=" h-[90%] absolute right-0 -z-10">
            <img src={contact} alt="" className=" h-full -mt-5" />
          </div>
          <div className="md:absolute md:w-[50%] w-full right-1/2  md:translate-x-1/2 top-14 rounded-lg bg-white bg-opacity-[80%] border border-primaryColor md:px-10  px-5 py-5 ">
            <div className="">
              <h1 className="text-primaryColor text-2xl font-bold text-center py-1">
                Contact us
              </h1>
              <p className="text-center font-medium md:w-[75%] w-full text-sm mx-auto py-1">
                For further questions, including partnership opportunities,
                please contact using our contact form.
              </p>
              <div className="flex md:flex-row flex-col md:gap-5 justify-center items-center pt-5">
                <div className="w-full">
                  <label htmlFor="" className="text-xs font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="bg-white border border-primaryColor placeholder:text-xs rounded-lg p-2 my-1 lg:w-64 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="E-mail"
                    className="bg-white border border-primaryColor placeholder:text-xs rounded-lg p-2 my-1 lg:w-64 w-full"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-5 justify-center items-center">
                <div className="w-full">  
                  <label htmlFor="" className="text-xs font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Phone Number"
                    className="bg-white border border-primaryColor placeholder:text-xs rounded-lg p-2 my-1 lg:w-64 w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs font-semibold">
                    Company Name
                  </label>
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="Company Name"
                    className="bg-white border border-primaryColor placeholder:text-xs rounded-lg p-2 my-1 lg:w-64 w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-xs font-semibold">
                  How can we help you?
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Describe your problem in at least 250 characters"
                  className="bg-white border border-primaryColor placeholder:text-xs rounded-lg p-2 my-1 w-full"
                ></textarea>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button className="text-xs bg-primaryColor p-2 px-4 rounded-md text-white">SEND MESSAGE</button>
              </div>
            </div>
          </div>
          <div className="absolute top-20 left-0 w-[30%] lg:block hidden">
            <img src={circle1} alt="" className="w-[50%] h-full" />
          </div>
          <div className="w-[30%] absolute top-[60%] left-[12%] lg:block  hidden -z-10 ">
            <img src={circle2} alt="" className="w-[50%] h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
