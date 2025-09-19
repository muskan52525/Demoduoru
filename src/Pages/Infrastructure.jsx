import React from 'react'
import AboutInfraStructure from '../components/AboutInfraStructure'
import { InfraData } from "../data/form";
import bgImage from "../assets/png/IngraBgimg.png";
import InfraDistribute from '../components/InfraDistribute'
import ContactForm from '../components/ContactForm'
import Infraform from "../assets/png/infraform.png"

const Infrastructure = () => {
  return (
    <>
      <AboutInfraStructure/>
       <section
      className="relative bg-cover bg-center min-h-[800px] w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center, center center",
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
  
      <div className="hidden lg:block absolute inset-0">
        {InfraData.map((feature, index) => {
          const positions = [
            { top: "60px", left: "450px" },
            { bottom: "136px", left: "85px" },
            { top: "150px", right: "215px" },
            { bottom: "25px", right: "463px" },
          ];

          return (
            <div
              key={feature.id}
              className="absolute"
              style={{
                ...positions[index],
              }}
            >

                <div className="bg-white backdrop-blur-md rounded-[30px] p-6 text-center max-w-[326px] w-full cursor-pointer border-[20px] border-[#E5376B] ">
              <h3 className="text-lg md:text-xl font-normal text-[25px] leading-[45px] text-[#E73569] font-mono45  ">
                {feature.title}
              </h3>
              <p className="text-[#E73569] mt-2 text-base font-normal leading-[28px] font-poppins">
                {feature.description}
              </p>
            </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 ">
        {InfraData.map((feature) => (
            
            
          <div
            key={feature.id}
            className="border-[#E5376B] border-[20px] rounded-[30px]"
          >
            <div className="bg-white  rounded-[30px] shadow-lg p-6 text-center cursor-pointer">
            <h3 className="text-[22px] leading-[35px] text-[#E73569] font-mono45 font-normal">
              {feature.title}
            </h3>
            <p className="text-[#E73569] mt-2 text-base font-normal leading-[28px]">
              {feature.description}
            </p>
            </div>
          </div>
         
        ))}
        
      </div>
    </section>
      <InfraDistribute/>
       <ContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={Infraform}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
    </>
  )
}

export default Infrastructure
