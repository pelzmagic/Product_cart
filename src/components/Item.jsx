import PropTypes from "prop-types";
import { useState, useEffect } from "react";

Item.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setCartItems: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      item: PropTypes.object,
    })
  ).isRequired,
};

export default function Item({ data, setCartItems, cartItems }) {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = function () {
    setIsClicked(true);
    // setCount((prevCount) => (prevCount === 0 ? 1 : prevCount));
  };

  const addItem = function () {
    const newCount = count + 1;
    setCount(newCount);
    setCartItems((cartItems) => {
      const existingItemIndex = cartItems.findIndex((item) => item.id === data.name);
      if (existingItemIndex >= 0) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity = newCount;
        return updatedCartItems;
      } else {
        return [...cartItems, { id: data.name, item: data, quantity: newCount, name: data.name, price: data.price }];
      }
    });
  };

  const subtractItem = function () {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount === 0) setIsClicked(false);
      setCartItems((cartItems) => {
        const existingItemIndex = cartItems.findIndex((item) => item.id === data.name);
        if (existingItemIndex >= 0) {
          if (newCount === 0) {
            return cartItems.filter((item) => item.id !== data.name);
          }
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex].quantity = newCount;
          return updatedCartItems;
        }
        return cartItems;
      });
    }
  };

  useEffect(
    function () {
      const itemsExistInCart = cartItems.some((item) => item.id === data.name);
      if (!itemsExistInCart) {
        setIsClicked(false);
        setCount(0);
      }
    },
    [cartItems, data.name]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <img
          className={`w-full rounded-lg h-auto ${isClicked ? "border-2 border-red" : "border-0"}`}
          src={data.image.desktop}
          srcSet={`${data.image.mobile} 500w, ${data.image.tablet} 1000w, ${data.image.desktop} 1500w`}
          sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
          alt={`a ${data.category}`}
        />
        <button
          className={`flex gap-2 w-full max-w-[160px] ${isClicked ? "bg-red" : "bg-white"} p-3 justify-center items-center rounded-full absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 ${
            isClicked ? "border-0" : "border border-rose-400"
          }`}
          onClick={handleClick}>
          {isClicked ? (
            <div className="flex border border-red justify-between w-full">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  subtractItem();
                }}>
                <img src="/subtract.png" alt="subtract icon" />
              </div>
              <p className="text-white">{count}</p>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  addItem();
                }}>
                <img src="/addition.png" alt="addition icon" />
              </div>
            </div>
          ) : (
            <>
              <img src="/icon-add-to-cart.svg" alt="a cart"></img>
              <span className="text-[14px] leading-[150%] text-rose-900">Add to cart</span>
            </>
          )}
        </button>
      </div>
      <div className="space-y-1">
        <p className="text-rose-500 text-[14px] leading-[150%]">{data.category}</p>
        <p className="text-base leading-[150%] text-rose-900 font-semibold">{data.name}</p>
        <p className="text-base leading-[150%] text-red font-semibold">{`$${data.price.toFixed(2)}`}</p>
      </div>
    </div>
  );
}
