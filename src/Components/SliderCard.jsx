import React, { useEffect, useRef } from "react";
import "./CSS/SliderCard.css";

const SliderCard = ({ data = [], CardComponent }) => {
    const sliderRef = useRef(null);
    const isResetting = useRef(false);

    // Duplicate data for infinite effect
    const sliderData = [...data, ...data];

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider || data.length === 0) return;

        const autoSlide = setInterval(() => {
            if (isResetting.current) return;

            const card = slider.querySelector(".slider-item");

            if (!card) return;

            const cardWidth = card.offsetWidth;
            const gap = 20;
            const moveAmount = cardWidth + gap;

            const originalSetWidth =
                data.length * moveAmount;

            /*
             * Move exactly one card
             */
            slider.scrollBy({
                left: moveAmount,
                behavior: "smooth",
            });

            /*
             * When we reach the duplicated section,
             * silently move back to the original section.
             */
            setTimeout(() => {
                if (
                    slider.scrollLeft >=
                    originalSetWidth
                ) {
                    isResetting.current = true;

                    slider.scrollTo({
                        left:
                            slider.scrollLeft -
                            originalSetWidth,
                        behavior: "auto",
                    });

                    setTimeout(() => {
                        isResetting.current = false;
                    }, 50);
                }
            }, 700);
        }, 2500);

        return () => clearInterval(autoSlide);
    }, [data]);

    if (!CardComponent || data.length === 0) {
        return null;
    }

    return (
        <div className="slider-wrapper">

            <div
                className="slider-container"
                ref={sliderRef}
            >
                {sliderData.map((item, index) => (
                    <div
                        className="slider-item"
                        key={`${item.id}-${index}`}
                    >
                        <CardComponent data={item} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SliderCard;