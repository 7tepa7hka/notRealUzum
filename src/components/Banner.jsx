import { useState, useEffect } from "react";
import "./Banner.css";

const slides = [
  {
    title: "Скидки до -40%",
    text: "На всё что попадётся под руку 🔥",
    emoji: "🎉",
    gradient: "linear-gradient(135deg, #6b21e8, #8b3ff0)",
  },
  {
    title: "Новинки недели",
    text: "Носки, кружки и другие мемы",
    emoji: "🧦",
    gradient: "linear-gradient(135deg, #8b3ff0, #b565f5)",
  },
  {
    title: "Бесплатная доставка",
    text: "Через 100 лет, но зато бесплатно",
    emoji: "🚀",
    gradient: "linear-gradient(135deg, #4c1d95, #6b21e8)",
  },
  {
    title: "Чёрная пятница каждый день",
    text: "Ну почти. Иногда. Может быть",
    emoji: "🛍️",
    gradient: "linear-gradient(135deg, #1e1e28, #4c1d95)",
  },
  {
    title: "Электроника без переплат",
    text: "Ноутбуки, мониторы и SSD по адекватным ценам",
    emoji: "💻",
    gradient: "linear-gradient(135deg, #6b21e8, #4c1d95)",
  },
  {
    title: "Подарки для друзей-программистов",
    text: "Кружки, футболки и мемные наклейки",
    emoji: "🎁",
    gradient: "linear-gradient(135deg, #8b3ff0, #6b21e8)",
  },
  {
    title: "Ювелирка со скидкой",
    text: "Кольца, браслеты и другие блестяшки",
    emoji: "💎",
    gradient: "linear-gradient(135deg, #b565f5, #6b21e8)",
  },
];

function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="banner">
      <button className="banner__arrow banner__arrow--left" onClick={prev}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path
            d="M9 1L2 8L9 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className="banner__slide"
        style={{ background: slides[index].gradient }}
      >
        <div className="banner__content">
          <h2 className="banner__title">{slides[index].title}</h2>
          <p className="banner__text">{slides[index].text}</p>
        </div>
        <div className="banner__emoji">{slides[index].emoji}</div>
      </div>

      <button className="banner__arrow banner__arrow--right" onClick={next}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path
            d="M1 1L8 8L1 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="banner__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={
              i === index ? "banner__dot banner__dot--active" : "banner__dot"
            }
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
