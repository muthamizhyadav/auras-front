import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sanityclient from "./Sanityclient";

export const MoreProducts = () => {
  const [model, setModel] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams();

  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "product"]{ modelid, modelimage{asset->{url,id}} }`
    )
      .then((data) => {
        console.log(data);
        setModel(data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, [id]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (!model || model.length === 0) {
    return <div>No products found.</div>;
  }

  const filteredProducts = model.filter((item) =>
    item.modelid.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-y-5 py-5">
        {filteredProducts.map((item) => (
          <Link
            key={item.modelid}
            to={`/home/products/indoorlights/${item.modelid.toLowerCase()}`}
            className="flex justify-center items-center relative p-2 sm:w-44 sm:h-48 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
          >
            {item.modelimage && item.modelimage.asset && (
              <img
                src={item.modelimage.asset.url}
                alt=""
                className="hover:scale-110 transition-all duration-300"
              />
            )}
            <p className="absolute bottom-2">{item.modelid}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
