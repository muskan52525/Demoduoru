import React from "react";
import InfraImg from "../assets/png/InfraDistibution.png";

const InfraDistribute = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse">
        <div>
          <img src={InfraImg} alt="Infrastructure" />
        </div>
        <div className="max-w-full w-full  md:max-w-[668px] lg:m-auto my-3 lg:px-0 px-5 ">
          <h4 className="text-[#A4C428] font-poppins font-medium text-lg md:text-2xl uppercase tracking-[1.28px]">
            os nossos camiões
          </h4>
          <h2 className="text-[#E5376B] font-normal text-2xl md:text-5xl font-mono45 leading-[45px] mt-2 md:mt-[19px]">
            distribuição e exportação
          </h2>
          <p className="text-[#666F77] font-poppins font-medium text-xl leading-7 mt-2 md:mt-[19px] ">
            Comercializamos para os supermercados nacionais, mercados
            tradicionais e exportação marítima para vários continentes,
            nomeadamente:
          </p>
          <ul className="text-[#666F77] font-poppins font-medium text:lg md:text-2xl leading-7 mt-2 flex flex-col gap-2 list-disc pl-[30px]">
            <li>Europa</li>
            <li>África</li>
            <li>América do Sul</li>
            <li>América Central</li>
            <li>Médio Oriente</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfraDistribute;