import React, { useEffect } from 'react'
import './CSS/Seeds.css'
import CategoryCard from '../Components/CategoryCard'
import Filters from '../Components/Filters'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { seedsData } from '../data/products'

/*
    {
        id: 1,
        text: "Sunflower Seeds",
        imageUrl: "sunflower-seeds.jpg",
        price: "₹99",
    },
    {
        id: 2,
        text: "Tomato Seeds",
        imageUrl: "tomato-seeds.jpg",
        price: "₹79",
    },
    {
        id: 3,
        text: "Basil Seeds",
        imageUrl: "basil-seeds.jpg",
             imageUrl: "/images/snake-plant.jpg",
    },
    {
        id: 4,
        text: "Carrot Seeds",
             imageUrl: "/images/monstera.jpg",
        price: "₹69",
    },
    {
                imageUrl: "/images/snake-plant.jpg",
             imageUrl: "/images/basil.jpg",
        imageUrl: "lettuce-seeds.jpg",
        price: "₹79",
    },
    {
                imageUrl: "/images/monstera.jpg",
        text: "Pepper Seeds",
        imageUrl: "pepper-seeds.jpg",
        price: "₹109",
    },
             imageUrl: "/images/peace-lily.jpg",
                imageUrl: "/images/pothos.jpg",
                price: "₹89",
        imageUrl: "cucumber-seeds.jpg",
        price: "₹69",
             imageUrl: "/images/rubber-plant.jpg",
                text: "Carrot Seeds",
                imageUrl: "/images/peace-lily.jpg",
                price: "₹69",
              },
              {
                id: 5,
                text: "Lettuce Seeds",
                imageUrl: "/images/rubber-plant.jpg",
                price: "₹79",
              },
              {
                id: 6,
                text: "Pepper Seeds",
                imageUrl: "/images/philodendron.jpg",
                price: "₹109",
              },
              {
                id: 7,
                text: "Cucumber Seeds",
                imageUrl: "/images/aloe-vera.jpg",
                price: "₹69",
              },
              {
                id: 8,
                text: "Spinach Seeds",
                imageUrl: "/images/dracaena.jpg",
                price: "₹79",
              },
              {
                id: 9,
                text: "Radish Seeds",
                imageUrl: "/images/fiddle-leaf-fig.jpg",
                price: "₹59",
              },
              {
                id: 10,
                text: "Pumpkin Seeds",
                imageUrl: "/images/pothos-2.jpg",
                price: "₹89",
              },
              {
                id: 11,
                text: "Zucchini Seeds",
                imageUrl: "/images/rubber-plant-2.jpg",
                price: "₹99",
              },
              {
                id: 12,
                text: "Watermelon Seeds",
                imageUrl: "/images/zz-plant.jpg",
                price: "₹89",
              },
              {
                id: 13,
                text: "Strawberry Seeds",
                imageUrl: "/images/monstera.jpg",
                price: "₹129",
              },
              {
                id: 14,
                text: "Blueberry Seeds",
                imageUrl: "/images/snake-plant.jpg",
                price: "₹149",
              },
*/
//             {
//                 id: 4,
//                 label: "Cucumber Seeds",
//                 count: 25,
//             },
//             {
//                 id: 5,
//                 label: "Watermelon Seeds",
//                 count: 30,
//             }
//         ],
//         name: "Seed Types",
//     },
//     {
//         id: 2,
//         name: "Price Range",
//         options: [
//             {
//                 id: 1,
//                 label: "Under $5",
//                 count: 10,
//             },
//             {
//                 id: 2,
//                 label: "$5 - $10",
//                 count: 15,
//             },
//             {
//                 id: 3,
//                 label: "$10 - $20",
//                 count: 20,
//             },
//             {
//                 id: 4,
//                 label: "Over $20",
//                 count: 25,
//             }
//         ]
//     },
//     {
//         id: 3,
//         name: "Seed Size",
//         options: [
//             {
//                 id: 1,
//                 label: "Small",
//                 count: 10,
//             },
//             {
//                 id: 2,
//                 label: "Medium",
//                 count: 15,
//             },
//             {
//                 id: 3,
//                 label: "Large",
//                 count: 20,
//             }
//         ]
//     },
//     {
//         id: 4,
//         name: "Seed Color",
//         options: [
//             {
//                 id: 1,
//                 label: "Green",
//                 count: 10,
//             },
//             {
//                 id: 2,
//                 label: "Yellow",
//                 count: 15,
//             },
//             {
//                 id: 3,
//                 label: "Red",
//                 count: 20,
//             }
//         ]
//     }

//   ]



const Seeds = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
        offset: 25,
        easing: 'ease-in-out-cubic',
      })
    }, [])

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
    <>
    <div className='seeds-container'>
        <div className='seeds-filters' data-aos='fade-right' data-aos-delay='80'>
          <Filters Products={Products} />
        </div>
        <div className='seeds-cards' data-aos='fade-left' data-aos-delay='120'>
            {seedsData.map((seed, index) => (
              <div
                key={seed.id}
                className='seed-card-item'
                data-aos='zoom-in'
                data-aos-delay={index * 90}
              >
                <CategoryCard data={seed} />
              </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Seeds
