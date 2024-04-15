import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sanityclient from "./Sanityclient";
function Productlist() {
  const [alldata, setalldata] = useState([]);
  const [dalldata, dsetalldata] = useState([]);
  const [Loading, setLoading] = useState(false);
  const nav = useNavigate();
  const { productname } = useParams();
  const { pname } = useParams();
  console.log(productname);
  useEffect(() => {
    const products = async () => {
      await Sanityclient.fetch(
        `*[_type == ${JSON.stringify(pname)} && modelcategory->Category == ${JSON.stringify(
          productname
        )}]{
            modelcategory->,modelid,modelimage{asset->{
              url
            }}
          }`
      ).then((result) => {
        setalldata(result);
        dsetalldata(result);
        setLoading(true);
        console.log(alldata);
      });
    };
    products();
  }, [productname]);
  function handlechange(e) {
    if (e.target.value === "") {
      setalldata(dalldata);
    } else {
      const filters = alldata.filter((data) =>
        data.modelid.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setalldata(filters);
    }
  }
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-moreproductsbg bg-cover h-[300px] flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
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
            onChange={handlechange}
          />
        </form>
      </div>
      {Loading == true ? (
        <div className="flex flex-col mt-10 gap-5">
          <p className="text-3xl font-bold text-center uppercase bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
            {productname}
          </p>
          {alldata.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:grid-cols-5">
              {alldata &&
                alldata.map((product, index) => (
                  <div className="sm:p-5 p-8">
                    <Link
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      to={`/home/products/individual/${pname}/${product.modelid}`}
                      key={index}
                      className="flex flex-col  items-center relative p-2 sm:w-48 sm:h-48 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
                    >
                      <div className="w-[80%] h-[80%]">
                        <img
                          src={product?.modelimage?.asset?.url}
                          alt=""
                          className="hover:scale-110 transition-all mx-auto object-contain w-full h-full   duration-300 p-2 "
                        />
                      </div>
                      <p className="text-lg w-full text-nowrap text-ellipsis overflow-hidden text-center"> {product.modelid}</p>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            <div className="w-full h-52 flex flex-col gap-5 justify-center items-center">
              <p className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent  bg-clip-text">
                No Products Found
              </p>
              <div className="w-full gap-x-2 flex justify-center items-center">
                <div className="w-5 bg-[#D991C2]  h-5 rounded-full animate-bounce"></div>
                <div className="w-5 animate-pulse h-5 bg-[#9869B8] rounded-full "></div>
                <div className="w-5 h-5  bg-[#6756CC] rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-52 flex flex-col gap-5 justify-center items-center">
          <p className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent  bg-clip-text">
            Loading Products
          </p>
          <div className="w-full gap-x-2 flex justify-center items-center">
            <div className="w-5 bg-[#D991C2]  h-5 rounded-full animate-bounce"></div>
            <div className="w-5 animate-pulse h-5 bg-[#9869B8] rounded-full "></div>
            <div className="w-5 h-5  bg-[#6756CC] rounded-full animate-bounce"></div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Productlist;
