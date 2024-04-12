import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sanityclient from "./Sanityclient";
export const MoreProducts = () => {
  const [model, setModel] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setfilter] = useState("");
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [ledwalllightsarray, setledwalllights] = useState([]);
  const [ledwalllightindex, setledwalllightsindex] = useState(0);
  const [arrrays, setarrays] = useState([]);
  const [allvalues, setallvalues] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [alldata, setalldata] = useState([]);
  useEffect(() => {
    const product = async () => {
      const categoryproduct = [];
      try {
        const categories =
          await Sanityclient.fetch(`*[_type=='productCategory']{
        Category
      }`);
        setarrays(categories);
        console.log(categories, "jaja");
        for (let i = 0; i < categories.length; i++) {
          const category = categories[i].Category;
          // console.log(category);
          const results =
            await Sanityclient.fetch(`*[_type == "product" && modelcategory->Category == ${JSON.stringify(
              category
            )}]{
          modelcategory->,modelid,modelimage{asset->{
            url
          }}
        }`);
          if (results.length > 0) {
            categoryproduct.push({ category, products: results });
          }
        }
        console.log(categoryproduct);
        setallvalues(categoryproduct);
        setalldata(categoryproduct);
        setLoading(true);
        console.log(allvalues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    product();
  }, []);
  const [imageIndex, setImageIndex] = useState(1);
  const [imageIndex2, setImageIndex2] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex % 5) + 1);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [imageIndex]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex2((prevIndex) => (prevIndex % 2) + 1);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [imageIndex2]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex(
        (prevIndex) =>
          (prevIndex + filteredData.length + 1) % filteredData.length
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [filteredData]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setledwalllightsindex(
        (prevIndex) =>
          (prevIndex + ledwalllightsarray.length + 1) %
          ledwalllightsarray.length
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [ledwalllightsarray]);
  const handleSearchInputChange = (e) => {
    // e.preventDefault()
    setSearchQuery(e.target.value);
    const filteredResults = allvalues.filter((data) =>
      data.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setallvalues(filteredResults);
  };
  useEffect(() => {
    if (searchQuery === "") {
      setallvalues(alldata);
    }
  }, [searchQuery]);
  function handleSearch(e) {
    if (e.keyCode === 8) {
      console.log("aaa");
      setSearchQuery(e.target.value);
      const filteredResults = allvalues.filter((data) =>
        data.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setallvalues(filteredResults);
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
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyDown={handleSearch}
          />
        </form>
      </div>
      {Loading == false ? (
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
      ) : (
        <div className="mt-5 flex flex-col gap-5 p-5 ">
          {/* {console.log(allvalues)} */}
          <p className="uppercase mb-5 text-center lg:text-3xl md:texet-2xl text-xl bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent  bg-clip-text font-semibold">
            Indoor Lights
          </p>
          {allvalues.length > 0 ? (
            <div className="grid  grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:grid-cols-5">
              {allvalues &&
                allvalues.map((products2, index) => (
                  <div
                    className={`p-5 ${
                      products2.category
                        .toLowerCase()
                        .includes("New Arrival".toLowerCase())
                        ? `order-first `
                        : null
                    }`}
                  >
                    <Link
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      to={`${products2.category}`}
                      key={index}
                      className="flex flex-col justify-evenly items-center relative p-2 sm:w-52 sm:h-52 bg-white drop-shadow-md text-xs hover:text-[#F2667C]"
                    >
                      <img
                        src={
                          products2.products[
                            (products2.products.length -
                              (products2.products.length > 5
                                ? imageIndex
                                : imageIndex2)) %
                              products2.products.length
                          ].modelimage.asset.url
                        }
                        alt=""
                        className="hover:scale-110 transition-all w-full duration-300 p-2 "
                      />
                      <p
                        className={`text-md text-center uppercase ${
                          products2.category
                            .toLowerCase()
                            .includes("New Arrival".toLowerCase())
                            ? ``
                            : null
                        }`}
                      >
                        {" "}
                        {products2.category}
                      </p>
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
          {/* {console.log(allvalues.length)} */}
          {/* {allvalues && allvalues.map((products,key)=>
            <div>{products.map((product)=>(
              <p>{product.modelid}</p>
            ))}</div>
          )} */}
          {/* <div>{console.log(allvalues)}</div> */}
        </div>
      )}
    </div>
  );
};
