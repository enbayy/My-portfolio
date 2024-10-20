import React from 'react';

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
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white p-5 overflow-hidden">
            <h2 className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-lg">Hizmetler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <h3 className="text-3xl font-bold mb-2 text-center">{service.title}</h3>
                        <p className="text-lg text-center font-light">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;