import ModalItems from "./modalitems";

export default function Modal() {
  return (
    <div className="fixed top-0 bg-black/80 w-full min-h-screen opacity-80 flex justify-center items-center">
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
