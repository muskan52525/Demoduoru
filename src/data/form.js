import CardImg1 from "../assets/jpg/sobreCard1.jpg";
import CardImg2 from "../assets/jpg/sobreCard2.jpg";
import sobreImg1 from "../assets/jpg/sobre1.jpg";
import sobreImg2 from "../assets/jpg/sobre2.jpg";
import sobreImg3 from "../assets/png/sobre3.png";
import sobreImg4 from "../assets/png/sobre4.png";
import sobreImg5 from "../assets/png/sobre5.png";
import sobreImg6 from "../assets/png/sobre6.png";
import sobreImg7 from "../assets/png/sobre7.png";
import sobreImg8 from "../assets/png/sobre8.png";
import sobreImg9 from "../assets/png/sobre9.png";
import sobreImg10 from "../assets/png/sobre10.png";
import sobreImg11 from "../assets/png/sobre11.png";
import sobreImg12 from "../assets/png/sobre12.png";
import sobreImg13 from "../assets/png/sobre13.png";
import sobreImg14 from "../assets/png/sobre14.png";
import sobreImg15 from "../assets/png/sobre15.png";
import sobreImg16 from "../assets/png/sobre16.png";
import sobreImg17 from "../assets/png/sobre17.png";
import sobreImg18 from "../assets/png/sobre18.png";
import sobreImg19 from "../assets/png/sobre19.png";
import sobreImg20 from "../assets/png/sobre20.png";
import sobreImg21 from "../assets/png/sobre21.png";
import sobreImg22 from "../assets/png/sobre22.png";  
import sobreImg23 from "../assets/png/sobre23.png";
import sobreImg24 from "../assets/png/sobre24.png";



export const products = [
  {
    id: 1,
    name: "Maçã ROYAL GALA",
    img: "../src/assets/svg/productcard-apple.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-1.png",
    topRight:   "../src/assets/png/productdecore-2.png",
    bottomLeft: "../src/assets/png/productdecore-3.png"
  },
    storage: {
      Armazenamento: "em atmosfera controlada ou em frio normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC a 2ºC.",
      Embalamento:
        "em saco plástico/granel e acondicionado em caixa de plástico ou cartão."
    },
    characteristics: [
      { label: "FORMA", value: "alongada ovoide ligeiramente tronco-cónica" },
      { label: "CALIBRE", value: "55 mm a 90 mm" },
      { label: "TEXTURA", value: "fina, crocante, estaladiça e sumarenta" },
      { label: "COR", value: "vermelho vivo, ligeiramente estriado, com fundo amarelo" },
      { label: "SABOR", value: "doce e suave" },
      { label: "ACIDEZ", value: "5,7 a 6,2 meq/100ml" },
      { label: "ÁGUA", value: "80% a 86%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },        
      disponibilidade: { active: [] } 
    },
  },
  {
    id: 3,
    name: "Maçã Red",
    img: "../src/assets/svg/productcard-red.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-4.png",
    topRight:   "../src/assets/png/productdecore-5.png",
    bottomLeft: "../src/assets/png/productdecore-6.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "alongada" },
      { label: "CALIBRE", value: "55 mm a 90 mm" },
      { label: "TEXTURA", value: "polpa suculenta, macia, de textura fina e consistente" },
      { label: "COR", value: "vermelho intenso e brilhante" },
      { label: "SABOR", value: "suave e doce, com acidez discreta" },
      { label: "ACIDEZ", value: "2,6 a 3,4 meq/100ml" },
      { label: "ÁGUA", value: "86%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },               
      disponibilidade: { active: [] }        
    }
  },
  {
    id: 2,
    name: "Maçã Golden",
    img: "../src/assets/svg/productcard-golden.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-7.png",
    topRight:   "../src/assets/png/productdecore-8.png",
    bottomLeft: "../src/assets/png/productdecore-3.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "alongada ovoide ligeiramente tronco-cónica" },
      { label: "CALIBRE", value: "55 mm a 90 mm" },
      { label: "TEXTURA", value: "crocante e suculenta" },
      { label: "COR", value: "verde-amarelado a amarelo-dourado, por vezes exibe coloração rosada" },
      { label: "SABOR", value: "doce, suave e equilibrado, com um toque refrescante de acidez" },
      { label: "ACIDEZ", value: "3,8 a 6,2 meq/100ml" },
      { label: "ÁGUA", value: "83% a 86%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9 , 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 4,
    name: "Maçã Reineta",
    img: "../src/assets/svg/productcard-reineta.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-9.png",
    topRight:   "../src/assets/png/productdecore-10.png",
    bottomLeft: "../src/assets/png/productdecore-11.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em  caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 5,
    name: "Maçã Fuji",
    img: "../src/assets/svg/productcard-fuji.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-1.png",
    topRight:   "../src/assets/png/productdecore-2.png",
    bottomLeft: "../src/assets/png/productdecore-3.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em  caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "Homogénea, alongada cilíndrica" },
      { label: "CALIBRE", value: "55 mm a 90 mm" },
      { label: "TEXTURA", value: "densa, firme e crocante" },
      { label: "COR", value: "amarela ou amarela-esverdeada, por vezes com laivos vermelhos" },
      { label: "SABOR", value: "predominantemente doce, com uma baixa acidez que proporciona um equilíbrio refrescante" },
      { label: "ACIDEZ", value: "3,8 e 3,9 meq/100ml" },
      { label: "ÁGUA", value: "84,3% a 86%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 6,
    name: "Maçã Starking",
    img: "../src/assets/svg/productcard-starking.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-12.png",
    topRight:   "../src/assets/png/productdecore-13.png",
    bottomLeft: "../src/assets/png/productdecore-14.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em  caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "alongada, tronco-cónica, costada, irregular" },
      { label: "CALIBRE", value: "55 mm a 90 mm" },
      { label: "TEXTURA", value: "polpa branca-creme, fina, consistente e crocante" },
      { label: "COR", value: "vermelho com estrias, sobre um fundo amarelado" },
      { label: "SABOR", value: "doce, aromático (com um toque de ananás) e levemente acidulado" },
      { label: "ACIDEZ", value: "2,6 a 3,4 meq/100ml" },
      { label: "ÁGUA", value: "80%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 7,
    name: "Maçã Granny Smith",
    img: "../src/assets/svg/productcard-granny.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-15.png",
    topRight:   "../src/assets/png/productdecore-16.png",
    bottomLeft: "../src/assets/png/productdecore-17.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em  caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "semi elevada, levemente tronco-cónica, regular" },
      { label: "CALIBRE", value: "65 mm a 90 mm" },
      { label: "TEXTURA", value: "firme e crocante" },
      { label: "COR", value: "fortemente ácido, com um toque refrescante e um travo menos doce" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "elevada acidez e sabor amargo" },
      { label: "ÁGUA", value: "83% a 86%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 8,
    name: "Maçã Bravo Esmolfe",
    img: "../src/assets/svg/productcard-apple.svg",
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 0ºC e 2ºC.",
      Embalamento: "em saco plástico/granel e acondicionado em  caixa de plástico ou de cartão."
    },
    characteristics: [
      { label: "FORMA", value: "oblongo-cónica" },
      { label: "CALIBRE", value: "60 mm a 80 mm" },
      { label: "TEXTURA", value: "polpa macia, fina e sucolenta" },
      { label: "COR", value: "esbranquiçada, pode apresentar manchas avermelhadas, e ser manchada e/ou raiada de carepa na fossa peduncular" },
      { label: "SABOR", value: "doce, muito pouco acidulada e perfumada" },
      { label: "ACIDEZ", value: "5,7 a 6,4 meq/100ml" },
      { label: "ÁGUA", value: "83%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 9,
    name: "Cereja",
    img: "../src/assets/svg/productcard-cereja.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-18.png",
    topRight:   "../src/assets/png/productdecore-19.png",
    bottomLeft: "../src/assets/png/productdecore-20.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de 2ºc a 4ºC",
      Embalamento: "cuvetes e em caixa de cartão ou plástico."
    },
    characteristics: [
      { label: "FORMA", value: "redonda ou ligeiramente oval  " },
      { label: "CALIBRE", value: "17 mm a +26 mm" },
      { label: "TEXTURA", value: "polpa firme, carnuda, suculenta, de textura suave" },
      { label: "COR", value: "vermelho intenso e brilhante" },
      { label: "SABOR", value: "doce a adocicado e levemente adstringente" },
      { label: "ACIDEZ", value: "1.2% acidez titulável" },
      { label: "ÁGUA", value: "82%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [8, 9, 10] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 10,
    name: "Castanha",
    cat: "longal;judia;martaínha",
    img: "../src/assets/svg/productcard-castanha.svg",
    decor: {
    topLeft:    "../src/assets/png/productdecore-21.png",
    topRight:   "../src/assets/png/productdecore-22.png",
    bottomLeft: "../src/assets/png/productdecore-23.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [4, 5, 6, 7] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 11,
    name: "Morango",
    img: "../src/assets/svg/productcard-cereja.svg",
    cat: "DIAMANTE; SAN ANDREAS; ALBION; TENTAÇÃO; VENTANA",
    decor: {
    topLeft:    "../src/assets/png/productdecore-24.png",
    topRight:   "../src/assets/png/productdecore-25.png",
    bottomLeft: "../src/assets/png/productdecore-26.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [4, 5, 6, 7] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 12,
    name: "Mirtilo",
    img: "../src/assets/svg/productcard-mirtilo.svg",
    cat: "Northern Highbush;Southern Highbush;Rabbiteye",
    decor: {
    topLeft:    "../src/assets/png/productdecore-27.png",
    topRight:   "../src/assets/png/productdecore-28.png",
    bottomLeft: "../src/assets/png/productdecore-29.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [4, 5, 6] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 13,
    name: "Kiwi",
    img: "../src/assets/svg/productcard-kiwi.svg",
    cat: "Hayward;Abott;Allison;Monty.",
    decor: {
    topLeft:    "../src/assets/png/productdecore-30.png",
    topRight:   "../src/assets/png/productdecore-31.png",
    bottomLeft: "../src/assets/png/productdecore-32.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [7, 8, 9] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 14,
    name: "Framboesa",
    img: "../src/assets/png/productcard-framebosa.png",
    cat: "kweli;imara, adelita;kwanza;maravilla",
    decor: {
    topLeft:    "../src/assets/png/productdecore-33.png",
    topRight:   "../src/assets/png/productdecore-34.png",
    bottomLeft: "../src/assets/png/productdecore-35.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [7, 8, 9] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 15,
    name: "Uva",
    img: "../src/assets/svg/productcard-uva.svg",
    cat: "Cardinal;Cardinal;Black Pearl.",
    decor: {
    topLeft:    "../src/assets/png/productdecore-36.png",
    topRight:   "../src/assets/png/productdecore-37.png",
    bottomLeft: "../src/assets/png/productdecore-38.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [7, 8, 9] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 16,
    name: "Laranja",
    img: "../src/assets/svg/productcard-laranja.svg",
    cat: "DO ALGARVE;NAVEL SANGUE;LANE LATE",
    decor: {
    topLeft:    "../src/assets/png/productdecore-39.png",
    topRight:   "../src/assets/png/productdecore-40.png",
    bottomLeft: "../src/assets/png/productdecore-41.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [7, 8, 9] },              
      disponibilidade: { active: [] }       
    }
  },
  {
    id: 17,
    name: "LIMÃO",
    img: "../src/assets/svg/productcard-limio.svg",
    cat: "SICILIANO;TAITI;GALEGO E CRAVO OU CAIPIRA",
    decor: {
    topLeft:    "../src/assets/png/productdecore-42.png",
    topRight:   "../src/assets/png/productdecore-43.png",
    bottomLeft: "../src/assets/png/productdecore-44.png"
  },
    storage: {
      Armazenamento: "Em Atmosfera Controlada ou em Frio Normal.",
      Transporte: "veículos frigoríficos à temperatura de xºc a xº c.",
      Embalamento: "saco ou caixa de acordo com as especificações."
    },
    characteristics: [
      { label: "FORMA", value: "irregular" },
      { label: "CALIBRE", value: "N/A" },
      { label: "TEXTURA", value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      { label: "COR", value: "avermelhada" },
      { label: "SABOR", value: "doce" },
      { label: "ACIDEZ", value: "x a x g/l" },
      { label: "ÁGUA", value: "xx% a xx%" }
    ],
    calendar: {
      months: ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],
      plantacao: { naoAplica: true },
      colheita: { active: [7, 8, 9] },              
      disponibilidade: { active: [] }       
    }
  },
];

export const markets = [
  {
    id: 1,
    title: "MARL ( Mercado Abastecedor de Lisboa )",
    address: "Lugar do, Quintanilho, 2660-421 São Julião do Tojal",
    image: CardImg1,
  },
  {
    id: 2,
    title: "MAP ( Mercado Abastecedor do Porto )",
    address: "R. Chaves de Oliveira 181 a 193, Porto",
    image: CardImg2,
  },
];

export const sobre = [
  {
    id: 1,
    name: "João Mendes",
    role: "CEO",
    image: sobreImg1,
  },
  {
    id: 2,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg2,
  },
  {
    id: 3,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg3,
  },
  {
    id: 4,
   name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg4,
  },
  {
    id: 5,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg5,
  },
  {
    id: 6,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg6,
  },
  {
    id: 7,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg7,
  },
  {
    id: 8,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg8,
  },
  {
    id: 9,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg9,
  },
  {
    id: 10,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg10,
  },
  {
    id: 11,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg11,
  },
  {
    id: 12,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg12,
  },

  {
    id: 13,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg13,
  },
  {
    id: 14,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg14,
  },
  {
    id: 15,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg15,
  },
  {
    id: 16,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg16,
  },
    {
    id: 17,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg17,
  },
    {
    id: 18,
   name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg18,
  },
    {
    id: 19,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg19,
  },
    {
    id: 20,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg20,
  },
    {
    id: 21,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg21,
  },
    {
    id: 22,
   name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg22,
  },
    {
    id: 23,
   name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg23,
  },
    {
    id: 24,
    name: "xxxxxx xxxxxxx",
    role: "xxxxxx",
    image: sobreImg24,
  },
];
export const InfraData = [
  {
    "id": 1,
    "title": "CALIBRAGEM",
    "description": "Contamos com diversos colaboradores, cujo objetivo é o de calibrar e normalizar todos os produtos."
  },
  {
    "id": 2,
    "title": "ATMOSFERA CONTROLADA",
    "description": "Dispomos de cerca de 6.000 toneladas de capacidade em atmosfera controlada e 4.000 toneladas em frio normal."
  },
  {
    "id": 3,
    "title": "LOGÍSTICA",
    "description": "Contamos com uma frota própria de camiões para responder às necessidades de fornecimento para os nossos supermercados."
  },
  {
    "id": 4,
    "title": "EMBALAMENTO",
    "description": "4 linhas de embalamento dedicadas à preparação cuidada de todos os produtos."
  }
];
