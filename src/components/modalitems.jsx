export default function ModalItems() {
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
