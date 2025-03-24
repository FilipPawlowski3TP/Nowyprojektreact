import React from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2000,
    once: true,
});

const Home = () => {
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
                    <h2 data-aos="fade-up">Nowości w naszej ofercie</h2>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">
                        Zobacz najnowsze zapachy i odkryj wyjątkowe kompozycje.
                    </p>
                    <div className="row my-4">
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card text-center">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/src/assets/sztaba.jpg"
                                        className="card-img-top"
                                        alt="Nowy zapach 1"
                                        style={{maxHeight: '25em', maxWidth: '15em'}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nowy Zapach 1</h5>
                                    <p className="card-text">99.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="card text-center">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/src/assets/vers.jpg"
                                        className="card-img-top"
                                        alt="Nowy zapach 2"
                                        style={{maxHeight: '25em', maxWidth: '15em'}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nowy Zapach 2</h5>
                                    <p className="card-text">119.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="card text-center">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/src/assets/hugo.jpg"
                                        className="card-img-top"
                                        alt="Nowy zapach 3"
                                        style={{maxHeight: '25em', maxWidth: '15em'}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nowy Zapach 3</h5>
                                    <p className="card-text">129.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/products"
                        className="btn btn-secondary btn-lg"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Zobacz wszystkie nowości
                    </Link>
                </div>
            </section>

            <section className="bestsellers py-5">
                <div className="container text-center">
                    <h2>Bestsellery</h2>
                    <p className="lead">Poznaj najczęściej wybierane zapachy.</p>
                    <div className="row my-4">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/src/assets/dior.jpg" className="card-img-top" alt="Bestseller 1"
                                     style={{maxHeight: '25em', maxWidth: '15em'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Bestseller 1</h5>
                                    <p className="card-text">89.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/src/assets/ogien.jpg" className="card-img-top" alt="Bestseller 2"
                                     style={{maxHeight: '25em', maxWidth: '15em'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Bestseller 2</h5>
                                    <p className="card-text">109.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/src/assets/ziomal.jpg" className="card-img-top" alt="Bestseller 3"
                                     style={{maxHeight: '25em', maxWidth: '15em'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Bestseller 3</h5>
                                    <p className="card-text">119.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/products" className="btn btn-secondary btn-lg">Zobacz nasze bestsellery</Link>
                </div>
            </section>

            <section className="brands py-5">
                <div className="container text-center">
                    <h2>Ekskluzywne marki</h2>
                    <p className="lead">Wybierz spośród najlepszych marek na rynku.</p>
                    <div className="d-flex justify-content-center mt-4 mb-3">
                        <img src="/src/assets/valentino.jpg" alt="Marka 1" className="img-fluid me-5"
                             style={{maxHeight: '25em', maxWidth: '15em'}}/>
                        <img src="/src/assets/gucci.jpg" alt="Marka 2" className="img-fluid mx-5"
                             style={{maxHeight: '25em', maxWidth: '15em'}}/>
                        <img src="/src/assets/robot.jpg" alt="Marka 3" className="img-fluid ms-5"
                             style={{maxHeight: '25em', maxWidth: '15em'}}/>
                    </div>
                    <Link to="/brands" className="btn btn-secondary btn-lg">Zobacz wszystkie marki</Link>
                </div>
            </section>

            <section className="newsletter py-5">
                <div className="container text-center">
                    <h2 className="text-center">Zapisz się do naszego newslettera</h2>
                    <p className="lead text-center">Bądź na bieżąco z nowościami i promocjami!</p>
                    <form className="form-inline d-flex justify-content-center w-50 my-2 mx-auto">
                        <input type="email" className="form-control w-75" placeholder="Twój email" required/>
                        <button type="submit" className="btn btn-primary ms-2">Zapisz się</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
