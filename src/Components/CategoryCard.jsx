import React from 'react'
import './CSS/CategoryCard.css'
import { CiHeart } from 'react-icons/ci';

const CategoryCard = ({ data, text, imageUrl, price }) => {
    const cardData = data || { text, imageUrl, price };

    return (
        <>
            <div className='category-card-outer'>
                <div className='category-card-image'>
                    <img src={cardData.imageUrl} alt={cardData.text || 'Product image'} />
                </div>
                <div className="badge">
                    <CiHeart />
                </div>
                <div className='category-card-text'>
                    <p>{cardData.text}</p>
                </div>
                <div className='category-card-price'>
                    <p>{cardData.price}</p>
                </div>
                <div className='category-card-button'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CategoryCard