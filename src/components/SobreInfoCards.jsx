import React from "react";
import { sobre } from "../data/form";

const SobreInfoCards = () => {
  return (
    <div className="bg-[#A1C128] py-[60px] md:pt-[112px] md:pb-[181px]">
      <h4 className="text-lg font-medium leading-[22px] tracking-[1.28px] uppercase font-poppins text-white text-center">Dedicação que Faz a Diferença</h4>
       <h2 className="text-outline-pink text-center text-[30px] md:text-[60px]">conheça a nossa equipa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] max-w-full md:px-0 px-4  md:max-w-[1580px] mx-auto mt-[60px] md:mt-[139px]  ">
        {sobre.map((member) => (
          <div key={member.id} className="staff-card">
            <img
              className="h-[350px] w-[350px] object-cover rounded-2xl"
              src={member.image}
              alt={member.name}
            />
            <h3 className="md:text-center text-start text-2xl font-normal leading-[45px] text-white font-mono45">{member.name}</h3>
             {member.role && <p className="md:text-center text-start text-base text-white font-poppins">{member.role}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobreInfoCards;