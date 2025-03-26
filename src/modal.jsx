export default function Modal() {
  return (
    <div className="fixed top-0 bg-black w-full min-h-screen opacity-80 flex justify-center items-center">
      <div className="p-10 bg-white rounded-xl">
        <img src="/checkmark.svg" alt="checkmark" />
        <p className="text-rose-900 font-bold text-[40px] leading-[120%]">Order Confirmed</p>
        <p className="text-rose-500 text-base">We hope you enjoy your food!</p>
        <ModalItems />
      </div>
    </div>
  );
}

function ModalItems() {
  return (
    <div className="bg-rose-50 p-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 border border-red">
          <img src="/image-tiramisu-desktop.jpg" alt="tiramisu" className="w-12 aspect-square rounded" />
          <div className="space-y-2">
            <p className="text-rose-900 font-semibold text-xsm leading-[150%]">Classic Tiramisu</p>
            <div className="flex">
              <p className="text-red">1x</p>
              <p>@$5.50</p>
            </div>
          </div>
        </div>
        <p>$5.50</p>
      </div>
    </div>
  );
}
