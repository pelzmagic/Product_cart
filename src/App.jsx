import Order from "./Order";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  console.log(cartItems);
  const data = [
    {
      image: {
        thumbnail: "/image-waffle-thumbnail.jpg",
        mobile: "/image-waffle-mobile.jpg",
        tablet: "/image-waffle-tablet.jpg",
        desktop: "/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
    {
      image: {
        thumbnail: "/image-creme-brulee-thumbnail.jpg",
        mobile: "/image-creme-brulee-mobile.jpg",
        tablet: "/image-creme-brulee-tablet.jpg",
        desktop: "/image-creme-brulee-desktop.jpg",
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
    },
    {
      image: {
        thumbnail: "/image-macaron-thumbnail.jpg",
        mobile: "/image-macaron-mobile.jpg",
        tablet: "/image-macaron-tablet.jpg",
        desktop: "/image-macaron-desktop.jpg",
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
    },
    {
      image: {
        thumbnail: "/image-tiramisu-thumbnail.jpg",
        mobile: "/image-tiramisu-mobile.jpg",
        tablet: "/image-tiramisu-tablet.jpg",
        desktop: "/image-tiramisu-desktop.jpg",
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
    },
    {
      image: {
        thumbnail: "/image-baklava-thumbnail.jpg",
        mobile: "/image-baklava-mobile.jpg",
        tablet: "/image-baklava-tablet.jpg",
        desktop: "/image-baklava-desktop.jpg",
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
    },
    {
      image: {
        thumbnail: "/image-meringue-thumbnail.jpg",
        mobile: "/image-meringue-mobile.jpg",
        tablet: "/image-meringue-tablet.jpg",
        desktop: "/image-meringue-desktop.jpg",
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
    },
    {
      image: {
        thumbnail: "/image-cake-thumbnail.jpg",
        mobile: "/image-cake-mobile.jpg",
        tablet: "/image-cake-tablet.jpg",
        desktop: "/image-cake-desktop.jpg",
      },
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
    },
    {
      image: {
        thumbnail: "/image-brownie-thumbnail.jpg",
        mobile: "/image-brownie-mobile.jpg",
        tablet: "/image-brownie-tablet.jpg",
        desktop: "/image-brownie-desktop.jpg",
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5,
    },
    {
      image: {
        thumbnail: "/image-panna-cotta-thumbnail.jpg",
        mobile: "/image-panna-cotta-mobile.jpg",
        tablet: "/image-panna-cotta-tablet.jpg",
        desktop: "/image-panna-cotta-desktop.jpg",
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
    },
  ];

  return (
    <div className="border border-r-emerald-800 py-[88px] px-[112px] max-w-[1440px] mx-auto">
      <Order data={data} cartItems={cartItems} setCartItems={setCartItems} count={count} setCount={setCount} />
    </div>
  );
}

export default App;
