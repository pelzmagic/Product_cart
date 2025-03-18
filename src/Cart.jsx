import PropTypes from "prop-types";

Cart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

AddToCartItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default function Cart({ data }) {
  return (
    <>
      <div className="border border-red p-6 bg-white rounded-xl space-y-6">
        <p className="text-red text-2xl leading-[125%] font-bold">Your Cart(0)</p>
        <div className="border border-black flex flex-col items-center justify-center">
          <img src="/Empty Illustration.svg" alt="empty illustration" />
          <p className="text-rose-500 text-xsm text-center font-semibold leading-[150%]">Your added items will appear here</p>
        </div>
      </div>
      <div className="border border-red p-6 bg-white rounded-xl space-y-6">
        <p className="text-red text-2xl leading-[125%] font-bold">Your Cart(0)</p>
        <div className="border border-black">
          {data.map((item) => (
            <AddToCartItems data={item} key={item.category} />
          ))}
        </div>
      </div>
    </>
  );
}

function AddToCartItems({ data }) {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2 border border-blue-500 w-2/5">
        <p className="text-rose-900 text-xsm leading-[150%] font-semibold">{data.name}</p>
        <div className="w-full border border-red flex justify-between">
          <p className="text-red text-xsm leading-[150%] font-semibold">1x</p>
          <p className="text-rose-500 leading-[150%] text-xsm">{data.price.toFixed(2)}</p>
          <p className="text-rose-500 leading-[150%] font-semibold text-xsm">$5.50</p>
        </div>
      </div>
      <div>
        <img src="/Button - Remove Item.png" alt="delete button" />
      </div>
    </div>
  );
}
