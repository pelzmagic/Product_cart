export default function Cart() {
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
          <AddToCartItems />
        </div>
      </div>
    </>
  );
}

function AddToCartItems() {
  return (
    <div>
      <div className="space-y-2 border border-blue-500">
        <p className="text-rose-900 text-xsm leading-[150%] font-semibold">Classic Tiramisu</p>
        <div className="w-2/5 border border-red flex justify-between">
          <p className="text-red text-xsm leading-[150%] font-semibold">1x</p>
          <p className="text-rose-500 leading-[150%] text-xsm">@5.50</p>
          <p className="text-rose-500 leading-[150%] font-semibold text-xsm">$5.50</p>
        </div>
      </div>
      <img src="/Button - Remove Item.png" alt="delete button" />
    </div>
  );
}
