import Cart from "./Cart";
import Item from "./Item";
import PropTypes from "prop-types";

Order.propTypes = {
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
  isClicked: PropTypes.bool,
  setIsClicked: PropTypes.func,
};

export default function Order({ data, isClicked, setIsClicked }) {
  return (
    <div className="border-red border-solid border-[1px] flex gap-8 max-w-[1216px]">
      <div className="border border-red w-[66%] space-y-8">
        <p className="font-body text-rose-900 text-xl font-bold leading-[120%]">Desserts</p>
        <div className="border border-blue-950 grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-8">
          {data.map((data) => (
            <Item key={data.category} data={data} isClicked={isClicked} setIsClicked={setIsClicked} />
          ))}
        </div>
      </div>
      <div className="border border-black w-[34%]">
        <Cart data={data} isClicked={isClicked} />
      </div>
    </div>
  );
}
