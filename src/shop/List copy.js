import { Link } from "react-router-dom";

const List = ({ shopList }) => {
  return (
    <section className="shopList">
      <div className="inner">
        {shopList.map((item, idx) => (
          <figure key={item.id}>
            <Link to={`/shopItem/${item.id}`}>
              <div className="box">
                <img src={item.src} alt="" />
              </div>
              <div>
                <div className="name">{item.name}</div>
                <div className="des">{item.des.substring(0, 100)}</div>
                <div className="price">
                  <span>{item.price.toLocaleString()}</span> 원
                </div>
              </div>
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
};
export default List;
