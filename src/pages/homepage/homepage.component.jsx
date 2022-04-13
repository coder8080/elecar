import { useState, useEffect, useRef } from "react";
import PorscheMissionE from "../../assets/home.png";
import FutureTechnology from "../../assets/about.png";
import Features from "../../assets/features.png";
import Tesla from "../../assets/logo3.png";
import Audi from "../../assets/logo2.png";
import Porsche from "../../assets/logo1.png";
import Map from "../../assets/map.svg";
import OfferBackground from "../../assets/offer-bg.png";
import Offer from "../../assets/offer.png";
import CARS_DATA from "./cars-data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import mixitup from "mixitup";
import "swiper/css";
import "swiper/css/pagination";
import ScrollReveal from "scrollreveal";
import "./homepage.styles.scss";

const HomePage = () => {
  const [brand, setBrand] = useState("all");

  const scrollUpRef = useRef();

  useEffect(() => {
    mixitup(".cards", { animation: { duration: 300 } });

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        scrollUpRef.current.classList.add("active");
      } else {
        scrollUpRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", onScroll);

    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: false,
    });
    sr.reveal(".home .section-title");
    sr.reveal(".home .subtitle", { delay: 500 });
    sr.reveal(".home .elec", { delay: 600 });
    sr.reveal(".home img", { delay: 800 });
    sr.reveal(".home .car-data", {
      delay: 900,
      interval: 200,
      origin: "bottom",
    });
    sr.reveal(".home-button", { delay: 1000, origin: "bottom" });

    return () => sr.destroy();
  }, []);
  return (
    <div className="homepage">
      <section className="home section" id="home">
        <div className="shape shape-big"></div>
        <div className="home-container container grid">
          <div className="data">
            <h1 className="section-title">Choose the best car</h1>
            <h2 className="subtitle">Porsche Mission E</h2>
            <h3 className="elec">
              <i className="ri-flashlight-fill" />
              Electric car
            </h3>
          </div>
          <img src={PorscheMissionE} alt="porsche mission e" />

          <div className="car">
            <div className="car-data">
              <div className="icon">
                <i className="ri-temp-cold-line" />
              </div>
              <h1 className="number">24°</h1>
              <h2 className="name">temperature</h2>
            </div>

            <div className="car-data">
              <div className="icon">
                <i className="ri-pin-distance-line" />
              </div>
              <h1 className="number">873</h1>
              <h2 className="name">mileage</h2>
            </div>

            <div className="car-data">
              <div className="icon">
                <i className="ri-battery-charge-line" />
              </div>
              <h1 className="number">94%</h1>
              <h2 className="name">battery</h2>
            </div>
          </div>

          <a href="#popular" className="home-button">
            START
          </a>
        </div>
      </section>
      <section className="about section" id="about">
        <div className="about-container container grid">
          <div className="group">
            <img src={FutureTechnology} alt="electric car interier" />
            <div className="about-card">
              <h3 className="card-title">2.500+</h3>
              <p className="description">
                Supercharges placed alogn popular routes
              </p>
            </div>
          </div>

          <div className="data">
            <h2 className="section-title">
              Machines with <br /> future technology
            </h2>

            <p className="description">
              See the future with hi-performance electric cars produced by
              renowed brands. They feature futuristic builds and designs with
              new and innovative platforms that last for a logn time.
            </p>

            <a href="#features" className="button">
              Know more
            </a>
          </div>
        </div>
      </section>
      <section className="popular section" id="popular">
        <div className="popular-container container">
          <h2 className="section-title">
            Choose your electric car <br />
            of the Porcshe brand
          </h2>

          <div>
            <Swiper
              slidesPerView={3}
              watchSlidesProgress={true}
              spaceBetween={24}
              grabCursor={true}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  spaceBetween: 48,
                },
              }}
              loop={true}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {CARS_DATA.cars.map(
                ({ title, model, imageUrl, start, speed, price }, i) => (
                  <SwiperSlide key={i}>
                    <div className="shape shape-smaller"></div>
                    <h1 className="popular-title">{title}</h1>
                    <h3 className="popular-subtitle">{model}</h3>
                    <img src={imageUrl} alt="porcshe car" />
                    <div className="popular-data">
                      <div className="group">
                        <i className="ri-dashboard-3-line"></i>
                        {start}
                      </div>
                      <div className="group">
                        <i className="ri-funds-line"></i>
                        {speed}
                      </div>
                      <div className="group">
                        <i className="ri-charging-pile-2-line"></i>Electric
                      </div>
                    </div>

                    <h3 className="popular-price">{price}</h3>

                    <button className="button about-button">
                      <i className="ri-shopping-bag-2-line"></i>
                    </button>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="section features" id="features">
        <h2 className="section-title">More features</h2>
        <div className="features-container container">
          <div className="features-group">
            <img src={Features} alt="porsche taycan" />

            <div className="feature-card feature-card-1">
              <h3 className="feature-card-title">800v</h3>
              <p className="feature-card-description">
                Turbo <br /> Charging
              </p>
            </div>

            <div className="feature-card feature-card-2">
              <h3 className="feature-card-title">350</h3>
              <p className="feature-card-description">
                Km <br /> Range
              </p>
            </div>

            <div className="feature-card feature-card-3">
              <h3 className="feature-card-title">480</h3>
              <p className="feature-card-description">
                Km <br /> Travel
              </p>
            </div>
          </div>
        </div>

        <img src={Map} alt="map" className="map" />
      </section>
      <section className="section featured" id="featured">
        <h2 className="section-title">Featured Luxury Cars</h2>
        <div className="container featured-container">
          <div className="brands-group">
            <div
              className={`brand ${brand === "all" ? "active" : ""}`}
              data-filter="all"
              onClick={() => setBrand("all")}
            >
              All
            </div>
            <div
              className={`brand ${brand === "tesla" ? "active" : ""}`}
              data-filter=".tesla"
              onClick={() => setBrand("tesla")}
            >
              <img src={Tesla} alt="tesla" />
            </div>
            <div
              className={`brand ${brand === "audi" ? "active" : ""}`}
              data-filter=".audi"
              onClick={() => setBrand("audi")}
            >
              <img src={Audi} alt="audi" />
            </div>
            <div
              className={`brand ${brand === "porsche" ? "active" : ""}`}
              data-filter=".porsche"
              onClick={() => setBrand("porsche")}
            >
              <img src={Porsche} alt="porsche" />
            </div>
          </div>
          <div className="cards grid">
            {CARS_DATA.featured_cars.map(
              ({ brand, model, imageUrl, price }, i) => (
                <div className={`card mix ${brand.toLowerCase()}`} key={i}>
                  <div className="content">
                    <div className="shape shape-smaller"></div>
                    <h2 className="card-title">{brand}</h2>
                    <p className="card-description">{model}</p>
                    <img src={imageUrl} alt={model} />
                    <p className="card-price">{price}</p>
                    <button className="button card-button">
                      <i className="ri-shopping-bag-2-line"></i>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="section offer" id="offer">
        <img src={OfferBackground} alt="background" className="background" />
        <div className="offer-container container grid">
          <div className="offer-data">
            <h2 className="section-title">
              Do you want to receive <b> special offers?</b>
            </h2>
            <p className="description">
              Be the first to receive all the information about out products and
              new cars by email by subscribing to our mailing list.
            </p>
            <button className="button">Subscribe now</button>
          </div>
          <img src={Offer} alt="car" className="offer-car" />
        </div>
      </section>
      <section className="section logos" id="logos">
        <div className="logos-container container grid">
          {CARS_DATA.logos.map((Logo, i) => (
            <div key={i} className="logo">
              <img src={Logo} alt="logo" />
            </div>
          ))}
        </div>
      </section>
      <footer className="section footer" id="footer">
        <div className="shape shape-medium"></div>
        <div className="shape shape-small"></div>
        <div className="container grid footer-container">
          <div className="content">
            <a href="#home" className="logo">
              <i className="ri-steering-line"></i> Elecar
            </a>
            <p className="footer-description">
              We offer the best electric cars of the most recognized brands in
              the world
            </p>
          </div>
          <div className="content">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#popular" className="footer-link">
                  Cars
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  History
                </a>
              </li>
              <li>
                <a href="#featured" className="footer-link">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="content">
            <h3 className="footer-title">Information</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link">
                  Reuest a quote
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Find a dealer
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className="content">
            <h3 className="footer-title">Follow us</h3>
            <ul className="footer-social-networks">
              <i className="footer-social-link">
                <i className="ri-facebook-fill"></i>
              </i>
              <i className="footer-social-link">
                <i className="ri-instagram-line"></i>
              </i>
              <i href="#" className="footer-social-link">
                <i className="ri-twitter-fill"></i>
              </i>
            </ul>
          </div>
        </div>
        <span className="footer-copyright">
          <i className="ri-copyright-line"></i> coder8080. All rights reserved
        </span>
      </footer>
      <a href="#home" className="scroll-up" ref={scrollUpRef}>
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
};

export default HomePage;
