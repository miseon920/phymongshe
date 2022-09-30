import React from "react";
import Customer from "./Customer";

export const SideBanner = () => {
  return (
    <div className="SideBanner">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/top_logo.png `}
          alt=""
        />
      </div>
      <div className="case">
        <Customer />
      </div>
    </div>
  );
};
export default SideBanner;
