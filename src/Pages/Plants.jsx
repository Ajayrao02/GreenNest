import React, { useEffect } from "react";
import CategoryCard from "../Components/CategoryCard";
import Filters from "../Components/Filters";
import "./CSS/Plants.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { plantData } from "../data/products";

const Plants = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 30,
      easing: 'ease-out-cubic',
    });
  }, []);

  

  const Products = [
    {
      id: 1,
      options: [
        { id: "indoor", label: "Indoor Plants", count: 10 },
        { id: "outdoor", label: "Outdoor Plants", count: 10 },
        { id: "water", label: "Water Plants", count: 10 },
        { id: "air", label: "Air Plants", count: 10 },
        { id: "bonsai", label: "Bonsai Plants", count: 10 },
      ],
      name: "Plant Categories",
    },
    {
      id: 2,
      options: [
        { id: "in-stock", label: "In Stock", count: 10 },
        { id: "out-of-stock", label: "Out of Stock", count: 10 },
      ],
      name: "Availability",
    },
    {
      id: 3,
      options: [
        { id: "small", label: "Small", count: "up to 10cm" },
        { id: "medium", label: "Medium", count: "10cm to 50cm" },
        { id: "large", label: "Large", count: "50cm and above" },
      ],
      name: "Plant Size",
    },
    {
      id: 4,
      options: [
        { id: "low", label: "Low Light", count: 10 },
        { id: "medium", label: "Medium Light", count: 40 },
        { id: "high", label: "High Light", count: 55 },
      ],
      name: "Light Requirements",
    },
    {
      id: 5,
      options: [
        { id: "yes", label: "Yes", count: 10 },
        { id: "no", label: "No", count: 10 },
      ],
      name: "Pet Friendly",
    },
  ];
  return (
    <div className="plants-page">
      <div className="filters-section" data-aos="fade-right" data-aos-delay="80">
        <Filters Products={Products} />
      </div>
      <div className="plants-section" data-aos="fade-up" data-aos-delay="120">
        {plantData.map((plant, index) => (
          <div
            key={plant.id}
            className="plant-card-item"
            data-aos="zoom-in-up"
            data-aos-delay={index * 80}
          >
            <CategoryCard data={plant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
