import React from "react";
import MainSlide from "../components/MainSlide";
import Item from "../shop/Item";
import MainTab from "../components/MainTab";
import "../css/Main.scss";
import MainCategory from "../components/MainCategory";
import MainProuctSlide from "../components/MainProuctSlide";

const Main = ({ shopList }) => {
  return (
    <>
      <MainSlide />
      <MainProuctSlide
        shopList={shopList}
        category={"pencil"}
        tit={`BEST PRODUCT`}
        des={`피몽쉐 마인드풀 라운지 BEST PRODUCT`}
        arrow={true}
        dots={true}
      />
      <MainProuctSlide
        shopList={shopList}
        category={"liquid"}
        tit={`NEW PRODUCT`}
        des={`피몽쉐 마인드풀 라운지 NEW PRODUCT`}
        arrow={true}
        dots={false}
        bg
      />
      {/* <MainCategory shopList={shopList} category={"liquid"} />*/}
      <MainCategory shopList={shopList} category={"liquid"} />
      <MainCategory shopList={shopList} category={"powder"} bg />
      <MainTab shopList={shopList} arrow={true} dots={true} />
    </>
  );
};

export default Main;
