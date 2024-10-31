import React, { useState, useEffect } from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HomePage() {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPageLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center">
            <div className="flex flex-col items-center space-y-6">
                <div className={`text-6xl md:text-6xl sm:text-5xl font-extrabold text-white drop-shadow-lg transition-all duration-1000 ease-in-out transform-gpu 
                    ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-100`}
                    style={{ lineHeight: '1.2' }}>
                    Enes Bayar
                </div>
                <div className={`text-2xl md:text-2xl sm:text-lg font-light text-gray-400 transition-all duration-1000 ease-in-out transform-gpu
                    ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-300`}>
                    Web Developer & Designer
                </div>
                <div className={`flex justify-center space-x-8 mt-4 transition-opacity duration-1000 ease-in-out delay-500
                    ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                        href="https://www.linkedin.com/in/enesbayarr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-all duration-300 
                            filter brightness-125 
                            shadow-lg shadow-gray-400/50 
                            shadow-[0_0_10px_3px_rgba(156,163,175,0.5)] 
                            rounded-lg hover:text-black hover:bg-white"
                    >
                        <BsLinkedin size={40} />
                    </a>
                    <a
                        href="https://github.com/enbayy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-all duration-300 
                            filter brightness-125 
                            shadow-lg shadow-gray-400/50 
                            shadow-[0_0_10px_3px_rgba(156,163,175,0.5)] 
                            rounded-full hover:text-black hover:bg-white"
                    >
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomePage;