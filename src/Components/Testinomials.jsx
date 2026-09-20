import React, { useState } from "react";
import "./Css/Testimonials.css";

const testimonials = [
    {
        name: "Anirudh Avani",
        title: "Excellent plant delivery",
        text: "Healthy plants, careful packaging, and prompt delivery. My home feels fresh now.",
        image: "/images/model1.png",
    },
    {
        name: "Varsh Yadav",
        title: "Beautiful collection",
        text: "The plants arrived fresh and looked exactly like the pictures. Highly recommended.",
        image: "/images/model2.png",
    },
    {
        name: "Uma",
        title: "Happy vibes",
        text: "The plants are healthy and add such positive vibes to my space.",
        image: "/images/model3.png",
    },
    {
        name: "Rohan Mehta",
        title: "Great quality plants",
        text: "The quality is excellent and the care instructions were really helpful for a beginner.",
        image: "/images/model4.png",
    },
    {
        name: "Neha Sharma",
        title: "Smooth shopping experience",
        text: "Ordering was easy, delivery was on time, and the plant was packed very safely.",
        image: "/images/model5.png",
    },
    {
        name: "Karan Singh",
        title: "My favourite plant store",
        text: "A lovely selection of plants and very helpful support. I will definitely order again.",
        image: "/images/model6.png",
    },
];

export default function Testimonials() {
    const [currentCustomer, setCurrentCustomer] = useState(0);
    const customer = testimonials[currentCustomer];

    function showPrevious() {
        if (currentCustomer === 0) {
            setCurrentCustomer(testimonials.length - 1);
        } else {
            setCurrentCustomer(currentCustomer - 1);
        }
    }

    function showNext() {
        if (currentCustomer === testimonials.length - 1) {
            setCurrentCustomer(0);
        } else {
            setCurrentCustomer(currentCustomer + 1);
        }
    }

    function selectCustomer(index) {
        setCurrentCustomer(index);
    };

    return (
        <section className="testimonials">
            <h2 className="testimonials-heading">What Our Clients Say</h2>
            <div className="testimonials-slider">
                <button
                    className="testimonial-control testimonial-control-prev"
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous review"
                >
                    &#8249;
                </button>
                <div className="testimonials-viewport">
                    <article className="testimonial-card">
                        <div className="testimonial-card-image">
                            <img
                                className="testimonial-avatar"
                                src={customer.image}
                                alt={`${customer.name} profile`}
                            />
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-text">{customer.text}</p>
                            <p className="testimonial-name">{customer.name}</p>
                            <h3 className="testimonial-title">{customer.title}</h3>
                        </div>
                    </article>
                </div>
                <button
                    className="testimonial-control testimonial-control-next"
                    type="button"
                    onClick={showNext}
                    aria-label="Next review"
                >
                    &#8250;
                </button>
            </div>
            <div className="testimonial-dots" aria-label="Choose a review">
                {testimonials.map((testimonial, index) => (
                    <button
                        className={`testimonial-dot ${index === currentCustomer ? "is-active" : ""}`}
                        type="button"
                        onClick={() => selectCustomer(index)}
                        aria-label={`Show review from ${testimonial.name}`}
                        aria-current={index === currentCustomer ? "true" : undefined}
                        key={testimonial.name}
                    />
                ))}
            </div>
        </section>
    );
}