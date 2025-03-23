import PropTypes from "prop-types";

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

AddToCartItems.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.string.isRequired, // again, adjust type if needed
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function Cart({ cartItems, setCartItems }) {
  const deleteItem = function (id) {
    console.log(cartItems);
    setCartItems((cartItems) => {
      const itemToUpdate = cartItems.find((item) => item.id === id);
      if (!itemToUpdate) return cartItems;
      if (itemToUpdate.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      }
      return cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="border border-red p-6 bg-white rounded-xl space-y-6">
          <p className="text-red text-2xl leading-[125%] font-bold">Your Cart(0)</p>
          <div className="border border-black flex flex-col items-center justify-center">
            <img src="/Empty Illustration.svg" alt="empty illustration" />
            <p className="text-rose-500 text-xsm text-center font-semibold leading-[150%]">Your added items will appear here</p>
          </div>
        </div>
      ) : (
        <div className="border border-red p-6 bg-white rounded-xl space-y-6">
          <p className="text-red text-2xl leading-[125%] font-bold">Your Cart(0)</p>
          <div className="border border-black">
            {cartItems.map((cartItem) => (
              <AddToCartItems cartItem={cartItem} key={cartItem.id} onDelete={deleteItem} />
            ))}
            <div>
              <p className="text-rose-900 leading-[150%] text-xsm">Order Total</p>
              <p className="text-rose-900 leading-[125%]">$46.50</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AddToCartItems({ cartItem, onDelete }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-2 border border-blue-500 w-1/2">
          <p className="text-rose-900 text-xsm leading-[150%] font-semibold">{cartItem.name}</p>
          <div className="w-full border border-red flex justify-between">
            <p className="text-red text-xsm leading-[150%] font-semibold">{cartItem.quantity}x</p>
            <p className="text-rose-500 leading-[150%] text-xsm">@${cartItem.price.toFixed(2)}</p>
            <p className="text-rose-500 leading-[150%] font-semibold text-xsm">$5.50</p>
          </div>
        </div>
        <div onClick={() => onDelete(cartItem.id)}>
          <img src="/Button - Remove Item.png" alt="delete button" />
        </div>
      </div>
      <hr className="border border-rose-100" />
    </div>
  );
}
