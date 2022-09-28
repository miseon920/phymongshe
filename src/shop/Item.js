import { useNavigate, useParams } from "react-router-dom";

const Item = ({ shopList, cart, setCart }) => {
  const { item } = useParams();
  const matchItem = shopList.find((it) => item == it.id);
  const navigate = useNavigate();
  return (
    <section className="shopItem">
      <div className="inner">
        <div className="box">
          <img src={matchItem.src} alt="" />
        </div>
        <div className="right">
          <div className="name">{matchItem.name}</div>
          <div className="des">{matchItem.des.substring(0, 100)}</div>
          <ul className="color">
            {matchItem.color.map((color, idx) => {
              return (
                <li key={idx} style={{ background: color.hex_value }}>
                  {color.hex_value}
                </li>
              );
            })}
          </ul>
          <div className="price">
            <span>{matchItem.price.toLocaleString()}</span> 원
          </div>
          <button
            type="button"
            onClick={() => {
              setCart([
                ...cart,
                {
                  id: matchItem.id,
                  item: matchItem.name,
                  color: matchItem.color,
                  price: matchItem.price,
                },
              ]);
              navigate(`/Cart`);
            }}
          >
            장바구니
          </button>
        </div>
      </div>
    </section>
  );
};
export default Item;

//https://basemenks.tistory.com/278
