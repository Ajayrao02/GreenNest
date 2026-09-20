import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './CSS/FAQs.css'
import { FiSearch, FiTruck, FiHeart, FiCreditCard, FiUser, FiHelpCircle, FiMail, FiMessageCircle, FiPhone, FiArrowRight } from 'react-icons/fi'

const questions = [
    ['How long does delivery take?', 'We usually deliver within 3-7 business days depending on your location. Metro cities may receive orders faster, while remote areas might take a little longer.'],
    ['What are the shipping charges?', 'Shipping charges depend on your location and order value. The charges are shown at checkout before placing your order.'],
    ['Do you deliver across India?', 'Yes, GreenNest delivers plants, pots and planters, and seeds to most locations across India.'],
    ['How can I track my order?', 'Once your order is dispatched, you will receive tracking details to check your order status.'],
    ['What happens if I am not available at the time of delivery?', 'Our delivery partner may contact you to arrange another delivery attempt at a suitable time.'],
    ['Do you deliver plants in a safe and fresh condition?', 'Plants are carefully packed using protective packaging to help keep them safe and fresh during transportation.'],
    ['Can I change my delivery address after placing the order?', 'Contact us as soon as possible to request an address change. Changes may not be possible after dispatch.'],
    ['Do you offer same-day or express delivery?', 'Express or same-day delivery may be available for selected products and locations.'],
]

const categories = [
    { name: 'Orders & Shipping', count: '8 Questions', icon: <FiTruck /> },
    { name: 'Plants & Care', count: '6 Questions', icon: <FiHeart /> },
    { name: 'Returns & Refunds', count: '5 Questions', icon: <FiCreditCard /> },
    { name: 'Payments', count: '4 Questions', icon: <FiCreditCard /> },
    { name: 'Account', count: '4 Questions', icon: <FiUser /> },
    { name: 'Others', count: '5 Questions', icon: <FiHelpCircle /> },
]

const FAQs = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        })
    }, [])

    return (
        <main className="faq-page">
            <section className="faq-hero" data-aos="fade-down">
                <div className="faq-hero-text">
                    <h1>Frequently<br />Asked Questions</h1>
                    <p className="faq-hero-copy">Find quick answers to common questions about our plants,<br /> orders, shipping, returns and more.</p>
                    <div className="faq-search">
                        <FiSearch />
                        <input type="search" placeholder="Search your question..." aria-label="Search your question" />
                        <button type="button">Search</button>
                    </div>
                </div>
            </section>

            <section className="faq-categories" aria-label="FAQ categories">
                {categories.map((category, index) => (
                    <button className={index === 0 ? 'faq-category active' : 'faq-category'} type="button" key={category.name} data-aos="flip-up" data-aos-delay={index * 100}>
                        <span className="faq-category-icon">{category.icon}</span>
                        <span>{category.name}</span>
                        <small>{category.count}</small>
                    </button>
                ))}
            </section>

            <section className="faq-content">
                <div className="faq-question-area" data-aos="fade-right">
                    <div className="faq-heading-row">
                        <div>
                            <h2>Orders &amp; Shipping</h2>
                            <p>Everything you need to know about placing orders and delivery.</p>
                        </div>
                    </div>
                    <div className="faq-list">
                        {questions.map((question, index) => (
                            <details className="faq-item" open={index === 0} key={question[0]} data-aos="fade-up" data-aos-delay={index * 75}>
                                <summary>{question[0]} <span>+</span></summary>
                                <p>{question[1]}</p>
                            </details>
                        ))}
                    </div>
                </div>

                <aside className="faq-contact-card" data-aos="zoom-in">
                    <div className="faq-leaf-icon">🌿</div>
                    <h2>Still Have Questions?</h2>
                    <p>Our team is here to help you.</p>
                    <div className="faq-contact-list">
                        <div className="faq-contact"><span><FiMail /></span><div><strong>Email Us</strong><small className='ques'>support@greennest.in</small></div></div>
                        <div className="faq-contact"><span><FiMessageCircle /></span><div><strong>Live Chat</strong><small className='ques'>Chat with our team</small></div></div>
                        <div className="faq-contact"><span><FiPhone /></span><div><strong>Call Us</strong><small className='ques'>+91 98765 43210<br />Mon - Sat, 9:00 AM - 7:00 PM</small></div></div>
                    </div>
                </aside>
            </section>

            <section className="faq-help-banner" data-aos="fade-up">
                <div className="faq-help-image"></div>
                <div className="faq-help-copy">
                    <p>GREEN PLANET, BRIGHTER TOMORROW</p>
                    <h2>Still Need Help?</h2>
                    <span>We're just a message away. Let's grow together!</span>
                    <button type="button"><NavLink to='/contact'>Contact Us <FiArrowRight /></NavLink> </button>
                </div>
                <div className="faq-promises">
                    <p>♧ <span className='pro'>Healthy Plants</span></p>
                    <p>▣ <span className='pro'>Safe Delivery</span></p>
                    <p>♡ <span className='pro'>Secure Payments</span></p>
                    <p>♧ <span className='pro'>Happy Customers</span></p>
                </div>
            </section>
        </main>
    )
}

export default FAQs
