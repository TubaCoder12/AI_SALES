import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Testimonial = () => {
  useEffect(() => {
    const splide = new Splide("#testimonials", {
      direction: "ttb", // vertical
      height: "600px", // container height
      wheel: true, // mouse wheel se scroll
      perPage: 1, // ek slide ek waqt me
      speed: 500, // smooth transition (ms)

      pagination: true,
    });

    splide.mount();

    return () => splide.destroy();
  }, []);

  // Dummy 18 cards
  const cards = Array.from({ length: 18 }, (_, i) => `Card ${i + 1}`);

  // group cards into chunks of 9 (3x3 grid)
  const chunked = [];
  for (let i = 0; i < cards.length; i += 9) {
    chunked.push(cards.slice(i, i + 9));
  }

  return (
    <div id="testimonials" className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {chunked.map((group, index) => (
            <li key={index} className="splide__slide">
              <div className="grid grid-cols-3 gap-4">
                {group.map((card, i) => (
                  <div
                    key={i}
                    className="bg-gray-300 p-6 rounded text-center font-medium shadow"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
