import React from 'react'
import SobreImg from "../assets/png/banner_sobre.png";
import SobreHistory from '../components/SobreHistory';
import SobreCardComponent from '../components/SobreCardSobres';
import SobreInfoCards from '../components/SobreInfoCards';
import SobreOfficialCard from '../components/SobreOfficialCard';
import ContactForm from '../components/ContactForm';
import ContactFormImg from "../assets/jpg/SoberContactForm-Img.jpg"

const Sobre = () => {
  return (
    <>
    <div>
     <img src={SobreImg} alt=""/>
    </div>
     <SobreHistory/>
     <SobreCardComponent/>
     <SobreInfoCards/>
     <SobreOfficialCard/>
      <ContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={ContactFormImg}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
     

    </>
  )
}

export default Sobre
