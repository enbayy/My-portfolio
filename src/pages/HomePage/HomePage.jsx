import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HomePage() {
    return (
        <section id="home" className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center">
            <div className="flex flex-col items-center space-y-6">
                <div className="text-6xl md:text-5xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-lg">
                    Enes Bayar
                </div>
                <div className="text-2xl md:text-xl sm:text-lg font-light text-gray-300">
                    Web Developer & Designer
                </div>
                <div className="flex justify-center space-x-8 mt-4">
                    <a href="https://www.linkedin.com/in/enesbayarr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                        <BsLinkedin size={40} />
                    </a>
                    <a href="https://github.com/enbayy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomePage;