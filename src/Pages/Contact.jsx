import React, { useEffect } from 'react'
import { GiQuicksand } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { TbCubeSpark } from "react-icons/tb";
import { PiPlantBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi"; 
import { FaLocationDot } from "react-icons/fa6"; 
import { MdAddCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

import './CSS/Contact.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
      offset: 25,
      easing: 'ease-out-cubic',
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return(
    <>

      <div className='about-container'>
        <div className='about-service-text' data-aos='fade-up' data-aos-delay='50'>
          <div className="about-service-component" data-aos='fade-up' data-aos-delay='100'>
            <div><GiQuicksand fontSize={34}/></div>
            <div>
              <h3>Quick Response</h3>
              <p>We usually respond within 24 hours.</p>

            </div>
          </div>
          <div className="about-service-component" data-aos='fade-up' data-aos-delay='150'>
            <div className='icons'><BiSupport fontSize={34}/></div>
            <div> 
              <h3>24/7 Support</h3>
              <p>We provide support around the clock.</p>
            </div>
          </div>
          <div className="about-service-component" data-aos='fade-up' data-aos-delay='200'>
            <div><TbCubeSpark fontSize={34}/></div>
            <div>
              <h3>Easy Returns</h3>
              <p>We offer hassle-free returns.</p>

            </div>
          </div>
          <div className="about-service-component" data-aos='fade-up' data-aos-delay='250'>
            <div><PiPlantBold fontSize={34}/></div>
            <div>
              <h3>Eco-Friendly</h3>
              <p>We are committed to sustainability.</p>
            </div>
          </div>
          <div className="about-service-component" data-aos='fade-up' data-aos-delay='300'>
            <div><FiHeart fontSize={34}/></div>
            <div>
              <h3>Customer Love</h3>
              <p>care about our customers satisfaction.</p>
            </div>
          </div>
          
        </div>

        {/* contact information */}

        <div className='about-contact-info-container'>

          <div className='about-contact-info' data-aos='fade-right' data-aos-delay='100'>
            <div className='about-contact-info-text-header'>
              <p>CONTACT INFORMATION</p>
              <h2>Let's Connected</h2>
              <p className='about-contact-info-text-header-p'>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
            </div>
            <div className='about-contact-info-components'>
              <div className="about-contact-info-item" data-aos='fade-up' data-aos-delay='140'>
                <div className="about-contact-info-icon">
                  <FaLocationDot fontSize={38}/>
                </div>
                <div className="about-contact-info-text">
                  <h3>Our Location</h3>
                  <p>123 Main Street, City, State 12345</p>
                  <p>We are located in the heart of the city, easily accessible by public transportation.</p>
                </div>
              </div>
              
              <div className='about-contact-info-item' data-aos='fade-up' data-aos-delay='180'>
                <div className="about-contact-info-icon">
                  <MdAttachEmail fontSize={38}/>
                </div>
                <div className="about-contact-info-text">
                  <h3>Our Email</h3>
                  <p>mohitinfo@company.com</p>
                  <p>we will get back to you as soon as possible.</p>
                </div>
              </div>

              <div className='about-contact-info-item' data-aos='fade-up' data-aos-delay='220'>
                <div className="about-contact-info-icon">
                  <MdAddCall fontSize={38}/>
                </div>
                <div className="about-contact-info-text">
                  <h3>Our Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>We are available during business hours to assist you with any inquiries or support.</p>
                </div>
              </div>

              <div className='about-contact-info-item' data-aos='fade-up' data-aos-delay='260'>
                <div className="about-contact-info-icon">
                  <RiUserFollowFill fontSize={38} />
                </div>
                <div className="about-contact-info-text">
                  <h3>Follow Us</h3>
                  <p>Stay connected with us on social media for updates, promotions, and gardening tips.</p>
                  <p><FaInstagram /> <FaFacebookSquare /> <FaWhatsappSquare /> <IoLogoYoutube /> <FaLinkedin /></p>
                </div>
              </div>
            </div>
          </div>
          <div className='about-contact-form' data-aos='fade-left' data-aos-delay='120'>
            <div className="contact-form-box">

                <div className="contact-form-header">
                    <p>SEND US A MESSAGE</p>

                    <h1>We'd Love to Hear From You</h1>

                    <span>
                        Fill out the form below and we'll get back to you soon.
                    </span>
                </div>


                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    {/* Name + Email */}

                    <div className="contact-form-row">

                        <div className="contact-input-group">
                            <label htmlFor="name">
                                Your Name <b>*</b>
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>


                        <div className="contact-input-group">
                            <label htmlFor="email">
                                Your Email <b>*</b>
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                    </div>


                    {/* Subject */}

                    <div className="contact-input-group">

                        <label htmlFor="subject">
                            Subject <b>*</b>
                        </label>

                        <select
                            id="subject"
                            required
                        >
                            <option value="">
                                Select a subject
                            </option>

                            <option value="general">
                                General Inquiry
                            </option>

                            <option value="order">
                                Order Related
                            </option>

                            <option value="product">
                                Product Support
                            </option>

                            <option value="feedback">
                                Feedback
                            </option>

                        </select>

                    </div>


                    {/* Message */}

                    <div className="contact-input-group">

                        <label htmlFor="message">
                            Your Message <b>*</b>
                        </label>

                        <textarea
                            id="message"
                            placeholder="Type your message here..."
                            required
                        ></textarea>

                    </div>


                    {/* Submit Button */}

                    <button
                        type="submit"
                        className="contact-submit-btn"
                    >
                        <span>➤</span>
                        Send Message
                    </button>

                </form>

            </div>

            
          
          </div>

          
        
        
        
        </div>

        <iframe className='googlemap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.080547469659!2d-73.98757699999999!3d40.758024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x5b8cd7b4a6e6a7c4!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" width="100%" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" margin-bottom="20px"></iframe>



      </div>
    
    
    
    </>
  );
}

export default Contact
