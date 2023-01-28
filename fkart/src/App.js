// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/Nav.js";
import ProductList from "./Component/ProductList.js";
import React, { useState } from "react";
import Footer from "./Component/Footer.js";
import Additem from "./Component/Additem";

function App() {
  const products = [
    {
      price: 190689,
      name: "Iphone 18",
      quantity: 0,
    },
    {
      price: 94599,
      name: "Zphone 6",
      quantity: 0,
    },
    {
      price: 10999,
      name: "Samsung S21",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const increase = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrease = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const reset = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const remove = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const additem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem additem={additem} />
        <ProductList
          productList={productList}
          increase={increase}
          decrease={decrease}
          remove={remove}
        />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
