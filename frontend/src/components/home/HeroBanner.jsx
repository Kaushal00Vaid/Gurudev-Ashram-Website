import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAshram } from "../../context/AshramContext";

function HeroBanner() {
  const { announcements } = useAshram();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Shri Gurudev Ashram",
      subtitle: "A Sanctuary of Spirituality, Service, and Social Welfare",
      image: "/images/hero1.jpg",
      cta: "Learn More",
      ctaLink: "/about",
    },
    {
      id: 2,
      title: "Serving Humanity Through Compassion",
      subtitle: "Orphan Care • Elder Care • Cow Protection • Tribal Welfare",
      image: "/images/hero2.jpg",
      cta: "Our Activities",
      ctaLink: "/about#activities",
    },
    {
      id: 3,
      title: "Join Us in Making a Difference",
      subtitle: "Your Support Transforms Lives",
      image: "/images/hero3.jpg",
      cta: "Donate Now",
      ctaLink: "/donate",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Announcement Bar */}
      <div className="bg-rose-700 text-white py-3 overflow-hidden shadow-lg">
        <div className="flex animate-scroll whitespace-nowrap">
          {announcements.map((announcement, index) => (
            <span
              key={index}
              className="px-12 text-sm font-semibold tracking-wide"
            >
              {announcement}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Slides */}
      <div className="relative w-full h-96 md:h-screen overflow-hidden bg-amber-50">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-5 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-12 font-light drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  <Link
                    to={slide.ctaLink}
                    className="px-8 py-3 bg-rose-600 text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    to="/donate"
                    className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Donate Now
                  </Link>
                  <Link
                    to="/shop"
                    className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300"
                  >
                    Visit Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-rose-600 w-10"
                  : "bg-white/40 w-3 hover:bg-white/60"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-rose-600 text-white border-3 border-white flex items-center justify-center text-2xl hover:shadow-xl hover:scale-110 transition-all duration-300"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
            )
          }
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-rose-600 text-white border-3 border-white flex items-center justify-center text-2xl hover:shadow-xl hover:scale-110 transition-all duration-300"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          }
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
