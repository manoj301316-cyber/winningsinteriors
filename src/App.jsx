import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import BudgetSection from "./components/BudgetSection";
import Centres from "./components/Centres";
import EstimateForm from "./components/EstimateForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [property, setProperty] = useState("");
  const [purpose, setPurpose] = useState("");

  // Set page title and scroll to top on first load
  useEffect(() => {
    document.title = "Winnings Interior";
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (!navbar) return;

      navbar.style.boxShadow =
        window.scrollY > 10
          ? "0 6px 24px rgba(0,0,0,0.12)"
          : "0 2px 12px rgba(0,0,0,0.08)";
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".feature-card, .service-item, .carousel-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";

      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <WhyUs />

      <Services />

      <Portfolio />

      <BudgetSection
        onEstimate={(selectedProperty, selectedPurpose) => {
          setProperty(selectedProperty);
          setPurpose(selectedPurpose);
        }}
      />

      <Centres />

      <EstimateForm
        property={property}
        purpose={purpose}
        setProperty={setProperty}
        setPurpose={setPurpose}
      />

      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
}