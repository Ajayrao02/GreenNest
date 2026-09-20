import React from 'react'
import './CSS/CategoryCard.css'
import { CiHeart } from 'react-icons/ci';
const CategoryCard = ({ text, imageUrl, price }) => {
    return (
        <>
            <div className='category-card-outer'>
                <div className='category-card-image'>
                    <img src={imageUrl} alt="" />
                </div>
                <div className="badge">
                    <CiHeart />
                </div>
                <div className='category-card-text'>
                    <p>{text}</p>
                </div>
                <div className='category-card-price'>
                    <p>{price}</p>
                </div>
                <div className='category-card-button'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CategoryCard