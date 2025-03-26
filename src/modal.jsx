export default function Modal() {
  return (
    <div className="fixed top-0 bg-black w-full min-h-screen opacity-80 flex justify-center items-center">
      <div className="p-10 bg-white rounded-xl">
        <img src="/checkmark.svg" alt="checkmark" />
        <p className="text-rose-900 font-bold text-[40px] leading-[120%] mt-6">Order Confirmed</p>
        <p className="text-rose-500 text-base mt-2">We hope you enjoy your food!</p>
        <ModalItems />
        <button className="w-full bg-red px-6 py-4 rounded-full text-white text-base leading-[150%] font-semibold mt-8">Start New Order</button>
      </div>
    </div>
  );
}

function ModalItems() {
  return (
    <div className="bg-rose-50 p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 border border-red">
          <img src="/image-tiramisu-desktop.jpg" alt="tiramisu" className="w-12 aspect-square rounded" />
          <div className="space-y-2">
            <p className="text-rose-900 font-semibold text-xsm leading-[150%]">Classic Tiramisu</p>
            <div className="flex gap-3 items-center">
              <p className="text-red">1x</p>
              <p className="text-rose-500 text-xsm leading-[150%]">@$5.50</p>
            </div>
          </div>
        </div>
        <p className="text-base leading-[150%] text-rose-900 font-semibold">$5.50</p>
      </div>
      <hr className="border border-rose-100 mt-4" />
      <div className="flex justify-between items-center border border-red mt-6">
        <p className="text-xsm leading-[150%] text-rose-900">Order Total</p>
        <p className="text-2xl leading-[125%] font-bold">$46.50</p>
      </div>
    </div>
  );
}
