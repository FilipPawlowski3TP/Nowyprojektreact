import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddPerfume() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nazwa: '',
        marka: '',
        cena: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post('http://localhost:5000/perfumy', formData);
            navigate('/products'); // Przekierowanie do listy produktów
        } catch (err) {
            setError('Wystąpił błąd podczas dodawania produktu.');
            console.error('Błąd:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-perfume-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h1 className="text-center mb-4">Dodaj Nowy Produkt</h1>
                                
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="nazwa" className="form-label">Nazwa perfum</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nazwa"
                                            name="nazwa"
                                            value={formData.nazwa}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="marka" className="form-label">Marka</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="marka"
                                            name="marka"
                                            value={formData.marka}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="cena" className="form-label">Cena (zł)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="cena"
                                            name="cena"
                                            value={formData.cena}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn w-100"
                                        disabled={loading}
                                    >
                                        {loading ? 'Dodawanie...' : 'Dodaj produkt'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPerfume;
