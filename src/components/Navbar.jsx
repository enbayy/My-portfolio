import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                <li><a href="#home" className="hover:bg-gray-700 p-2 rounded">Giriş</a></li>
                <li><a href="#about" className="hover:bg-gray-700 p-2 rounded">Hakkımda</a></li>
                <li><a href="#projects" className="hover:bg-gray-700 p-2 rounded">Çalışmalar</a></li>
                <li><a href="#services" className="hover:bg-gray-700 p-2 rounded">Hizmetler</a></li>
                <li><a href="#contact" className="hover:bg-gray-700 p-2 rounded">İletişim</a></li>
                <li><a href="#cv" className="hover:bg-gray-700 p-2 rounded">CV</a></li>
            </ul>
            <ul className={`absolute top-16 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li><a href="#home" className="block hover:bg-gray-700 p-2 rounded">Giriş</a></li>
                <li><a href="#about" className="block hover:bg-gray-700 p-2 rounded">Hakkımda</a></li>
                <li><a href="#projects" className="block hover:bg-gray-700 p-2 rounded">Çalışmalar</a></li>
                <li><a href="#services" className="block hover:bg-gray-700 p-2 rounded">Hizmetler</a></li>
                <li><a href="#contact" className="block hover:bg-gray-700 p-2 rounded">İletişim</a></li>
                <li><a href="#cv" className="block hover:bg-gray-700 p-2 rounded">CV</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;