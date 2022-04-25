import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";

export default function index() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
