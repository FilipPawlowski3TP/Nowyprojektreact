import React, { useState } from "react";

const Contact = () => {
    const initialFormData = {
        name: "Jan Kowalski",
        email: "jan.kowalski@o2.com",
        subject: "Pytanie o produkt",
        message: "Czy mogę dostać rabat na zakup? 🥺"
    };


    const [formData, setFormData] = useState(initialFormData);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Formularz wysłany z danymi:", formData);
    };

    return (
        <div className="container mt-4">
            <h1>Kontakt</h1>
            <p>Masz pytania? Skontaktuj się z nami, wypełniając formularz poniżej.</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Imię i nazwisko</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adres e-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Temat</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Wiadomość</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Wyślij wiadomość</button>
            </form>

            <div className="mt-4">
                <h3>Wprowadzone dane:</h3>
                <p><strong>Imię i nazwisko:</strong> {formData.name}</p>
                <p><strong>Adres e-mail:</strong> {formData.email}</p>
                <p><strong>Temat:</strong> {formData.subject}</p>
                <p><strong>Wiadomość:</strong> {formData.message}</p>
            </div>
        </div>
    );
};

export default Contact;
