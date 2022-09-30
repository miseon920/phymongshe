import Customer from "./Customer";
import "../css/Footer.scss";
import { company } from "../data/profile";
import SideBanner from "./SideBanner";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="top">
        <div className="inner">
          <Customer company={company} />
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <div>ADDRESS : {company.address}</div>
          <div>&copy; {company.company}. allright reserved.</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
