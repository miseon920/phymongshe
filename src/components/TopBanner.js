import { top_banner } from "../data/common";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/TopBanner.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const TopBanner = () => {
  const topSlider = useRef(null);
  return (
    <div className="TopBanner">
      <Slider arrows={false} fade={true} autoplay={true} ref={topSlider}>
        {top_banner.map((it, ide) => (
          <div key={it.id}>
            <Link to={it.link}>{it.content}</Link>
          </div>
        ))}
      </Slider>
      <AiOutlineArrowLeft
        onClick={() => topSlider.current.slickPrev()}
        className="icon"
      />
      <AiOutlineArrowRight
        onClick={() => topSlider.current.slickNext()}
        className="icon icon_right"
      />
    </div>
  );
};
export default TopBanner;

/* state를 모아서 사용하는방법이 리덕스 */
