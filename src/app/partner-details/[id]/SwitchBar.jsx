'use client'
import React, { useState, useEffect } from 'react';

const SwitchBar = () => {
    const [activeSection, setActiveSection] = useState('services');

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const sections = ['services', 'photos', 'about', 'reviews'];
        const observers = [];

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // use the viewport
            threshold: 0.6 // trigger when 60% of the section is visible
        });

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    return (
        <div className='bg-slate-50 border-b'>
            <ul className="flex justify-between sm:max-w-[1400px] mx-auto sm:text-[20px] px-[10px] mt-6 py-[16px]">
                <li onClick={() => handleScroll('services')}
                    className={`cursor-pointer ${activeSection === 'services' ? 'text-[#4169e1] font-bold underline' : 'text-gray-500'}`}>
                    Services
                </li>
                <li onClick={() => handleScroll('photos')}
                    className={`cursor-pointer ${activeSection === 'photos' ? 'text-[#4169e1] font-bold underline' : 'text-gray-500'}`}>
                    Photos
                </li>
                <li onClick={() => handleScroll('about')}
                    className={`cursor-pointer ${activeSection === 'about' ? 'text-[#4169e1] font-bold underline' : 'text-gray-500'}`}>
                    About
                </li>
                <li onClick={() => handleScroll('reviews')}
                    className={`cursor-pointer ${activeSection === 'reviews' ? 'text-[#4169e1] font-bold underline' : 'text-gray-500'}`}>
                    Reviews
                </li>
            </ul>
        </div>
    );
};

export default SwitchBar;
