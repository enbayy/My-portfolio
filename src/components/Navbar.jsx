import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-600 text-white flex justify-between items-center p-4 sticky top-0 z-50">
            <div className="text-2xl font-bold">Enes Bayar</div>
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                <span className="text-3xl">&#9776;</span>
            </div>
            <ul className="hidden md:flex md:space-x-4">
                <li><button onClick={() => scrollToSection('home')} className="hover:bg-gray-700 p-2 rounded">Giriş</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:bg-gray-700 p-2 rounded">Hakkımda</button></li>
            </ul>
            <ul className={`absolute top-16 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li><button onClick={() => scrollToSection('home')} className="block hover:bg-gray-700 p-2 rounded">Giriş</button></li>
                <li><button onClick={() => scrollToSection('about')} className="block hover:bg-gray-700 p-2 rounded">Hakkımda</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;