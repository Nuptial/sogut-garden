import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GlassButton from "./GlassButton";

const slides = [
  {
    id: 1,
    title: "KIR DÜĞÜNÜ",
    description:
      "Hayallerinizdeki düğünü, doğanın büyüleyici atmosferiyle birleştirerek unutulmaz kılın! Söğüt Garden, zarif dekorasyonu, yemyeşil doğası ve kusursuz hizmet anlayışıyla hayatınızın en özel anlarına ev sahipliği yapıyor. ",
    buttonText: "İletişim",
    buttonLink: "/contact",
    image: "/images/slider/slider1.jpg",
  },
  {
    id: 2,
    title: "DAVETLER",
    description:
      "Gün batımında büyüleyici bir kokteyl, yıldızların altında sıcak bir kutlama veya yemyeşil doğanın içinde samimi bir buluşma... Hayalinizdeki daveti gerçeğe dönüştürmek için buradayız. Siz hayal edin, biz kusursuz hale getirelim!",
    buttonText: "İletişim",
    buttonLink: "/contact",
    image: "/images/slider/slider2.jpg",
  },
  {
    id: 3,
    title: "ORGANİZASYON",
    description:
      "Hayalinizdeki organizasyonu, doğanın eşsiz güzelliği ve zarif detaylarla birleştirerek unutulmaz kılın! Söğüt Garden, nişandan kurumsal etkinliklere ve doğum günlerine kadar her organizasyon için mükemmel bir atmosfer sunuyor.",
    buttonText: "İletişim",
    buttonLink: "/contact",
    image: "/images/slider/slider3.jpg",
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="slide-content">
            <div className="slide-text">
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>
                {slide.title}
              </div>
              <div style={{ fontSize: "24px", marginBottom: "48px" }}>
                {slide.description}
              </div>
              <GlassButton text={slide.buttonText} href={slide.buttonLink} />
            </div>
          </div>
          <div className="slide-image">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slide-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 10%;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }

        .slide-text {
          color: white;
          max-width: 600px;
        }

        .slide-text h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .slide-text p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .slider-controls {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 3;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .slider-dot.active {
          background-color: white;
        }

        .thumbnail-gallery {
          position: absolute;
          bottom: 0;
          right: 0;
          display: flex;
          gap: 16px;
          z-index: 3;
          padding: 16px;
          align-items: flex-end;
        }

        .thumbnail {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .thumbnail.active {
          border: 6px solid white;
        }

        .thumbnail:hover {
          transform: scale(1.02);
        }

        @media (max-width: 1400px) {
          .thumbnail img {
            width: 250px !important;
            height: 300px !important;
          }

          .thumbnail.active img {
            width: 280px !important;
            height: 330px !important;
          }
        }

        @media (max-width: 1200px) {
          .thumbnail img {
            width: 200px !important;
            height: 250px !important;
          }

          .thumbnail.active img {
            width: 230px !important;
            height: 280px !important;
          }
        }

        @media (max-width: 992px) {
          .thumbnail img {
            width: 180px !important;
            height: 220px !important;
          }

          .thumbnail.active img {
            width: 200px !important;
            height: 240px !important;
          }
        }

        @media (max-width: 768px) {
          .slide-text h1 {
            font-size: 2.5rem;
          }

          .slide-text p {
            font-size: 1rem;
          }

          .slider-container {
            height: 100vh;
          }

          .thumbnail-gallery {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .slide-text h1 {
            font-size: 2rem;
          }

          .slide-content {
            padding: 0 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSlider;
