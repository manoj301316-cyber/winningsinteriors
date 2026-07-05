import { useRef } from "react";

export default function Carousel({ title, items }) {
  const trackRef = useRef(null);

  function slide(direction) {
    const carousel = trackRef.current;

    if (!carousel) return;

    const card = carousel.querySelector(".carousel-card");

    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

    carousel.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>{title}</h2>
      </div>

      <div className="carousel-wrapper">

        <button
          className="carousel-arrow left"
          aria-label="Previous images"
          onClick={() => slide(-1)}
        >
          &#8249;
        </button>

        <div className="carousel" ref={trackRef}>
          {items.map((item) => (
            <div
              className="carousel-card"
              key={item.caption}
            >
              <img
                src={item.img}
                alt={item.caption}
                className="card-img"
                loading="lazy"
              />

              <p>{item.caption}</p>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow right"
          aria-label="Next images"
          onClick={() => slide(1)}
        >
          &#8250;
        </button>

      </div>
    </section>
  );
}