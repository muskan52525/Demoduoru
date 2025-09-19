import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../assets/svg/Header-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#A1C835] text-gray-800 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 px-6 items-center">
          {/* Logo */}
          <div className="w-[170px] md:w-[220px]  lg:w-[274px] lg:h-[295px] md:h-[220px] h-[170px] object-contain">
            <img src={Logo} alt="Demodouro" className="w-full h-full mb-4" />
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[#E5376B] text-lg font-extrabold leading-6 mb-[10px] font-poppins ">
              Menu
            </h3>
            <ul className="flex flex-col gap-[13px] text-base font-medium font-poppins">
              <li>
                <a
                  href="/products"
                  className="text-base font-semibold leading-[22px] text-white"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="/infrastructure"
                  className="text-base font-semibold leading-[22px] text-white"
                >
                  Infraestruturas
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-base font-semibold leading-[22px] text-white"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base font-semibold leading-[22px] text-white"
                >
                  Contactos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#E5376B] text-lg font-extrabold leading-6 mb-[10px] font-poppins">
              Contactar
            </h3>
            <ul className="flex flex-col gap-4 text-base font-medium font-poppins">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#E5376B] h-6 w-6" />
                <span className="text-base font-semibold leading-[22px] text-white grid">
                  <a href="tel:(+351) 261 567 199">(+351) 261 567 199</a>
                  <a href="tel:(+351) 925 524 855">(+351) 925 524 855</a>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#E5376B] h-6 w-6" />
                <span className="text-base font-semibold leading-[22px] text-white">
                  <a href="mailto:geral@demodouro.pt">geral@demodouro.pt</a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#E5376B] h-6 w-6" />
                <span className="text-base font-semibold leading-[22px] text-white">
                  Rua da Paradinha, N. Granja
                  <br />
                  3620-503 Moimenta da Beira, Portugal
                </span>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <h3 className="text-[#E5376B] text-lg font-extrabold leading-6 mb-[10px] font-poppins ">
              Fale diretamente connosco!
            </h3>
            <p className="text-lg font-semibold leading-[22px] text-white font-poppins">
              Entre em contacto e prove o melhor que temos para lhe dar.
            </p>
            <button className="flex items-center justify-center cursor-pointer max-w-[289px] w-full gap-2 bg-[#E5376B] text-lg text-white px-4 py-4 rounded-lg font-medium leading-7 mt-[27px]"
            onClick={() => window.location.href = "/contact"}>
              SABER MAIS
            </button>

            {/* Socials */}
            <div className="flex gap-4  text-xl mt-[25px]" target="_blank">
              <a href="https://www.facebook.com/demodouro">
                <FaFacebookF  className="text-white h-6 w-6"/>
              </a>
               <a href="https://www.instagram.com/demodouro/" target="_blank">
                <FaInstagram className="text-white h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/demodouro-lda/" target="_blank">
                <FaLinkedinIn className="text-white h-6 w-6" />
              </a>
             
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#E5376B] text-center px-2 py-4 text-white text-lg md:text-2xl font-semibold md:leading-[45px] leading-7  ">
        © {currentYear} Demodouro. Todos os direitos reservados | Desenvolvido
        por <span className="underline"><a href="https://devtech.pt/" target="_blank">Devtech</a></span>
      </div>
    </>
  );
};

export default Footer;