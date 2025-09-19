import {markets} from "../data/form"



const SobreCardComponent = () => {
    
  return (
    <section className="bg-[#E5376B] py-[60px] md:pt-[167px] md:pb-[243px]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h4 className="uppercase text-white text-lg font-medium leading-[22px] tracking-[1.28px] font-poppins">
          OS NOSSOS MERCADOS
        </h4>
        <h2 className="font-mono45 font-normal text-4xl md:text-[64px] mt-[36px] text-outline-green leading-[45px]">
          ONDE ESTAMOS PRESENTES?
        </h2>
        <p className="text-white text-2xl font-poppins font-medium leading-6 mt-10">
          Da produção à comercialização, garantimos frescura e qualidade para
          abastecer os mercados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {markets.map((market) => (
            <div
              key={market.id}
              className="bg-white rounded-2xl shadow-lg p-[60px] flex flex-col items-center h-full "
            >
              <img
                src={market.image}
                alt={market.title}
                className="rounded-xl w-full h-[435px] object-cover"
              />
              <h3 className="bg-[#A4C428] font-muli text-white px-[14px] py-3  font-bold text-sm md:text-xl mt-[53px] leading-[45px]">
                {market.title}
              </h3>
              <p className="font-muli text-xl mt-4 text-[#061829] underline font-bold">{market.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreCardComponent;