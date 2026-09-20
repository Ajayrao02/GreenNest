import React, { useEffect } from 'react'
import './CSS/PotsPlanters.css'
import CategoryCard from '../Components/CategoryCard'
import Filters from '../Components/Filters'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { potsPlantersData } from '../data/products'


const products = [
    {
      id: 1,
        options: [
            {
                id: 1,
                label: "Ceramic Pot",
                count: 10,
            },
            {
                id: 2,
                label: "Terracotta Planter",
                count: 10,
            },
            {
                id: 3,
                label: "Clay Pot",
                count: 10,
            },
            {
                id: 4,
                label: "Glazed Pot",
                count: 10,
            },
            {
                id: 5,
                label: "Mud Pot",
                count: 10,
            },
            {
                id: 6,
                label: "Stone Pot",
                count: 10,
            },
            {
                id: 7,
                label: "Wooden Pot",
                count: 10,
            },
            {
                id: 8,
                label: "Plastic Planter",
                count: 10,
            },
            {
                id: 9,
                label: "Metal Pot",
                count: 10,
            },
            {
                id: 10,
                label: "Glass Pot",
                count: 10,
            },
            {
                id: 11,
                label: "Ceramic Planter",
                count: 10,
            },
            {
                id: 12,
                label: "Terracotta Planter",
                count: 10,
            }
        ],
        name: "Pots & Planters"
    },
    {id: 2,
        name: "Availability",
        options: [
            {
                id: 1,
                label: "In Stock",
                count: 10,
            },
            {
                id: 2,
                label: "Out of Stock",
                count: 10,
            }
        ]
    },
    {id: 3,
        name: "Price Range",
        options: [
            {
                id: 1,
                label: "Under $10",
                count: 10,
            },
            {
                id: 2,
                label: "$10 - $25",
                count: 10,
            },
            {
                id: 3,
                label: "$25 - $50",
                count: 10,
            },
            {
                id: 4,
                label: "Over $50",
                count: 10,
            }
        ]
    },
    {
        id: 4,
        name: "Size",
        options: [
            {
                id: 1,
                label: "Small",
                count: 'up to 10cm',
            },
            {
                id: 2,
                label: "Medium",
                count: '10cm to 50cm',
            },
            {
                id: 3,
                label: "Large",
                count: 'over 50cm',
            }
        ]
    },
    {
        id: 5,
        name: "Material",
        options: [
            {
                id: 1,
                label: "Clay",
                count: 10,
            },
            {
                id: 2,
                label: "Ceramic",
                count: 10,
            },
            {
                id: 3,
                label: "Glass",
                count: 10,
            },
            {
                id: 4,
                label: "Metal",
                count: 10,
            },
            {
                id: 5,
                label: "Plastic",
                count: 10,
            }
        ]
    }
]

const PotsPlanters = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            offset: 30,
            easing: 'ease-out-cubic',
        })
    }, [])

    return (
        <div className='pots-planters-container'>
            <div className='pots-planters-filters' data-aos='fade-right' data-aos-delay='80'>
                <Filters Products={products} />
            </div>
            <div className='pots-planters-cards' data-aos='fade-up' data-aos-delay='120'>
                {potsPlantersData.map((item, index) => (
                    <div
                        key={item.id}
                        className='pots-planter-card-item'
                        data-aos='zoom-in-up'
                        data-aos-delay={index * 80}
                    >
                        <CategoryCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PotsPlanters
