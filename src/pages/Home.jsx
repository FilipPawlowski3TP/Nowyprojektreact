import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <section className="hero d-flex justify-content-center align-items-center text-center">
                <div className="hero-content">
                    <h1 className="display-2">Odkryj perfumy, które mówią za Ciebie</h1>
                    <p className="lead">Najlepsze zapachy w jednym miejscu</p>
                    <Link to="/products" className="btn btn-primary btn-lg">Zacznij zakupy</Link>
                </div>
            </section>

            <section className="new-arrivals py-5">
                <div className="container text-center">
                    <h2>Nowości w naszej ofercie</h2>
                    <p className="lead">Zobacz najnowsze zapachy i odkryj wyjątkowe kompozycje.</p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
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
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="d-flex justify-content-center">
                                    <img src="/src/assets/vers.jpg" className="card-img-top" alt="Nowy zapach 2"
                                         style={{maxHeight: '25em', maxWidth: '15em'}}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nowy Zapach 2</h5>
                                    <p className="card-text">119.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="d-flex justify-content-center">
                                    <img src="/src/assets/hugo.jpg" className="card-img-top" alt="Nowy zapach 3"
                                         style={{maxHeight: '25em', maxWidth: '15em'}}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nowy Zapach 3</h5>
                                    <p className="card-text">129.99zł</p>
                                    <button className="btn btn-primary">Kup teraz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/products" className="btn btn-secondary btn-lg">Zobacz wszystkie nowości</Link>
                </div>
            </section>

            <section className="bestsellers py-5 bg-light">
                <div className="container text-center">
                    <h2>Bestsellery</h2>
                    <p className="lead">Poznaj najczęściej wybierane zapachy.</p>
                    <div className="row">
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
                    <div className="d-flex justify-content-center">
                        <img src="/src/assets/valentino.jpg" alt="Marka 1" className="img-fluid me-4"
                             style={{maxHeight: '25em', maxWidth: '15em'}}/>
                        <img src="/src/assets/gucci.jpg" alt="Marka 2" className="img-fluid mx-3"
                             style={{maxHeight: '25em', maxWidth: '15em'}}/>
                        <img src="/src/assets/robot.jpg" alt="Marka 3" className="img-fluid ms-4 "
                             style={{maxHeight: '25em', maxWidth: '15em'}}/>
                    </div>
                    <Link to="/brands" className="btn btn-secondary btn-lg">Zobacz wszystkie marki</Link>
                </div>
            </section>

            <section className="newsletter py-5 bg-light">
                <div className="container text-center">
                    <h2>Zapisz się do naszego newslettera</h2>
                    <p className="lead">Bądź na bieżąco z nowościami i promocjami!</p>
                    <form className="form-inline justify-content-center">
                        <input type="email" className="form-control mr-2" placeholder="Twój email" required/>
                        <button type="submit" className="btn btn-primary">Zapisz się</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
