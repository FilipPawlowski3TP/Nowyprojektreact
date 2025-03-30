import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj można dodać logikę wysyłania formularza
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="contact-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h1 className="text-center mb-4">Kontakt</h1>
                                <p className="text-center text-muted mb-4">
                                    Masz pytania? Skontaktuj się z nami!
                                </p>

                                {submitted && (
                                    <div className="alert alert-success" role="alert">
                                        Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name" className="form-label">Imię i nazwisko</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Temat</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">Wiadomość</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn w-100">
                                        Wyślij wiadomość
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="row mt-5 g-4">
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center p-4">
                                        <h5 className="mb-3">Adres</h5>
                                        <p className="text-muted mb-0">
                                            ul. Przykładowa 123<br />
                                            00-000 Warszawa
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center p-4">
                                        <h5 className="mb-3">Email</h5>
                                        <p className="text-muted mb-0">
                                            kontakt@perfumeria.pl<br />
                                            info@perfumeria.pl
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center p-4">
                                        <h5 className="mb-3">Telefon</h5>
                                        <p className="text-muted mb-0">
                                            +48 123 456 789<br />
                                            +48 987 654 321
                                        </p>
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

export default Contact;
