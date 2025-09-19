import React from "react";
import AppleImg from "../assets/svg/productcard-fuji.svg";
import CherryImg from "../assets/svg/cherryImg.svg";
import ChestnutImg from "../assets/svg/ChestnutImg.svg";
import Strawberries from "../assets/png/Strawberries.png"
import kiwi from "../assets/png/kiwi.png"
import mirtilo from "../assets/png/mirtilo.png"
import Slider from "react-slick";

const Products = () => {
  const productsData = {
    sectionTitle: "Os nossos produtos",
    sectionHeading: "NÃO É SÓ UMA MAÇÃ, É DEMODOURO!",
    sectionDescription:
      "Cultivamos as frutas mais frescas e saborosas em ambientes controlados, garantindo condições ideais para o seu crescimento saudável.",

    mainProducts: [
      {
        name: "Maçã",
        img: AppleImg,
        season: "Época de produção: Variável",
        varieties: [
          "Royal Gala",
          "Golden",
          "Starking",
          "Reineta",
          "Bravo",
          "Fuji",
          "Granny",
        ],
      },
      {
        name: "Cereja",
        img: CherryImg,
        season: "Época de produção: Variável",
        varieties: ["Sweet Heart", "Lapins", "Burlat", "Van", "Summit"],
      },
    ],

    smallProducts: [
      { name: "Castanha", img: ChestnutImg },
      { name: "Morango", img: Strawberries },
      { name: "Mirtilo", img: mirtilo },
      { name: "Kiwi", img: kiwi },
      { name: "Kiwi", img: kiwi },
    ],
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#A1C128] w-full">
      <div className="max-w-6xl mx-auto text-center md:pt-[151px] pt-[60px] md:pb-[204px] pb-[60px]">
        {/* Section Intro */}
        <p className="text-white uppercase tracking-wide text-2xl font-medium leading-[22px]">
          {productsData.sectionTitle}
        </p>
        <h2 className="text-outline-pink font-bold md:text-[60px] text-3xl md:text-4xl mt-10 px-2 md:px-0 md:leading-[70px]">
          {productsData.sectionHeading}
        </h2>
        <p className="text-white mt-4 md:text-2xl text-xl font-medium leading-7 mx-auto px-2 md:px-0">
          {productsData.sectionDescription}
        </p>

        {/* Main Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-5 md:px-0">
          {productsData.mainProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-[46px] flex md:flex-row flex-col items-center justify-between gap-10"
            >
              <div className="md:w-[55%] w-full">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-[292px] w-auto object-contain"
                />
                <p className="text-lg font-medium text-[#2B2D30] mt-4 text-start md:text-center">
                  {product.season}
                </p>
              </div>
              <div className="md:w-[60%] w-full md:flex md:flex-col md:justify-between md:gap-2 h-full">
                <h3 className="text-[#9AC433] text-xl font-bold mt-4 text-start">
                  {product.name}
                </h3>
                <div className="text-gray-600 text-sm mt-2 flex flex-col whitespace-nowrap text-start">
                  <span className="font-medium">Variedades</span>
                  <ul className="text-[#666F77] font-medium text-lg">
                    {product.varieties.map((variety, i) => (
                      <li key={i}>{variety};</li>
                    ))}
                  </ul>
                </div>
                <button className="py-[10px] card-btn flex justify-center cursor-pointer" onClick={() => window.location.href = "/products"}>Saber mais</button>
              </div>
            </div>
          ))}
        </div>

        {/*Small Products Slider */}
        <div className="mt-16">
          <Slider {...sliderSettings}>
            {productsData.smallProducts.map((item, idx) => (
              <div key={idx} className="px-3">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[200px] w-[200px] object-contain"
                  />
                  <h3 className="text-[#9AC433] mt-4 text-[42px] leading-[30px] font-normal font-mono45">
                    {item.name}
                  </h3>
                  <button className="slider-btn mt-5 cursor-pointer" onClick={() => window.location.href = "/products"}>Saber mais</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;