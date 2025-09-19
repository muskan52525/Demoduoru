import React from "react";
import { useParams, Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import FormImg from "../assets/png/ProductDetailImg.png";
import { products } from "../data/form";
import ProductDetail from "../components/Productdetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Produto não encontrado</h2>
        <Link to="/products" className="text-blue-600 underline">
          Voltar aos produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img src={product.img} alt={product.name} className="w-64 h-64" />

          <div className="bg-white border-2 border-pink-500 rounded-md p-4 mt-6">
            {Object.entries(product.storage ?? {}).map(([key, value]) => (
              <p key={key}>
                <span className="text-pink-600 font-bold uppercase">
                  {key}
                </span>
                {value}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-pink-600 uppercase mb-6">
            {product.name}
          </h1>

          <div className="bg-pink-500 text-white rounded-lg p-6 mb-6">
            {Object.entries(product.characteristics ?? {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-white/30 pb-1"
                >
                  <span className="font-semibold">{key}</span>
                  <span>{value}</span>
                </div>
              )
            )}
          </div>

          <div className="bg-green-400 text-white rounded-lg p-6 mb-6">
            {Object.entries(product.calendar ?? {}).map(([key, value]) => (
              <p key={key}>
                <span className="font-semibold">{key}: </span>
                {value}
              </p>
            ))}
          </div>
        </div>
      </div> */}

      <ProductDetail />

      {/* Contact Form */}
      <div className="mt-16">
        <ContactForm
          heading={`Estamos Aqui Para Si - ${product.name}`}
          subheading="Tem alguma pergunta? Envie-nos uma mensagem."
          buttonText="Enviar"
          imageSrc={FormImg}
          bgColor="#E5376B"
          outlineClass="text-outline-green"
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
