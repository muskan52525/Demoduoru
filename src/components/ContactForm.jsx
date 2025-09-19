import React, { useState } from "react";

const ContactForm = ({
  heading = "ESTAMOS AQUI PARA SI!",
  subheading = "Tem alguma pergunta? Envie-nos uma mensagem.",
  buttonText = "saber mais",
  imageSrc,
  bgColor = "#E5376B",
  outlineClass = "text-outline-green",
  fields = [
    { type: "text", name: "name", placeholder: "Nome" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "text", name: "subject", placeholder: "Assunto" },
    { type: "textarea", name: "message", placeholder: "Mensagem", rows: 4 },
  ],
}) => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    let newErrors = {};

    fields.forEach((field) => {
      const value = formValues[field.name]?.trim() || "";

      if (!value) {
        newErrors[field.name] = `${field.placeholder} é obrigatório`;
      } else if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = "Por favor, insira um email válido";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formValues);
    }
  };

  return (
    <section className="w-full">
      <div className="grid grid-col-1 lg:grid-cols-2 w-full">
        {imageSrc && (
          <div>
            <img
              src={imageSrc}
              alt="Contact illustration"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex flex-col justify-center px-8 py-12 mx-auto max-w-[700px] w-full">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-2 text-outline-shadow drop-shadow-[0px_4px_4px_#D6134D] ${outlineClass}`}
            >
              {heading}
            </h2>
            <p className="font-light text-[20px] leading-[30px] mt-[2px] text-white mb-4">
              {subheading}
            </p>
            <form
              className="flex flex-col space-y-4 w-full mt-[19px] gap-3"
              onSubmit={handleSubmit}
              noValidate
            >
              {fields.map((field, index) =>
                field.type === "textarea" ? (
                  <div key={index} className="flex flex-col">
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows || 3}
                      onChange={handleChange}
                      className={`p-3 w-full bg-white placeholder-[#B4B4B4] focus:outline-none m-0 text-[20px] font-normal leading-[30px] font-mulish ${
                        errors[field.name] ? "border border-white" : ""
                      }`}
                    />
                    {errors[field.name] && (
                      <span className="text-white text-sm mt-1">
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ) : (
                  <div key={index} className="flex flex-col">
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      className={`p-3 w-full bg-white placeholder-[#B4B4B4] focus:outline-none m-0 text-[20px] font-normal leading-[30px] font-mulish ${
                        errors[field.name] ? "border border-white" : ""
                      }`}
                    />
                    {errors[field.name] && (
                      <span className="text-white text-sm mt-1">
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                )
              )}

              <button
                type="submit"
                className="bg-[#A1C128] max-w-[230px] w-full text-white text-[23px] font-bold leading-[45px] font-mulish py-3 hover:opacity-90 transition"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;