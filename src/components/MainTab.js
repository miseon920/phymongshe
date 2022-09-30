import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategorySlider from "./CategorySlider";
import MainCategory from "./MainCategory";

const MainTab = ({ shopList, arrow, dots }) => {
  const link = ["pencil", "liquid", "powder"];
  const [alink, setAlink] = useState(0);
  return (
    <section className="sc sec slide_">
      <h2>Best Product</h2>
      <ul className="bp_tab">
        {link.map((it, idx) => {
          return (
            <li onClick={() => setAlink(idx)} key={idx}>
              {it}
            </li>
          );
        })}
      </ul>
      <div className="inner">
        <CategorySlider
          shopList={shopList}
          category={link[alink]}
          arrow={true}
          dots={dots}
        />
      </div>
    </section>
  );
};

export default MainTab;
