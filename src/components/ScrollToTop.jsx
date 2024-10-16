"use client"
import { useEffect, useState } from "react";
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <>
                     <div className="fixed bottom-[12%] sm:bottom-12 z-10 right-4 sm:right-12 bg-blue-500 p-2 sm:p-4 rounded-full cursor-pointer" onClick={scrollToTop}>
                       <ArrowUp className="text-white w-6 h-6" />
                     </div>
                </>
            )}
        </>
    );
}
