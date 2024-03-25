import React from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const linearLights = [
    { text: "Home", divider: true },
    { text: "Linear Lights", divider: true },
    { text: "LED Strip", divider: true },
    { text: "LED Neon Lights", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "Recruit", divider: true },
    { text: "Contact Us", divider: false },
  ];
  const outdoorLights = [
    { text: "Home", divider: true },
    { text: "Outdoor Lights", divider: true },
    { text: "LED Strip", divider: true },
    { text: "LED Neon Light", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "Recruit", divider: true },
    { text: "Contact Us", divider: false },
  ];
  const indoorLights = [
    { text: "Home", divider: true },
    { text: "Indoor Lights", divider: true },
    { text: "LED Strip", divider: true },
    { text: "LED Neon Light", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "Recruit", divider: true },
    { text: "Contact Us", divider: false },
  ];
  const FacadeLights = [
    { text: "Home", divider: true },
    { text: "Facade Lights", divider: true },
    { text: "LED Strip", divider: true },
    { text: "LED Neon Light", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "LED Sensor", divider: true },
    { text: "Recruit", divider: true },
    { text: "Contact Us", divider: false },
  ];

  return (
    <section className="">
      <div className="bg-black text-white p-8">
        {location.pathname === "/" ? (
          <div className="capitalize flex flex-wrap justify-center p-1 text-sm">
            {linearLights.map((item, index) => (
              <React.Fragment key={index}>
                <p className="m-0.5 font-medium hover:text-[#F2667C] cursor-pointer">
                  {item.text}
                </p>
                {item.divider && <p className="m-0.5 font-medium">|</p>}
              </React.Fragment>
            ))}
          </div>
        ) : (
          ""
        )}{" "}
        {location.pathname.startsWith("/home/products/outdoorlights") ? (
          <div className="capitalize flex flex-wrap justify-center p-1 text-sm">
            {outdoorLights.map((item, index) => (
              <React.Fragment key={index}>
                <p className="m-0.5 font-medium hover:text-[#F2667C] cursor-pointer">
                  {item.text}
                </p>
                {item.divider && <p className="m-0.5 font-medium">|</p>}
              </React.Fragment>
            ))}
          </div>
        ) : (
          ""
        )}{" "}
        {location.pathname.startsWith("/home/products/indoorlights") ? (
          <div className="capitalize flex flex-wrap justify-center p-1 text-sm">
            {indoorLights.map((item, index) => (
              <React.Fragment key={index}>
                <p className="m-0.5 font-medium hover:text-[#F2667C] cursor-pointer">
                  {item.text}
                </p>
                {item.divider && <p className="m-0.5 font-medium">|</p>}
              </React.Fragment>
            ))}
          </div>
        ) : (
          ""
        )}{" "}
        {location.pathname.startsWith("/home/products/facadelights") ? (
          <div className="capitalize flex flex-wrap justify-center p-1 text-sm">
            {FacadeLights.map((item, index) => (
              <React.Fragment key={index}>
                <p className="m-0.5 font-medium hover:text-[#F2667C] cursor-pointer">
                  {item.text}
                </p>
                {item.divider && <p className="m-0.5 font-medium">|</p>}
              </React.Fragment>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="text-center font-medium text-sm">
          <p>
            Powered By{" "}
            <span className="hover:text-[#FF9315] cursor-pointer">
              WHY Global Services
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
