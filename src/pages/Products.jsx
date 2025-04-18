import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Komponent karty produktu
const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card card h-100 border-0 shadow-sm" data-aos="fade-up">
            <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title text-center mb-2">{product.nazwa}</h5>
                <p className="card-subtitle text-muted text-center mb-3">{product.marka}</p>
                <div className="mt-auto text-center">
                    <p className="card-text mb-3">
                        <span className="price h4">{product.cena} zł</span>
                    </p>
                    <button 
                        className="btn w-100" 
                        onClick={() => onAddToCart(product)}
                    >
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
};

function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;

        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/perfumy', {
                    timeout: 5000,
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });
                
                if (mounted && response.data) {
                    if (Array.isArray(response.data) && response.data.length > 0) {
                        setProducts(response.data);
                        setError(null);
                    } else {
                        setError('Nie znaleziono produktów.');
                    }
                }
            } catch (err) {
                if (mounted) {
                    setError('Nie udało się załadować produktów. Spróbuj odświeżyć stronę.');
                    console.error('Błąd:', err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        const fetchCart = async () => {
            try {
                const response = await axios.get('http://localhost:5000/koszyk');
                if (mounted) {
                    setCart(response.data);
                }
            } catch (err) {
                console.error('Błąd podczas pobierania koszyka:', err);
            }
        };

        // Inicjalizacja AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        fetchProducts();
        fetchCart();

        // Cleanup function
        return () => {
            mounted = false;
        };
    }, []);

    const addToCart = async (product) => {
        if (!user) {
            toast.error('Musisz być zalogowany, aby dodać produkt do koszyka');
            navigate('/login');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/koszyk', {
                ...product,
                quantity: 1
            });
            
            if (response.data) {
                setCart(prevCart => [...prevCart, response.data]);
                toast.success('Produkt dodany do koszyka!');
            }
        } catch (err) {
            toast.error('Nie udało się dodać produktu do koszyka');
            console.error('Błąd:', err);
        }
    };

    if (loading) {
        return (
            <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Ładowanie...</span>
                    </div>
                    <p className="text-muted">Wczytywanie produktów...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                <div className="alert alert-danger" role="alert">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {error}
                    <button 
                        className="btn btn-outline-danger ms-3"
                        onClick={() => window.location.reload()}
                    >
                        Odśwież stronę
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="products-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="display-4 mb-3">Nasze Perfumy</h1>
                        <p className="lead text-muted">
                            Odkryj naszą ekskluzywną kolekcję zapachów
                        </p>
                        <p className="text-muted mb-0">
                            Znaleziono {products.length} produktów
                        </p>
                    </div>
                </div>
                
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                            <ProductCard product={product} onAddToCart={addToCart} />
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="cart-summary p-4 rounded-3 shadow-sm">
                                <h4 className="mb-3">Twój Koszyk</h4>
                                <p className="mb-0">Liczba produktów: <span className="badge bg-primary">{cart.length}</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
