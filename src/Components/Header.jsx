import React from 'react'
import './CSS/Header.css'
import { NavLink } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <div className="header-outer">
                <div className="logo">
                    <img src="/images/logoo.png" alt="GreenNest logo" />
                    <span>GreenNest</span>
                </div>


                <div className="header-nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/plants">Plants</NavLink></li>
                        <li><NavLink to="/pots-planters">Pots & Planters</NavLink></li>
                        <li><NavLink to="/seeds">Seeds</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/faqs">FAQs</NavLink></li>
                    </ul>
                </div>

                <div className="search-icon">
                    <input type="text" placeholder="Search, plants, pots, seeds..." />
                    <FaMagnifyingGlass className='icon'/>
                </div>

                <div className="header-right-part">
                    <CiHeart className='heart'/>
                    <div className="badge-cart">
                        <FaShoppingCart className='cart'/>
                        <p className='p-cart'>0</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header