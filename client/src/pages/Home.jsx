import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { InfiniteMovingCards } from "../components/Infinite-moving-card";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfiniteMovingCards />
      <Footer />
    </div>
  );
};
