import React, { useState, useEffect } from 'react';

const services = [
    {
        title: "Web Geliştirme",
        description: "Profesyonel ve kurumsal web tasarım çalışmalarım, sizlere sektörde fark yaratma ve rakiplerden bir adım daha önde olma fırsatı tanıyor."
    },
    {
        title: "Mobil Uygulama Geliştirme",
        description: "iOS ve Android platformlarında modern, performans odaklı ve kullanıcı dostu uygulamalar geliştirerek, iş hedeflerinize uygun çözümler sunuyorum."
    },
    {
        title: "Oyun Geliştirme",
        description: "Oyun geliştirirken, yaratıcılığın ve teknolojinin kusursuz birleşimini; fikir, tasarım, sesler ve oynanabilirliği bir araya getirerek eğlenceli bir deneyim sunmayı hedefliyorum."
    }
];

function ServicesPage() {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPageLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen h-full bg-gradient-to-b from-gray-800 to-black text-white p-5 overflow-hidden">
            <h2 className={`text-5xl font-bold mb-24 mt-8 text-center bg-clip-text text-transparent text-white drop-shadow-lg 
                ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
            >
                Hizmetler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 
                            ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <h3 className="text-3xl font-bold mb-10 text-center">{service.title}</h3>
                        <p className="text-lg text-center font-light">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;