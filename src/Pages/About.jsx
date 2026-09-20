import { useEffect } from 'react'
import './CSS/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";
import Testinomials from '../Components/Testinomials';
import HappyCustomers from '../Components/HappyCustomers';
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <div className="about-header" data-aos="fade-down">
        <div className="about-content">
          <div className="about-c">
            <p className='a-p1'>ABOUT US</p>
            <p className='a-p2'>All Things Grow <span>With Love</span></p>
            <p className="a-p3">At GreeenNest, we believe plants aren't just decor, they've a way of life Our mission is to bring nature closer to your home with a wide variety of healthy, beautiful plants for every space.</p>
            <button className='a-btn'><NavLink to="/about">Know More</NavLink></button>
          </div>
        </div>
      </div>
      <div className="about-choose" data-aos="zoom-in">
        <p className='ac-p1' data-aos="fade-up">Why Choose GreenNest ?</p>
        <p className="ac-p2" data-aos="fade-up" data-aos-delay="100">Because a greener lifestyle should be simple, accessible and joyful</p>
        <div className="about-box">
          <div className="ab1">
            <div className="a-icon" data-aos="fade-right" data-aos-delay="100">
              <div className='icon-a'>
                <FaCanadianMapleLeaf />
              </div>
              <p className="icon-text">Wide Variety</p>
              <p className='icon-p'>Plants, seeds & planters for every space.</p>

            </div>
            <div className="a-icon" data-aos="zoom-in" data-aos-delay="200">
              <div className='icon-a'>
                <LuShieldCheck />
              </div>
              <p className="icon-text">Quality Plants</p>
              <p className='icon-p'>Healthy , carefully , and new selected plants approved</p>

            </div>
            <div className="a-icon" data-aos="fade-left" data-aos-delay="300">
              <div className='icon-a'>
                <CiDeliveryTruck />
              </div>
              <p className="icon-text">Fast Delivery</p>
              <p className='icon-p'>Fresh plants delivered safely to your doorstep.</p>

            </div>
            <div className="a-icon" data-aos="flip-up" data-aos-delay="400">
              <div className='icon-a'>
                <CiHeart />
              </div>
              <p className="icon-text">Plant Happiness</p>
              <p className='icon-p'>Helping ou create greener, happier spaces.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="our-story" data-aos="fade-right">
        <div className="our-story-content">
          <div className="our-s">
            <div className="our-story-c">
              <p className='o-p1'>OUR STORY</p>
              <p className='o-p2'>From a Small Idea to a <span>Greener Tomorrow</span></p>
              <div className="our-story-tell" data-aos="fade-up" data-aos-delay="150">
                <p className="o-p3">GreenNest started with a simple idea -- to make plants accessible to everyone.What began as a passion for greenery
                  has grown into a place where plant lovers can discover plants, seeds and planters for their homes.
                </p>
                <p className="o-p4">Whether you're a beginner or an experienced plant parent. GreenNest is here to make our green journey simple, enjoyable and beautiful</p>
                <button className='o-btn'><NavLink to="/about">Our Journey</NavLink></button>
              </div>
            </div>
          </div>
          <div className="our-quote">
            <span>Small</span>
            <span>Steps</span>
            <span>Greener</span>
            <span>Tomorrow</span>
          </div>
          <div className="our-quote-s">
            <span>A greener </span>
            <span>world starts </span>
            <span>at home.</span>
          </div>
        </div>
      </div>
      <div data-aos="fade-left">
        <Testinomials />
      </div>
      <div data-aos="fade-up">
        <HappyCustomers />
      </div>
    </>
  )
}

export default About
