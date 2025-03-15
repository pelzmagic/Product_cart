import PropTypes from "prop-types";
import { useState } from "react";

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
};

export default function Item({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(1);

  const handleClick = function () {
    setIsClicked(true);
    setCount((prevCount) => (prevCount === 0 ? 1 : prevCount));
  };

  const addItem = function () {
    setCount((count) => count + 1);
  };
  const subtractItem = function () {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount === 0) {
        setIsClicked(false);
      }
      return newCount;
    });
  };
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
              <div>
                <img src="/subtract.png" alt="subtract icon" onClick={subtractItem} />
              </div>
              <p className="text-white">{count}</p>
              <div>
                <img src="/addition.png" alt="addition icon" onClick={addItem} />
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
