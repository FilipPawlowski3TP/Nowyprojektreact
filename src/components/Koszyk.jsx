import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Koszyk() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await axios.get('http://localhost:5000/koszyk');
            setCartItems(response.data);
            setLoading(false);
        } catch (err) {
            setError('Nie udało się załadować koszyka');
            setLoading(false);
        }
    };

    const removeFromCart = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/koszyk/${id}`);
            fetchCart();
        } catch (err) {
            console.error('Błąd podczas usuwania z koszyka:', err);
        }
    };

    const updateQuantity = async (id, newQuantity) => {
        if (newQuantity < 1) return;
        try {
            await axios.patch(`http://localhost:5000/koszyk/${id}`, {
                quantity: newQuantity
            });
            fetchCart();
        } catch (err) {
            console.error('Błąd podczas aktualizacji ilości:', err);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (parseFloat(item.cena) * item.quantity);
        }, 0).toFixed(2);
    };

    if (loading) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Ładowanie...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Twój Koszyk</h2>
            
            {cartItems.length === 0 ? (
                <div className="alert alert-info">
                    Twój koszyk jest pusty. <a href="/products" className="alert-link">Przejdź do sklepu</a>
                </div>
            ) : (
                <>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Produkt</th>
                                    <th>Marka</th>
                                    <th>Cena</th>
                                    <th>Ilość</th>
                                    <th>Suma</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nazwa}</td>
                                        <td>{item.marka}</td>
                                        <td>{item.cena} zł</td>
                                        <td>
                                            <div className="input-group" style={{ width: '120px' }}>
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <input 
                                                    type="number" 
                                                    className="form-control text-center" 
                                                    value={item.quantity}
                                                    readOnly
                                                />
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>{(parseFloat(item.cena) * item.quantity).toFixed(2)} zł</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Usuń
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 offset-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Podsumowanie zamówienia</h5>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Suma częściowa:</span>
                                        <span>{calculateTotal()} zł</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Dostawa:</span>
                                        <span>0.00 zł</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <strong>Razem:</strong>
                                        <strong>{calculateTotal()} zł</strong>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-3">
                                        Przejdź do kasy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Koszyk; 