import React from "react";
import { Link } from "react-router-dom";

const List = ({ shopList }) => {
  return (
    <section className="shopList">
      <div className="category">홈 &lt; all</div>
      <h2>all</h2>
      <ul className="list">
        <li>total : {shopList.length}</li>
        <li className="line">line</li>
        <li>
          <ul className="option">
            <li>신제품</li>
            <li>판매순</li>
            <li>낮은가격순</li>
            <li>높은가격순</li>
          </ul>
        </li>
      </ul>
      <div className="inner">
        {shopList.map((it) => {
          return (
            <figure key={it.id}>
              <Link to={"/shopItem/" + it.id}>
                <div className="box">
                  <img src={it.src} alt="" />
                </div>
                <div className="name">{it.name}</div>
                <div className="des">{it.des.substring(0, 100)} ...</div>
                <div className="price">
                  <span>{it.price.toLocaleString()}</span> 원
                </div>
              </Link>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default List;
