import TopBanner from "./TopBanner";
import MainNav from "./MainNav";
import "../css/Header.scss";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
const Header = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      let sct = window.scrollY;
      //console.log(sct);
      sct > 0 ? setOn(true) : setOn(false);
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      //메모리누수를 줄여 성능을 좋게함
      window.addEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <header className={`Header ${on ? "on" : ""}`}>
      <TopBanner />
      <div className="gnb">
        <h1>
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/top_logo.png`}
              alt=""
            />
          </a>
        </h1>
        <nav className="inner">
          <MainNav />
        </nav>
        <ul className="right">
          <li>
            <FiUser />
          </li>
          <li className="cart">
            <FiShoppingCart />
            <span>0</span>
          </li>
          <li>
            <FiSearch />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
