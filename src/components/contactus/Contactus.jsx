import React from "react";
import contact from "../../assets/contact.png";
import circle1 from "../../assets/Group 46.png";
import circle2 from "../../assets/Group 47.png";

const Contactus = () => {
  return (
    <>
      <div className="md:relative lg:h-screen md:h-[700px]">
        <div className="m-5">
          <div className=" h-full absolute right-0 -z-10">
            <img src={contact} alt="" className=" h-full -mt-5" />
          </div>
          <div className="md:absolute md:w-[50%] w-full right-1/2  md:translate-x-1/2 top-14 rounded-lg bg-white bg-opacity-[80%] border border-primaryColor md:px-10 px-5 py-5 space-y-3 ">
            <div>
              <h1 className="text-primaryColor text-2xl font-bold text-center">
                Contact us
              </h1>
              <p className="text-center md:w-[70%] w-full text-xs mx-auto">
                For further questions, including partnership opportunities,
                please contact using our contact form.
              </p>
              <div className="flex md:flex-row flex-col gap-5 justify-center items-center pt-5">
                <div className="w-full">
                  <label htmlFor="" className="text-xs font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
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
              <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
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
                <button className="text-xs bg-primaryColor p-2 rounded-md">SEND MESSAGE</button>
              </div>
            </div>
          </div>
          <div className="absolute top-20 w-[30%] lg:block hidden">
            <img src={circle1} alt="" className="w-[50%] h-full" />
          </div>
          <div className="w-[30%] absolute top-[75%] left-[12%] lg:block hidden -z-10">
            <img src={circle2} alt="" className="w-[50%] h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
