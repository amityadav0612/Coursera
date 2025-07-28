import React, { useState, useRef, useEffect } from "react";

const cardData = [
  {
    id: 1,
    title: "Fullstack",
    image: "/images/generativeAi.png",
    description: "Generative Ai",
  },
  {
    id: 2,
    title: "Web development",
    image: "/images/fullstack.png",
    description: "Web development, projects ",
  },
  {
    id: 3,
    title: "Devops",
    image: "/images/devops.png",
    description: "complete devops bootcamp",
  },
  {
    id: 4,
    title: "Web3",
    image: "/images/web3.png",
    description: "complete solona development ",
  },
];

export const InfiniteMovingCards = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const duplicatedCardData = [...cardData]; //

  const animationDuration = `${duplicatedCardData.length * 5}s`; // Example: 5 seconds per card

  return (
    <div
      className="relative w-full overflow-hidden py-8 px-25"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={carouselRef}
        className={`flex space-x-4 pr-4 pl-4 min-w-min gap-5
          ${isHovered ? "animate-paused" : "animate-scroll-infinite"}
        `}
        style={{
          "--animation-duration": 5,
        }}
      >
        {duplicatedCardData.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex-shrink-0 w-64 h-80 bg-black rounded-lg shadow-lg
                       flex flex-col items-center justify-center text-white
                       p-4 border border-gray-700
                       transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
            <p className="text-sm text-gray-400 text-center">
              {card.description}
            </p>
            {/* Add more specific content based on your image (e.g., list items for cohort) */}
            {card.title ===
            (
              <ul className="text-sm mt-2 text-left w-full px-4">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
