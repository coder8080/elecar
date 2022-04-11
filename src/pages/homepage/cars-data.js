import Popular1 from "../../assets/popular1.png";
import Popular2 from "../../assets/popular2.png";
import Popular3 from "../../assets/popular3.png";
import Popular4 from "../../assets/popular4.png";
import Popular5 from "../../assets/popular5.png";
import TeslaX from "../../assets/featured1.png";
import Tesla3 from "../../assets/featured2.png";
import AudiEtron from "../../assets/featured3.png";
import PorscheBoxster from "../../assets/featured4.png";
import PorschePanamera from "../../assets/featured5.png";

import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo4.png";
import Logo5 from "../../assets/logo5.png";
import Logo6 from "../../assets/logo6.png";

const CARS_DATA = {
  cars: [
    {
      title: "Porsche",
      model: "Turbo S",
      imageUrl: Popular1,
      start: "3.7 sec",
      speed: "356 Km/Hr",
      price: "$175,900",
    },

    {
      title: "Porsche",
      model: "Taycan",
      imageUrl: Popular2,
      start: "3.7 sec",
      speed: "356 Km/Hr",
      price: "$114,900",
    },

    {
      title: "Porsche",
      model: "Turbo S Cross",
      imageUrl: Popular3,
      start: "3.7 sec",
      speed: "356 Km/Hr",
      price: "$150,900",
    },

    {
      title: "Porsche",
      model: "Boxster 718",
      imageUrl: Popular4,
      start: "3.7 sec",
      speed: "356 Km/Hr",
      price: "$125,900",
    },

    {
      title: "Porsche",
      model: "Cayman",
      imageUrl: Popular5,
      start: "3.7 sec",
      speed: "356 Km/Hr",
      price: "$128,900",
    },
  ],
  featured_cars: [
    {
      id: 1,
      brand: "Tesla",
      model: "Model X",
      price: "$98,900",
      imageUrl: TeslaX,
    },
    {
      id: 2,
      brand: "Tesla",
      model: "Model 3",
      price: "$45,900",
      imageUrl: Tesla3,
    },
    {
      id: 3,
      brand: "Audi",
      model: "E-tron",
      price: "$175,900",
      imageUrl: AudiEtron,
    },
    {
      id: 4,
      brand: "Porsche",
      model: "Boxster",
      price: "$126,900",
      imageUrl: PorscheBoxster,
    },
    {
      id: 5,
      brand: "Porsche",
      model: "Panamera",
      price: "$126,900",
      imageUrl: PorschePanamera,
    },
  ],
  logos: [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6],
};

export default CARS_DATA;
