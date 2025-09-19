import React from "react";
import HeroBanner from "../assets/jpg/HomeBanner.jpg";
import BannerLogo from "../assets/svg/Banner-logo.svg";

const Hero = () => {
  const heroData = {
    bannerImg: HeroBanner,
    logoImg: BannerLogo,
    title: "dfgjgdfghdgj",
    section: {
      subtitle: "A nossa história",
      heading: "IT´S TASTY BECAUSE IT´S OURS",
      description:
        "Somos uma empresa dedicada à produção e comercialização de frutas, localizada nas belas terras do Demo e nas encostas do Douro, no norte de Portugal. O nosso nome, Demodouro, nasceu porque a nossa fruta é cultivada com paixão nestas terras únicas.",
      buttonText: "saber mais",
      buttonLink: "/sobre"
    },
  };

  return (
    <>
      <div className="w-full h-[60vh] md:h-[822px] overflow-hidden relative">
        <img
          src={heroData.bannerImg}
          className="w-full h-full object-cover scale-x-[-1]"
          alt="HeroBanner"
        />

        {/* LOGO OVERLAY */}
        <div className="absolute top-1/2 right-4 md:right-[178px] -translate-y-1/2 flex flex-col items-end">
          <img
            src={heroData.logoImg}
            className="h-[160px] w-[120px] md:h-[362px] md:w-[254px] object-contain"
            alt="HeroLogo"
          />
        </div>
      </div>
      <div className="bg-white text-center px-4 py-10 md:py-12 pt-[80px] md:pt-[137px] max-w-[1024px] mx-auto">
        <p className="text-[#A4C428] uppercase text-lg md:text-2xl font-medium leading-[22px]">
          {heroData.section.subtitle}
        </p>

        <h2 className="text-[#E5376B] font-mono45 font-normal text-2xl sm:text-3xl md:text-4xl mt-5 leading-snug md:leading-[45px]">
          {heroData.section.heading}
        </h2>

        <p className="text-[#666F77] mt-6 text-base md:text-lg leading-relaxed font-medium px-2">
          {heroData.section.description}
        </p>

        <button className="banner-button font-mulish min-w-[180px] md:min-w-[246px] mt-6 px-6 py-2 cursor-pointer" 
        onClick={() => window.location.href = heroData.section.buttonLink}>
          {heroData.section.buttonText}
        </button>
      </div>
    </>
  );
};

export default Hero;