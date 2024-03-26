import { useState, useEffect } from "react";
import Sanityclient from "../common/Sanityclient";


export const Explore = () => {
  const [contactTitle, setcontactTitle] = useState('');
  const [contactContent, setcontactContent] = useState('');

  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "product"]{contacttitle,  contactcontent }`
    )
      .then((data) => {
        setcontactTitle(data[0].contacttitle)
        setcontactContent(data[0].contactcontent)
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, []);
  return (
    <section>
      <div className="bg-Formbg bg-cover form flex lg:flex-row flex-col justify-center items-center lg:flex-nowrap sm:py-10 py-5 md:px-24 px-5 lg:gap-10 gap-3">
        <div className="">
          <p className="text-3xl sm:text-5xl font-medium">
            {contactTitle ? contactTitle : 'Loading...'}
          </p>
          <p className="py-5 text-[13px] md:text-start text-justify">
            {contactContent ? contactContent : 'Loading...'}
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
  );
};
