"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Rocket } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      img: "/screen1.png",
      title: "Innowacyjna aplikacja mobilna",
      description:
        "Fashion Buddy to aplikacja mobilna, która łączy technologię sztucznej inteligencji z modą, aby pomóc Ci zarządzać swoją garderobą i tworzyć stylizacje dopasowane do każdej okazji.",
    },
    {
      img: "/screen3.png",
      title: "Wirtualna Garderoba",
      description:
        "Skanuj i digitalizuj swoje ubrania, tworząc kompletną cyfrową garderobę w jednym miejscu. Przeglądaj swoje elementy, porządkuj je i zarządzaj nimi łatwiej niż kiedykolwiek.",
    },
    {
      img: "/screen4.png",
      title: "AI Stylista",
      description:
        "Inteligentne sugestie stylizacji dopasowane do pogody i Twoich preferencji. Otrzymuj propozycje zestawów, które idealnie pasują do okazji i twojego indywidualnego stylu.",
    },
    {
      img: "/screen6.png",
      title: "Planowanie Prania",
      description:
        "Inteligentny system przypomina o praniu ubrań i pomaga zaplanować pranie, aby ulubione elementy były zawsze gotowe",
    },
    {
      img: "/screen2.png",
      title: "Inspiruj się Inymi",
      description:
        "Przeglądaj ubrania i stylizacje innych użytkowników, aby czerpać pomysły i odkrywać nowe inspiracje.",
    },
    {
      img: "/screen5.png",
      title: "Pożyczanie i Wymiana",
      description:
        "Wypożyczaj ubrania od znajomych lub wymieniaj się garderobą w społeczności, oszczędzając i działając ekologicznie",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-light text-gray-900 mb-6">
              Co to jest{" "}
              <span className="font-normal text-[#264653]">Fashion</span>
              <span className="ml-1 text-[#264653] font-extrabold">Buddy</span>?
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Twój osobisty asystent mody, który pomaga tworzyć idealne
              stylizacje i organizować garderobę
            </p>
          </div>

          {/* Key Features - Carousel for Mobile, Star for Desktop */}

          {/* Mobile Carousel */}
          <div className=" relative mb-12 max-w-[500px] mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex items-stretch transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 px-4 flex items-stretch"
                  >
                    <div className="bg-white rounded-xl border border-[#2a9d8f]  p-8 ">
                      <Image
                        src={feature.img}
                        alt="Feature Icon"
                        width={200}
                        height={600}
                        className="mx-auto mb-4 rounded-[33px] shadow-md"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-[#264653] w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className=" bg-[#2a9d8f]  rounded-2xl shadow-xl p-8 sm:p-12 text-[white] text-center">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Rocket />
              <h2 className="text-3xl font-bold ">Nasza Misja</h2>
            </div>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Fashion Buddy powstał z myślą o osobach, które chcą wyglądać
              stylowo każdego dnia, ale nie mają czasu ani pewności w dobieraniu
              strojów. Łączymy technologię z modą, aby uczynić codzienne decyzje
              związane z ubiorem prostymi i przyjemnymi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
