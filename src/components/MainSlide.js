import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { main_content } from "../data/common";
import "../css/MainSlide.scss";
import { Link } from "react-router-dom";

const MainSlide = () => {
  const Mainslide = useRef(null);
  return (
    <div className="MainSlider">
      <Slider
        arrows={false}
        autoplay={true}
        pauseOnHover={false}
        dots={true}
        ref={Mainslide}
      >
        {main_content.slice(0, 3).map((item, idx) => (
          <figure className={`item item0${idx + 1}`} key={item.id}>
            <div className="inner">
              <strong>{item.strong}</strong>
              <p>{item.content}</p>
              <div className="des">{item.des}</div>
              <Link to={item.link}>more</Link>
            </div>
          </figure>
        ))}
      </Slider>
    </div>
  );
};
export default MainSlide;
