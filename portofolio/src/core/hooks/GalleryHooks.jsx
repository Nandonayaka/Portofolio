import { useRef, useEffect, useState } from "react";

export const useGalleryScroll = (autoPlayInterval = 3000) => {
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                if (sliderRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
                    const scrollAmount = clientWidth / 5;

                    // Infinite loop logic
                    if (scrollLeft + clientWidth >= scrollWidth - 10) {
                        sliderRef.current.scrollTo({ left: scrollWidth / 4, behavior: "auto" });
                    } else {
                        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
                    }
                }
            }, autoPlayInterval);
        }
        return () => clearInterval(interval);
    }, [isHovered, autoPlayInterval]);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const clientWidth = sliderRef.current.clientWidth;
            const scrollAmount = clientWidth / 5;
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return {
        sliderRef,
        isHovered,
        setIsHovered,
        scroll
    };
};
