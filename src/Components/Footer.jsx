import React from 'react'
import './CSS/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer-outer">
                <div className="f1">
                    <img src="/images/logoo.png" alt="" />
                    <div className="logo-text">
                        <h1>GreenNest</h1>
                        <p>Bring Nature Home</p>
                        <p className='logo-text-p'>Plants more to Fell happy, healthier and hapier home.</p>
                        <div className="social-contact">
                            <div className="insta">
                                <FaInstagram />
                            </div>
                            <div className="fb">
                                <FaFacebook />
                            </div>
                            <div className="whatspp">
                                <FaWhatsapp />
                            </div>
                            <div className="pinterest">
                                <FaPinterest />
                            </div>
                        </div>
                    </div>
                    <div className="footer-quote">
                        <span>Good</span>
                        <span>Plants</span>
                        <span>Good Mood</span>
                    </div>

                </div>

                <div className='f2'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/plants">Plants</NavLink></li>
                        <li><NavLink to="/pots-planters">Pots & Planters</NavLink></li>
                        <li><NavLink to="/seeds">Seeds</NavLink></li>
                        {/* <li><NavLink to="/gardening">Gardening</NavLink></li> */}
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className='f3'>
                    <h2>Customer Care</h2>
                    <ul>
                        <li><NavLink to="faqs">FAQs</NavLink></li>
                        <li><NavLink to="/faqs">Shipping Policy</NavLink></li>
                        <li><NavLink to="/faqs">Return & Refunds</NavLink></li>
                        <li><NavLink to="/faqs">Terms & Condition</NavLink></li>
                        <li><NavLink to="/faqs">Privacy Policy</NavLink></li>
                        <li><NavLink to="/faqs">Track your Order</NavLink></li>
                        <li><NavLink to="/faqs">Help Center</NavLink></li>
                    </ul>
                </div>
            
                <div className='f5'>
                    <h2>Contact us</h2>
                    <div className='loctaion'>
                        <div className="icons">
                            <div className="ficon">
                                <FaLocationDot classname="iconf"/>
                            </div>
                            <span>123 HazaratGanj Street,<p>Lucknow, India</p></span>
                            
                        </div>
                        <div className="icons">
                            <div className="ficon">
                                <FaPhoneAlt />
                            </div>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="icons">
                            <div className="ficon">
                                <MdEmail/>
                            </div>
                            <span>support@gmail.com</span>
                        </div>
                        <div className="icons">
                            <div className="ficon">
                                <FaRegClock/>
                            </div>
                            <span> Mon- Sat:9:00 - 6:00</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer