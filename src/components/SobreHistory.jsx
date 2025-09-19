import Map from "../assets/png/map.png";

const SobreHistory = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 pt-5 md:pt-2">
        <div className="w-full max-w-full md:max-w-[700px] mx-auto">
          <h3 className="font-medium text-2xl text-[#A4C428] leading-[22px] uppercase font-poppins">
            A NOSSA HISTÓRIA
          </h3>
          <h2 className="text-[#E5376B] font-normal font-mono45 text-3xl md:text-5xl leading-[45px] md:mt-[19px] mt-3 uppercase">
            It´s tasty because it´s ours
          </h2>

          <p className="md:mt-10 mt-3 font-poppins font-medium text-lg md:text-2xl text-[#666F77] flex-wrap">
            Somos uma empresa dedicada à produção e comercialização de frutas,
            localizada nas belas terras do Demo e nas encostas do Douro, no
            norte de Portugal. O nosso nome, Demodouro, nasceu da paixão com que
            cultivamos a nossa fruta nestas terras únicas.A maçã e a cereja
            {/* eslint-disable-next-line no-irregular-whitespace */}
            são os produtos que nos distinguem, sendo a maçã o nosso principal
            produto.O nosso compromisso com a qualidade é evidente em cada passo
            do processo, desde o cultivo até à entrega. Trabalhamos em parceria
            com produtores locais e regionais, assegurando a origem e a frescura
            das frutas que chegam até si.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Map} alt="DetailImg" />
        </div>
      </div>
    </>
  );
};

export default SobreHistory;