import React, { useState } from 'react';

const productsList = [
    { id: 1, name: 'Nowy Zapach 1', price: 179.99 },
    { id: 2, name: 'Nowy Zapach 2', price: 699.99 },
    { id: 3, name: 'Nowy Zapach 3', price: 459.99 },
    { id: 4, name: 'Nowy Zapach 4', price: 299.99 },
    { id: 5, name: 'Nowy Zapach 5', price: 159.99 },
    { id: 6, name: 'Nowy Zapach 6', price: 99.99 },
];

// Komponent karty produktu
const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="card mb-4" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Cena: {product.price} zł</p>
                <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
                    Dodaj do koszyka
                </button>
            </div>
        </div>
    );
};

function Products() {
    const [products] = useState(productsList);
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(`${product.name} dodano do koszyka 👌`);
    };

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
