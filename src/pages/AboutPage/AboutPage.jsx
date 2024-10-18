import React from 'react';
import EnesBayarCv from '../../assets/EnesBayarCv.pdf';

function AboutPage() {
    const handleScrollToContact = () => {
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
            <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-lg p-5 text-white shadow-lg">
                <h1 className="text-5xl font-bold border-b-4 border-blue-500 pb-4 mb-8">
                    Kim bu Enes?
                </h1>
                <div className="space-y-8 text-xl leading-relaxed">
                    <p>
                        Merhaba, ben Enes Bayar. 2024 yılında Selçuk Üniversitesi Bilgisayar
                        Mühendisliği bölümünden mezun oldum. Üniversite hayatım boyunca
                        teknoloji ve yazılım dünyasında çeşitli alanlarda kendimi geliştirme
                        fırsatı buldum.
                    </p>
                    <p>
                        Kariyerime mobil uygulama geliştirme alanında başladım ve bu süreçte
                        çeşitli projelerde aktif olarak yer aldım. Mobil platformlarda
                        kullanıcı deneyimini iyileştirmek ve işlevselliği artırmak amacıyla
                        çeşitli uygulama geliştirme çalışmalarında bulundum.
                    </p>
                    <p>
                        Sonrasında oyun sektöründe çalışmalara başladım ve bu alanda kapsamlı
                        deneyimler edindim. İki farklı şirkette staj yaparak oyun geliştirme
                        süreçlerinin tüm aşamalarında ve reklam entegrasyonlarında görev
                        aldım. Ancak zamanla web teknolojilerine olan ilgim arttı ve kariyerimi
                        Front-End geliştirme üzerine şekillendirmeye karar verdim.
                    </p>
                    <p>
                        Aktif olarak Front-End geliştirme alanında çalışmalarımı sürdürüyorum.
                        Global bir şirkette başarılı bir staj dönemini tamamladım. Bu süreçte,
                        AWS hizmetlerini kullanarak full-stack bir e-ticaret platformu
                        geliştirdim. Bu platformda, kullanıcılar ürünleri görüntüleyip sepete
                        ekleyebiliyor ve güvenli ödeme yapabiliyor. AWS Cognito ile kullanıcı
                        kimlik doğrulama ve yetkilendirme işlemlerini gerçekleştirdim ve IAM ile
                        güvenli erişim ve rol yönetimi sağladım. Bu süreç, AWS bulut
                        hizmetlerinde derinlemesine bilgi kazanmamı ve full-stack geliştirme
                        becerilerimi pekiştirmemi sağladı.
                    </p>
                </div>
                <div className="flex justify-around mt-10 space-x-4">
                    <a href={EnesBayarCv} download="EnesBayarCv.pdf">
                        <button className="w-full max-w-xs py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition">
                            CV İndir
                        </button>
                    </a>
                    <button
                        onClick={handleScrollToContact}
                        className="w-full max-w-xs py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;