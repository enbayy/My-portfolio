import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HomePage() {
    return (
        <section id="home" className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center">
            <div className="flex flex-col items-center space-y-6">
                <div className="text-6xl md:text-6xl sm:text-5xl font-extrabold text-white drop-shadow-lg"
                    style={{ lineHeight: '1.2' }}>
                    Enes Bayar
                </div>
                <div className="text-2xl md:text-2xl sm:text-lg font-light text-gray-400 animate-blink"
                    style={{ animation: 'blink 3s infinite' }}>
                    Web Developer & Designer
                </div>
                <div className="flex justify-center space-x-8 mt-4">
                    <a href="https://www.linkedin.com/in/enesbayarr/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-600 transition-colors duration-300">
                        <BsLinkedin size={40} />
                    </a>
                    <a href="https://github.com/enbayy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-600 transition-colors duration-300">
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomePage;