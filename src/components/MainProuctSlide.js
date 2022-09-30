import React from "react";
import CategorySlider from "./CategorySlider";
import MainCategory from "./MainCategory";

const MainProuctSlide = ({ shopList, category, tit, des, bg, arrow, dots }) => {
  return (
    <section className={`sce slide_ ${bg ? "bg" : ""}`}>
      <h2>{tit}</h2>
      <p>{des}</p>
      <div className="inner">
        <CategorySlider
          shopList={shopList}
          category={category}
          arrow={arrow}
          dots={dots}
        />
      </div>
    </section>
  );
};

export default MainProuctSlide;
