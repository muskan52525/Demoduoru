
import AppleImg from "../assets/svg/productcard-apple.svg";
import GoldenImg from "../assets/svg/productcard-golden.svg";
import RedImg from "../assets/svg/productcard-red.svg";
import ReinetaImg from "../assets/svg/productcard-reineta.svg";
import FujiImg from "../assets/svg/productcard-fuji.svg";
import StarkingImg from "../assets/svg/productcard-starking.svg";
import GrannyImg from "../assets/svg/productcard-granny.svg";
import CerejaImg from "../assets/svg/productcard-cereja.svg";
import CastanhaImg from "../assets/svg/productcard-castanha.svg";
import MorangoImg from "../assets/svg/productcard-morango.svg";
import MirtiloImg from "../assets/svg/productcard-mirtilo.svg";
import KiwiImg from "../assets/svg/productcard-kiwi.svg";
import FramebosaImg from "../assets/svg/productcard-framebosa.svg";
import UvaImg from "../assets/svg/productcard-uva.svg";
import LaranjaImg from "../assets/svg/productcard-laranja.svg";
import NimioImg from "../assets/svg/productcard-nimio.svg";

import { useNavigate } from "react-router-dom";

  const ProductsCards = () => {
  const navigate = useNavigate();

  const productsData = [
    { id: 1, name: "Maçã Royal Gala", img: AppleImg },
    { id: 2, name: "Maçã Golden", img: GoldenImg },
    { id: 3, name: "Maçã Red", img: RedImg },
    { id: 4, name: "Maçã Reineta", img: ReinetaImg },
    { id: 5, name: "Maçã Fuji", img: FujiImg },
    { id: 6, name: "Maçã Starking", img: StarkingImg },
    { id: 7, name: "Maçã Granny Smith", img: GrannyImg },
    { id: 8, name: "Maçã Bravo Esmolfe", img: AppleImg },
    { id: 9, name: "Cereja", img: CerejaImg },
    { id: 10, name: "Castanha", img: CastanhaImg },
    { id: 11, name: "Morango", img: MorangoImg },
    { id: 12, name: "Mirtilo", img: MirtiloImg },
    { id: 13, name: "Kiwi", img: KiwiImg },
    { id: 14, name: "Framboesa", img: FramebosaImg },
    { id: 15, name: "Uva", img: UvaImg },
    { id: 16, name: "Laranja", img: LaranjaImg },
    { id: 17, name: "Limão", img: NimioImg },

  ];

  return (
    <section className="bg-[#A1C128] pb-[250px] pt-[180px]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white uppercase text-2xl leading-[22px]  font-medium">
          Os nossos produtos
        </p>
        <h2 className="text-6xl leading-[45px] mt-10 font-medium  text-outline-pink font-mono45">
          Temos o melhor da natureza para si!
        </h2>
        <p className="text-white mt-6 text-2xl font-medium leading-7 font-poppins">
          Cultivamos as frutas mais frescas e saborosas em ambientes
          controlados, garantindo condições ideais para o seu crescimento
          saudável.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-4xl shadow-[0px_4px_4px_0px_#00000040] py-8 flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-45 w-100 object-contain"
              />
              <h3 className="text-[#9AC433] text-[35px] leading-[30px] font-regular font-mono45 text-lg">
                {product.name}
              </h3>
              <button className="px-4 text-lg font-medium  py-2 mt-3 bg-[#E5376B] text-white leading-4 max-w-[150px] w-full font-poppins cursor-pointer"  onClick={() => navigate(`/product/${product.id}`)}>
                Saber mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
