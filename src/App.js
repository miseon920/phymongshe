import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./components/useLocalStorage";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import List from "./shop/List";
import Item from "./shop/Item";
import Cart from "./shop/Cart";
import Category from "./shop/Category";
import "./css/ShopDetail.scss";

function App() {
  const [item, setItem] = useState();
  //const [cart, setCart] = useState([]);
  const [cart, setCart] = useLocalStorage("cart", []);
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    const url = "https://desipossa.github.io/shop_cra/assets/data.json";
    const getProduct = async () => {
      const res = await axios.get(url);
      //console.log(res.data); //axios는 .data를 붙여야함
      const shopdata = res.data.slice(50, 140).map((it) => {
        return {
          id: it.id,
          name: it.name,
          src: it.image_link,
          brand: it.brand,
          cate: it.category,
          price: it.price * 1450,
          des: it.description,
          color: it.product_colors,
          time: it.created_at,
          type: it.product_type,
        };
      });
      setItem(shopdata);
      //console.log(shopdata);
    };
    getProduct();
  }, []); //의존형 배열
  return (
    <>
      {item ? (
        <div className="wapper">
          <Header cart={cart} shopList={item} />
          <Routes>
            <Route path="/" element={<Main shopList={item} />} />
            <Route
              path="/Cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/shopList" element={<List shopList={item} />} />
            <Route
              path="/shopList/:cate"
              element={<Category shopList={item} />}
            />
            <Route
              path="/shopItem/:item"
              element={<Item shopList={item} cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      ) : (
        <div>로딩중입니다</div>
      )}
      {/* {item?.map((item, idx) => (
          <li key={item.id}>{item?.id}</li>
        ))} -옵셔널체이닝*/}
      <Footer />
    </>
  );
}

export default App;

/* 
Axios 라이브러리
Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리 아다.
쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용한다.
이미 자바스크립트에는 fetch api가 있지만, 프레임워크에서 ajax를 구현할땐 axios를 쓰는 편이라고 보면 된다.

Axios 특징
운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
Promise(ES6) API 사용
요청과 응답 데이터의 변형
HTTP 요청 취소
HTTP 요청과 응답을 JSON 형태로 자동 변경
https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9


#상세페이지 구현
https://bmy1320.tistory.com/entry/React-Router-useLocation-%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84

#로컬스트리지

https://www.daleseo.com/react-hooks-use-web-storage/

*/

/*
useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        }

    }, [])

*/
