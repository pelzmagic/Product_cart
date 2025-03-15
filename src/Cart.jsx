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
      <div>
        <p>Classic Tiramisu</p>
        <div>
          <p>1x</p>
          <p>@5.50</p>
          <p>$5.50</p>
        </div>
      </div>
    </div>
  );
}
