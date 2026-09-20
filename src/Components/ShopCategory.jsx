import React from 'react'
import './CSS/ShopCategory.css'
import { CiHeart } from 'react-icons/ci';
const ShopCategory = ({key,text,imageUrl,}) => {
    return (
        <>
            <div className='shopcategory-card-outer'>
                <div className='shopcategory-card-image'>
                    <img src={imageUrl} alt=""/>
                </div>
                <div className='shopcategory-card-text'>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default ShopCategory