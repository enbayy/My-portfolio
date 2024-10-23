import React, { useState, useEffect } from 'react';
import EnesBayarCv from '../../assets/EnesBayarCv.pdf';

function AboutPage() {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPageLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleScrollToContact = () => {
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-900 flex justify-center items-center">
            <div className={`w-full max-w-4xl bg-gradient-to-br from-gray-800 via-black to-gray-900 backdrop-blur-lg rounded-xl p-8 md:p-12 text-white shadow-2xl mt-16 
                transition-all duration-1000 ease-in-out transform-gpu 
                ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-5xl font-extrabold inline-block pb-4 mb-10">
                    Kim bu Enes?
                    <span className="block w-full h-1 bg-blue-600 mt-2 -mb-4"></span>
                </h1>
                <div className="space-y-10 text-lg md:text-xl leading-relaxed">
                    <p>
                        Merhaba, ben Enes Bayar. 2024 yılında Selçuk Üniversitesi Bilgisayar
                        Mühendisliği bölümünden mezun oldum. Üniversite hayatım boyunca teknoloji
                        ve yazılım dünyasında çeşitli alanlarda kendimi geliştirme fırsatı buldum.
                    </p>
                    <p>
                        Kariyerime mobil uygulama geliştirme alanında başladım ve bu süreçte çeşitli projelerde aktif olarak yer aldım. Mobil platformlarda kullanıcı deneyimini iyileştirmek ve işlevselliği artırmak amacıyla çeşitli uygulama geliştirme çalışmalarında bulundum.
                    </p>
                    <p>
                        Sonrasında oyun sektöründe çalışmalara başladım ve bu alanda kapsamlı deneyimler edindim. İki farklı şirkette staj yaparak oyun geliştirme süreçlerinin tüm aşamalarında ve reklam entegrasyonlarında görev aldım. Ancak zamanla web teknolojilerine olan ilgim arttı ve kariyerimi Front-End geliştirme üzerine şekillendirmeye karar verdim.
                    </p>
                    <p>
                        AWS hizmetlerini kullanarak full-stack bir e-ticaret platformu geliştirdim. AWS Cognito ile kullanıcı kimlik doğrulama ve yetkilendirme işlemlerini gerçekleştirdim ve IAM ile güvenli erişim ve rol yönetimi sağladım. Bu süreç, AWS bulut hizmetlerinde derinlemesine bilgi kazanmamı ve full-stack geliştirme becerilerimi pekiştirmemi sağladı.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mt-10">
                    <a href={EnesBayarCv} download="EnesBayarCv.pdf">
                        <button className="p-2 bg-green-500 hover:bg-green-700 text-white rounded-lg shadow-lg transition-all transform hover:scale-105">
                            CV İndir
                        </button>
                    </a>
                    <button
                        onClick={handleScrollToContact}
                        className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all transform hover:scale-105"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;