import React from "react";
import DetailImg from "../assets/png/contactDetail-Img.png";
import MessageIcon from "../assets/svg/MessageIcon.svg";
import PhoneIcon from "../assets/svg/phone-icon.svg";
import LocationIcon from "../assets/svg/location.svg";

const ContactDetail = () => {
  return (
    <>
      <div className="grid grid-col1 md:grid-cols-2 items-center">
        <div className="max-w-[636px] mx-auto mt-[30px] md:mt-0 px-6 md:px-6 pb-5 md:pb-0">
          <h3 className="font-medium text-2xl text-[#A4C428] leading-[22px] uppercase font-poppins">
            contactos
          </h3>
          <h2 className="text-[#E5376B] font-normal md:text-[56px] text-3xl  leading-[45px] md:mt-6 mt-4 uppercase font-mono45">
            entre em contacto
          </h2>
          <p className="text-black font-normal text-2xl md:mt-[36px] mt-[15px] font-poppins">
            Fale diretamente connosco e prove o melhor que temos para lhe dar
          </p>
          <div className="flex items-start gap-4 md:mt-10 mt-6 cursor-pointer font-poppins">
            <img src={PhoneIcon} alt=""/>
            <p className="text-[#262626] font-medium text-xl md:text-2xl leading-[33px]">
              (+351) 912 345 678 <br />
              (+351) 925 524 855
            </p>
          </div>
          <div className="flex items-start gap-4 md:mt-[36px] mt-[15px] cursor-pointer">
            <img src={MessageIcon} alt="MessageIcon" />
            <p className="text-xl md:text-2xl  font-medium font-poppins leading-[22px] text-[#262626]">
              geral@demodouro.pt
            </p>
          </div>
          <div className="flex items-start gap-4 md:mt-[36px] mt-[15px] cursor-pointer ">
            <img src={LocationIcon} alt="location" />
            <p className="font-medium text-xl md:text-2xl leading-[29px] text-[#363636]">
              Rua da Padaria, S/N, Granjinha/Sever,<br/>
              3620-503 Moimenta da Beira,
              Portugal
            </p>
          </div>
        </div>
        <div>
          <img src={DetailImg} alt="DetailImg"/>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;