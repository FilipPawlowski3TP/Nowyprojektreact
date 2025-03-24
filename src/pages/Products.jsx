import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Komponent karty produktu
const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="card mb-4" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{product.nazwa}</h5>
                <p className="card-text">Cena: {product.cena} zł</p>
                <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
                    Dodaj do koszyka
                </button>
            </div>
        </div>
    );
};

function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Pobieranie produktów z JSON Server
        axios.get('http://localhost:5000/perfumy')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Błąd podczas pobierania produktów');
                setLoading(false);
            });
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(`${product.nazwa} dodano do koszyka 👌`);
    };

    if (loading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Lista produktów</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <ProductCard product={product} onAddToCart={addToCart} />
                    </div>
                ))}
            </div>
            <div className="mt-4 text-center">
                <p>Elementy w koszyku: {cart.length}</p>
            </div>
        </div>
    );
}

export default Products;
