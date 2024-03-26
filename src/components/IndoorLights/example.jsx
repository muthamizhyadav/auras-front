import React, { useEffect, useState } from "react";
import Sanityclient from "../common/Sanityclient";

export const ExampleComponent = () => {
  const [bgimage, Setbgimage] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "pd228bannerimages"]{pd228bannerimage{
            asset->{
              url,
              id
            }
          }}`
    )
      .then((data) => {
        Setbgimage(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % bgimage.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [bgimage.length]);

  const handleThumbnailClick = (index) => {
    setPreviewIndex(index);
  };

  const handleCloseOutsideClick = () => {
    setPreviewIndex(null);
  };

  const handlePrevClick = (event) => {
    event.stopPropagation();
    setPreviewIndex((prevIndex) =>
      prevIndex === 0 ? bgimage.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextClick = (event) => {
    event.stopPropagation();
    setPreviewIndex((prevIndex) => (prevIndex + 1) % bgimage.length);
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const selectedImageUrl =
    bgimage[selectedImageIndex % bgimage.length].pd228bannerimage.asset.url;

  return (
    <div>
      <div
        className="cursor-pointer bg-cover h-96 shadow-2xl drop-shadow-lg rounded-xl w-96"
        style={{
          backgroundImage: `url(${selectedImageUrl})`,
          backgroundPosition: "center",
          transition: "background-image 1s ease",
        }}
        onClick={() => handleThumbnailClick(selectedImageIndex)}
      />
      {previewIndex !== null && (
        <div
          onClick={handleCloseOutsideClick}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <button
            className="w-10 text-white flex justify-center items-center text-xl"
            onClick={handlePrevClick}
          >
            Previous
          </button>

          <div className="relative w-64 h-64 previewxs:w-80 previewxs:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] flex flex-col justify-center items-center">
            <div className=" bg-white">
              {bgimage[previewIndex % bgimage.length].pd228bannerimage && (
                <img
                  className="w-full h-full"
                  src={
                    bgimage[previewIndex % bgimage.length].pd228bannerimage
                      .asset.url
                  }
                  alt="preview"
                />
              )}
            </div>
            <button
              className="absolute right-3 xl:top-20 top-14 cursor-pointer text-black bg-white rounded-full p-1"
              onClick={handleCloseOutsideClick}
            >
              Close
            </button>
          </div>
          <button
            className="w-10 text-white flex justify-center items-center text-xl"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
