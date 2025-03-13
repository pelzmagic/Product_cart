import PropTypes from "prop-types";

const data = [
  {
    image: {
      thumbnail: "/image-waffle-thumbnail.jpg",
      mobile: "/image-waffle-mobile.jpg",
      tablet: "/image-waffle-tablet.jpg",
      desktop: "/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "/image-creme-brulee-thumbnail.jpg",
      mobile: "/image-creme-brulee-mobile.jpg",
      tablet: "/image-creme-brulee-tablet.jpg",
      desktop: "/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "/image-macaron-thumbnail.jpg",
      mobile: "/image-macaron-mobile.jpg",
      tablet: "/image-macaron-tablet.jpg",
      desktop: "/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "/image-tiramisu-thumbnail.jpg",
      mobile: "/image-tiramisu-mobile.jpg",
      tablet: "/image-tiramisu-tablet.jpg",
      desktop: "/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "/image-baklava-thumbnail.jpg",
      mobile: "/image-baklava-mobile.jpg",
      tablet: "/image-baklava-tablet.jpg",
      desktop: "/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "/image-meringue-thumbnail.jpg",
      mobile: "/image-meringue-mobile.jpg",
      tablet: "/image-meringue-tablet.jpg",
      desktop: "/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "/image-cake-thumbnail.jpg",
      mobile: "/image-cake-mobile.jpg",
      tablet: "/image-cake-tablet.jpg",
      desktop: "/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/image-brownie-thumbnail.jpg",
      mobile: "/image-brownie-mobile.jpg",
      tablet: "/image-brownie-tablet.jpg",
      desktop: "/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/image-panna-cotta-thumbnail.jpg",
      mobile: "/image-panna-cotta-mobile.jpg",
      tablet: "/image-panna-cotta-tablet.jpg",
      desktop: "/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
console.log(data);

function App() {
  return (
    <div className="border border-r-emerald-800 py-[88px] px-[112px] max-w-[1440px] mx-auto">
      <Order />
    </div>
  );
}

function Order() {
  return (
    <div className="border-red border-solid border-[1px] flex gap-8 max-w-[1216px]">
      <div className="border border-red w-[66%] space-y-8">
        <p className="font-body text-rose-900 text-xl font-bold leading-[120%]">Desserts</p>
        <div className="border border-blue-950 grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-8">
          {data.map((data) => (
            <Item key={data.category} data={data} />
          ))}
        </div>
      </div>
      <div className="border border-black w-[34%]">
        <Cart />
      </div>
    </div>
  );
}

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

function Item({ data }) {
  return (
    <div className="border border-yellow-700 max-w-[250px] flex flex-col gap-4">
      <div className="border border-red w-full h-[262px] relative">
        <img
          className="w-full rounded-lg"
          src={data.image.desktop}
          srcSet={`${data.image.mobile} 500w, ${data.image.tablet} 1000w, ${data.image.desktop} 1500w`}
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          alt={`a ${data.category}`}
        />
        <button className="flex gap-2 bg-white w-[160px] h-[44px] justify-center items-center rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 border border-rose-400">
          <img src="/icon-add-to-cart.svg" alt="a cart"></img>
          <span className="text-[14px] leading-[150%] text-rose-900">Add to cart</span>
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

function Cart() {
  return (
    <div className="border border-red p-6 bg-white rounded-xl space-y-6">
      <p className="text-red text-2xl leading-[125%] font-bold">Your Cart(0)</p>
      <div className="border border-black flex flex-col items-center justify-center">
        <img src="/Empty Illustration.svg" alt="empty illustration" />
        <p className="text-rose-500 text-xsm text-center font-semibold leading-[150%]">Your added items will appear here</p>
      </div>
    </div>
  );
}
export default App;
