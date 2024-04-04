import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sanityclient from "./Sanityclient";

export const MoreProducts = () => {
  const [model, setModel] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter,setfilter] = useState('')
  const { id } = useParams();

  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "product"]{ modelid, modelimage{asset->{url,id}} }`
    )
      .then((data) => {
        console.log(data);
        setModel(data);
        setfilter(data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, [id]);

  const handleSearchInputChange = (e) => {
    setfilter([])
     setSearchQuery(e.target.value);
     if (e.target.value==="") {
         setfilter(model);
         return;
     }
     const filteredResults = model.filter(
         (data) =>
           data.modelid.toLowerCase().includes(e.target.value.toLowerCase())
     );
     setfilter(filteredResults);
 };

  return (
    <div>
      <div className="relative w-full bg-moreproductsbg bg-cover h-[300px] flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <form className="form">
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            placeholder="Search products..."
            type="text"
            className="input sm:w-96 w-full placeholder:text-sm"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </form>
      </div>

      {filter.length === 0 ? (
        <div className="bg-red-500 w-full text-center p-10 text-xl text-white">No Product Found!</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-y-5 py-5">
          {filter.map((item) => (
            <Link
              key={item.modelid}
              to={`/home/products/indoorlights/${item.modelid.toLowerCase()}`}
              className="flex flex-col justify-evenly items-center relative p-2 sm:w-52 sm:h-48 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
            >
              {item.modelimage && item.modelimage.asset && (
                <img
                  src={item.modelimage.asset.url}
                  alt=""
                  className="hover:scale-110 transition-all w-40 duration-300 p-2 "
                />
              )}
              <p className="">{item.modelid}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};






