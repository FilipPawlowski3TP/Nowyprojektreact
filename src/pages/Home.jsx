import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="home">
            <section className="hero d-flex justify-content-center align-items-center text-center">
                <div className="hero-content">
                    <h1 className="display-2">Odkryj perfumy, które mówią za Ciebie</h1>
                    <p className="lead">Najlepsze zapachy w jednym miejscu</p>
                    <Link to="/products" className="btn btn-outline-light btn-lg">Zacznij zakupy</Link>
                </div>
            </section>

            <section className="new-arrivals py-5">
                <div className="container text-center">
                    <h2 className="mb-2" data-aos="fade-up">Nowości w naszej ofercie</h2>
                    <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
                        Zobacz najnowsze zapachy i odkryj wyjątkowe kompozycje.
                    </p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-card">
                                <div className="product-img-container">
                                    <img
                                        src="/src/assets/sztaba.jpg"
                                        className="product-img"
                                        alt="Nowy zapach 1"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-2">Nowy Zapach 1</h5>
                                    <p className="card-text mb-3">99.99zł</p>
                                    <button className="btn w-100">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="product-card">
                                <div className="product-img-container">
                                    <img
                                        src="/src/assets/vers.jpg"
                                        className="product-img"
                                        alt="Nowy zapach 2"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-2">Nowy Zapach 2</h5>
                                    <p className="card-text mb-3">119.99zł</p>
                                    <button className="btn w-100">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="product-card">
                                <div className="product-img-container">
                                    <img
                                        src="/src/assets/hugo.jpg"
                                        className="product-img"
                                        alt="Nowy zapach 3"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-2">Nowy Zapach 3</h5>
                                    <p className="card-text mb-3">129.99zł</p>
                                    <button className="btn w-100">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/products"
                        className="btn btn-lg mt-5"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Zobacz wszystkie nowości
                    </Link>
                </div>
            </section>

            <section className="bestsellers py-5">
                <div className="container text-center">
                    <h2 className="mb-2">Bestsellery</h2>
                    <p className="lead mb-5">Poznaj najczęściej wybierane zapachy.</p>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="product-card card h-100 border-0 shadow-sm">
                                <div className="product-img-container">
                                    <img 
                                        src="/src/assets/dior.jpg" 
                                        className="product-img" 
                                        alt="Bestseller 1"
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Bestseller 1</h5>
                                    <p className="card-text mb-4">89.99zł</p>
                                    <button className="btn mt-auto">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-card card h-100 border-0 shadow-sm">
                                <div className="product-img-container">
                                    <img 
                                        src="/src/assets/ogien.jpg" 
                                        className="product-img" 
                                        alt="Bestseller 2"
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Bestseller 2</h5>
                                    <p className="card-text mb-4">109.99zł</p>
                                    <button className="btn mt-auto">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-card card h-100 border-0 shadow-sm">
                                <div className="product-img-container">
                                    <img 
                                        src="/src/assets/ziomal.jpg" 
                                        className="product-img" 
                                        alt="Bestseller 3"
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Bestseller 3</h5>
                                    <p className="card-text mb-4">119.99zł</p>
                                    <button className="btn mt-auto">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/products" className="btn btn-lg mt-5">Zobacz nasze bestsellery</Link>
                </div>
            </section>

            <section className="brands py-5">
                <div className="container text-center">
                    <h2 className="mb-2">Ekskluzywne marki</h2>
                    <p className="lead mb-5">Wybierz spośród najlepszych marek na rynku.</p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="brand-card">
                                <div className="product-img-container">
                                    <img 
                                        src="/src/assets/valentino.jpg" 
                                        className="product-img" 
                                        alt="Marka 1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="brand-card">
                                <div className="product-img-container">
                                    <img 
                                        src="/src/assets/gucci.jpg" 
                                        className="product-img" 
                                        alt="Marka 2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="brand-card">
                                <div className="product-img-container">
                                    <img 
                                        src="/src/assets/robot.jpg" 
                                        className="product-img" 
                                        alt="Marka 3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/brands" className="btn btn-lg mt-5">Zobacz wszystkie marki</Link>
                </div>
            </section>

            <section className="newsletter py-5">
                <div className="container text-center">
                    <h2 className="mb-2">Zapisz się do naszego newslettera</h2>
                    <p className="lead mb-4">Bądź na bieżąco z nowościami i promocjami!</p>
                    <form className="newsletter-form mx-auto">
                        <div className="input-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Twój email" 
                                required
                            />
                            <button type="submit" className="btn">Zapisz się</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;


