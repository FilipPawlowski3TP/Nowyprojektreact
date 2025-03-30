import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="about-section py-5">
            <div className="container">
                <div className="row mb-5" data-aos="fade-up">
                    <div className="col-12 text-center">
                        <h1 className="display-4 mb-3">O Nas</h1>
                        <p className="lead text-muted">
                            Poznaj naszą pasję do perfum
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-md-6" data-aos="fade-right">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h3 className="mb-4">Nasza Historia</h3>
                                <p className="text-muted">
                                    Od ponad dekady specjalizujemy się w dostarczaniu najwyższej jakości perfum. 
                                    Nasza pasja do zapachów przekłada się na starannie wyselekcjonowaną kolekcję 
                                    od najbardziej prestiżowych marek świata.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-left">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <h3 className="mb-4">Nasza Misja</h3>
                                <p className="text-muted">
                                    Wierzymy, że odpowiednio dobrany zapach może zmienić nie tylko nastrój, 
                                    ale także sposób, w jaki postrzegamy świat. Dlatego dokładamy wszelkich starań, 
                                    aby każdy znalazł u nas perfumy idealne dla siebie.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-4" data-aos="fade-up">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 text-center">
                                <h3 className="mb-4">Dlaczego My?</h3>
                                <div className="row g-4">
                                    <div className="col-md-4">
                                        <div className="feature">
                                            <h5>Autentyczność</h5>
                                            <p className="text-muted">Gwarantujemy oryginalność wszystkich produktów</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="feature">
                                            <h5>Doświadczenie</h5>
                                            <p className="text-muted">Profesjonalne doradztwo i obsługa</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="feature">
                                            <h5>Jakość</h5>
                                            <p className="text-muted">Najwyższa jakość w atrakcyjnych cenach</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;