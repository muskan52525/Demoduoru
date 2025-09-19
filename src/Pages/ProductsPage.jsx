import React from 'react'
import Banner from '../components/Banner'
import ProductsCards from '../components/ProductCard'
import ContactForm from '../components/ContactForm'
import BlackberryImg from "../assets/png/productform.png"

const ProductsPage = () => {
  return (
    <>
       <Banner/>
       <ProductsCards/>
        <ContactForm
      heading="ESTAMOS AQUI PARA SI!"
      subheading="Tem alguma pergunta? Envie-nos uma mensagem."
      buttonText="saber mais"
      imageSrc={BlackberryImg}
      bgColor="#E5376B"
      outlineClass="text-outline-green"/>
    </>
  )
}

export default ProductsPage
