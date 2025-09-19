import React from "react";
import OfficialImg from "../assets/png/officialCard-img.png";
import Logo from "../assets/png/OfficialLogo-img.png";

const SobreOfficialCard = () => {
  return (
    <>
    <div className="bg-white md:pt-[129px] md:pb-[197px] py-[60px]">

   
      <h4 className="text-[#E5376B] font-medium text-2xl tracking-[1.28px] leading-[22px] text-center">
        APOIOS
      </h4>
      <h2 className="text-outline-green text-6xl mt-[38px] text-center">
        Patrocinadores oficiais
      </h2>
      <div className="max-w-[1400px] md:mx-auto bg-[#E5376B] rounded-[54px] shadow-[0px_4px_4px_0px_#00000040] flex justify-between flex-col md:flex-row items-center p-[62px] gap-[30px] md:mt-[105px] mt-[60px] mx-[20px]">
        <div className="md:w-[603px] md:h-[510px] rounded-[25px] overflow-hidden">
          <img
            src={OfficialImg}
            className="h-full w-full object-cover"
            alt="OfficialImg"
          />
        </div>
        <div>
          <img src={Logo} className="w-[303px] h-[109px] " alt="Logo" />
          <h2 className="text-[#FFFFFF] text-5xl font-bold leading-[45px] mt-[29px] font-mulish">
            Escola de Andebol de Moimenta da Beira
          </h2>
          <h4 className="mt-[20px] text-white text-[20px] leading-[45px] font-bold font-mulish">
            Rua do Mercado, Loja 3 3620-320 Moimenta Beira
          </h4>
          <p className="text-white text-[20px] leading-[45px] font-bold font-mulish">
            moimentaandebol@gmail.com
          </p>
          <p className="text-white text-[20px] leading-[45px] font-bold font-mulish">
            968118150
          </p>
          <button className="bg-[#A1C128] text-2xl leading-[45px] font-bold font-mulish text-white px-3">andebol_moimentadabeira</button>
        </div>
      </div>
       </div>
    </>
  );
};

export default SobreOfficialCard;