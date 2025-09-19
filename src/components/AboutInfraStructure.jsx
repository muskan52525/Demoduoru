import React from "react";
import InfraImg from "../assets/png/AboutInfraImg.png";

const AboutInfraStructure = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <img src={InfraImg} alt="Infrastructure" />
        </div>
        <div className="max-w-full w-full lg:max-w-[668px] md:mx-auto px-5 lg:px-0 mt-5 md:mt-0 pb-2 md:pb-0">
          <h4 className="text-[#A4C428] font-poppins font-medium text-xl md:text-2xl uppercase tracking-[1.28px]">
            o sabor da qualidade
          </h4>
          <h2 className="text-[#E5376B] font-normal text-5xl font-mono45 leading-[45px] mt-2  md:mt-[19px]">
            os nossos pomares
          </h2>
          <p className="text-[#666F77] font-poppins font-medium md:text-2xl text-base leading-7 mt-2 md:mt-[19px]">
            Com produção própria distribuída por vários hectares, os nossos
            pomares localizam-se numa área geográfica protegida, entre os 700 e
            os 900 metros de altitude. Beneficiam de excelentes condições
            edafo-climáticas, que lhes conferem características únicas — como
            coloração intensa, elevado teor de açúcares, sabor marcante e
            crocância consistente. A nossa equipa técnica de campo promove a
            especialização tanto na produção própria como na contratada. Os
            nossos técnicos acompanham os produtores ao longo de todo o ano,
            assegurando qualidade e rigor em cada etapa do processo.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutInfraStructure;