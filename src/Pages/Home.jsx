import { useEffect } from 'react'
import CategoryCard from '../Components/CategoryCard'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import './CSS/Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ShopCategory from '../Components/ShopCategory';
import Testinomials from '../Components/Testinomials'
import { NavLink } from 'react-router-dom';
import HappyCustomers from '../Components/HappyCustomers'
import SliderCard from '../Components/SliderCard';
import { plantData } from '../data/products'
import { potsPlantersData } from '../data/products'
import {seedsData} from '../data/products'

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, [])

  let category = [
    { _id: 1, text: "Clusia Plant", imageUrl: '/images/c1.jpeg', price: '₹399' },
    { _id: 2, text: "Areca Plant", imageUrl: '/images/c2.jpeg', price: '₹299' },
    { _id: 3, text: "Succulent Plant", imageUrl: '/images/c3.jpeg', price: '₹359' },
    { _id: 4, text: "Boston Plant", imageUrl: '/images/c4.jpeg', price: '₹399' },
    { _id: 5, text: "Fittonia Plant", imageUrl: '/images/c5.jpeg', price: '₹299' },
    // { _id: 6, text: "ANNIVERSARY", imageUrl: '/images/c6.webp' },
  ]
  let shopcategory = [
    { _id: 1, text: "Inner Plant", imageUrl: '/images/s11.jpeg' },
    { _id: 2, text: "Outer Plant", imageUrl: '/images/s2.jpeg' },
    { _id: 3, text: "Succulent Plant", imageUrl: '/images/s3.jpeg' },
    { _id: 4, text: "Flowering Plant", imageUrl: '/images/s4.jpeg' },
    { _id: 5, text: "Seeds Plant", imageUrl: '/images/s5.jpeg' },
    { _id: 6, text: "Pots & Planting", imageUrl: '/images/s6.jpeg' },
  ]
  return (
    <>
      <div className="home-header-1" data-aos="fade-up">
        <div className="home-head-left-c">
          <p className='h-p1'>PLANTS MAKE A HAPPIER HOME</p>
          <p className='h-p2'>Trees are Always Nice to us. <span>Be Nice to them.</span></p>
          <p className='h-p3'>Discover a greener, healtheir and more beautiful home with our wide range of plants.</p>
          <div className="btnss">
            <button className='h-btn1'><NavLink to="/plants">Order Now</NavLink></button>
            <button className='h-btn2'><NavLink to="/about">Explore More</NavLink></button>
          </div>
        </div>
        <div className="home-head-middle">
          <img src="/images/h2.png" alt="" />
        </div>
        <div className="home-head-right">
          <div className="home-head-right-c">
            <div className="right-box">
              <div className="home-quote">
                <span>Good</span>
                <span>Plants</span>
                <span>Good Mood</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ppsection">
        <p>Trending Products</p>
        <span>Our Most loved plants, handpicked for you</span>
      </div>

      {/* Category card start */}
      <div className="category-card-home-outer" data-aos="zoom-in">
        {
          category.slice(0, 6).map((item) => (
            <CategoryCard key={item._id} text={item.text} imageUrl={item.imageUrl} price={item.price} />
          ))
        }
      </div>
      <div className="categ">
        <button className='btns'><NavLink to="/plants">View All Products</NavLink> <FaLongArrowAltRight /></button>
      </div>
      {/* Category card end */}
      {/* plants slider start */}

      <div className="home-plants-page-slider" data-aos="fade-up">
      <h1>Popular Plants</h1>

      <SliderCard data={plantData} CardComponent={CategoryCard} />
    </div>


      {/* plants slider end */}
      {/* about us start  */}
      <div className="home-about" data-aos="fade-right">
        <img src="/images/h2.png" alt="" />
        <div className="home-about-left">
          <div className="home-about-left-c">
            <p className='h-p1'>About Us</p>
            <p className='h-p2'>All Things Grow <span>With Love.</span></p>
            <p className='h-p3'>Plants aren't just decor, they're a feeling. At GreenNest, we bring nature closer tou your home with a with variety of plants for every space.</p>
            <div className="btnss">
              <button className='h-btn'><NavLink to="/about">Know More</NavLink></button>
              {/* <button className='h-btn2'>Explore More</button> */}
            </div>
          </div>
        </div>
        <div className="home-about-right">
          <img src="/images/hh.jpeg" alt="" />
          <div className="har-c">
            <div className="har-icon">🌱</div>
            <p>Plants</p>
            <p>Make People</p>
            <p>Happy</p>
          </div>
        </div>
      </div>
      {/* about us end  */}

      <div className="home-plants-page-slider" data-aos="fade-up">
      <h1>Popular Planters</h1>

      <SliderCard data={potsPlantersData} CardComponent={CategoryCard} />
    </div>

      {/* how to order start */}
      <p className='order-p-top'>How to Order ?</p>
      <div className="order-outer" data-aos="fade-up">
        <div className="order-card">
          <div className="order-card1">
            <div className="icon">
              <FiShoppingCart />
              <span>01</span>
            </div>
            <div>
              <p className='order-p'>Choose Products</p>
              <p className='order-p2'>Browse and select</p>
              <p className='order-p2'>your favorite plants.</p>
            </div>
            <div className='dots'>--------------</div>
            <div className="icon">
              <FaClipboardList />
              <span>02</span>
            </div>
            <div>
              <p className='order-p'>Choose Products</p>
              <p className='order-p2'>Browse and select</p>
              <p className='order-p2'>your favorite plants.</p>
            </div>
            <div className='dots'>--------------</div>
            <div className="icon">
              <span>03</span>
              <FaRegCreditCard />
            </div>
            <div>
              <p className='order-p'>Choose Products</p>
              <p className='order-p2'>Browse and select</p>
              <p className='order-p2'>your favorite plants.</p>
            </div>
            <div className='dots'>--------------</div>
            <div className="icon">
              <CiDeliveryTruck />
              <span>04</span>
            </div>
            <div>
              <p className='order-p'>Choose Products</p>
              <p className='order-p2'>Browse and select</p>
              <p className='order-p2'>your favorite plants.</p>
            </div>
            <div className='dots'>--------------</div>
          </div>
        </div>
      </div>
      {/* how to order end  */}
      {/* shop category start  */}
      <div className="shop-category" data-aos="zoom-in">
        <p className="shop-p">Shop By Categories</p>
        <div className="shop-category-card-home-outer">
          {
            shopcategory.map((item) => (
              <ShopCategory key={item._id} text={item.text} imageUrl={item.imageUrl} />
            ))
          }
        </div>
      </div>
      {/* shop category end  */}

      <div className="home-plants-page-slider" data-aos="fade-up">
      <h1>Popular Seeds</h1>

      <SliderCard data={seedsData} CardComponent={CategoryCard} />
    </div>
      <div data-aos="fade-left">
        <Testinomials />
      </div>
      <HappyCustomers />

    </>
  )
}

export default Home