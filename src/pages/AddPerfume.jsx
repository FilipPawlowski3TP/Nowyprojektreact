import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [nazwa, setNazwa] = useState('');
    const [marka, setMarka] = useState('');
    const [cena, setCena] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            nazwa,
            marka,
            cena,
        };

        try {
            const response = await axios.post('http://localhost:5000/perfumy', newProduct);
            setProducts([...products, response.data]);
            setNazwa('');
            setMarka('');
            setCena('');
        } catch (error) {
            console.error('Błąd dodawania produktu:', error);
        }
    };

    // Funkcja do usuwania produktu
    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/perfumy/${id}`);
            setProducts(products.filter((product) => product.id !== id)); // Usuwamy produkt z listy
        } catch (error) {
            console.error('Błąd usuwania produktu:', error);
        }
    };


    const loadProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/perfumy');
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Błąd ładowania produktów:', error);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    if (loading) return <p>Ładowanie produktów...</p>;

    return (
        <div className="container">
            <h2>Dodaj Nowy Perfum</h2>
            <form onSubmit={handleAddProduct}>
                <div className="form-group">
                    <label>Nazwa</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nazwa}
                        onChange={(e) => setNazwa(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Marka</label>
                    <input
                        type="text"
                        className="form-control"
                        value={marka}
                        onChange={(e) => setMarka(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cena</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cena}
                        onChange={(e) => setCena(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Dodaj Perfume
                </button>
            </form>

            <h2 className="mt-5">Lista Perfumerii</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{product.nazwa}</h5>
                                <p className="card-text">{product.cena} zł</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Usuń
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddProduct;
