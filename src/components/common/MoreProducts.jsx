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
      {/* <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search products..."
      /> */}
      <div className="w-full bg-moreproductsbg bg-cover h-[300px] flex justify-center items-center">
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search products..."
          type="text"
          className="input sm:w-96 w-full placeholder:text-sm"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      </div>
      

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-y-5 py-5">
        {filteredProducts.map((item) => (
          <Link
            key={item.modelid}
            to={`/home/products/indoorlights/${item.modelid.toLowerCase()}`}
            onClick={() => {
              setIndoorDropdown(false);
              setShowDropdown(false);
            }}
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
