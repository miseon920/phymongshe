import React, { useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    setCart(
      cart.filter(
        (ca, idx, arr) => arr.findIndex((item) => item.id === ca.id) === idx
      )
    );
  }, []);
  //console.log(cart);
  return (
    <div style={{ paddingTop: "500px" }}>
      {cart.map((ca, idx) => {
        return (
          <ul key={idx}>
            <li>{ca.id}</li>
            <li>{ca.item}</li>
          </ul>
        );
      })}

      {/* {window.localStorage.getItem(cart)} */}
    </div>
  );
};

export default Cart;
