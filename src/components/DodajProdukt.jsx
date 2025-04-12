import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { validateProduct } from '../utils/validation';

const DodajProdukt = () => {
  const [formData, setFormData] = useState({
    nazwa: '',
    marka: '',
    cena: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    
    if (name === 'nazwa' && (!value || value.length < 3)) {
      error = 'Nazwa musi mieć co najmniej 3 znaki';
    }
    
    if (name === 'marka' && !value) {
      error = 'Marka jest wymagana';
    }
    
    if (name === 'cena' && (!value || isNaN(value) || parseFloat(value) <= 0)) {
      error = 'Cena musi być liczbą większą od 0';
    }
    
    if (name === 'image' && !value) {
      error = 'URL obrazu jest wymagany';
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Sprawdzenie wszystkich pól
    Object.keys(formData).forEach(field => {
      validateField(field, formData[field]);
    });
    
    if (Object.values(errors).some(error => error) || 
        Object.keys(touched).length !== Object.keys(formData).length) {
      toast.error('Popraw błędy w formularzu');
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/perfumy', {
        ...formData,
        cena: parseFloat(formData.cena)
      });

      if (response.data) {
        toast.success('Produkt został dodany pomyślnie!');
        navigate('/products');
      }
    } catch (error) {
      toast.error('Wystąpił błąd podczas dodawania produktu');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div 
              className="card border-0 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body p-4">
                <h1 className="text-center mb-4">Dodaj Nowy Produkt</h1>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nazwa" className="form-label">Nazwa produktu</label>
                    <input
                      type="text"
                      className={`form-control ${errors.nazwa ? 'is-invalid' : ''}`}
                      id="nazwa"
                      name="nazwa"
                      value={formData.nazwa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.nazwa && (
                      <div className="invalid-feedback">
                        {errors.nazwa}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="marka" className="form-label">Marka</label>
                    <input
                      type="text"
                      className={`form-control ${errors.marka ? 'is-invalid' : ''}`}
                      id="marka"
                      name="marka"
                      value={formData.marka}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.marka && (
                      <div className="invalid-feedback">
                        {errors.marka}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="cena" className="form-label">Cena (zł)</label>
                    <input
                      type="number"
                      className={`form-control ${errors.cena ? 'is-invalid' : ''}`}
                      id="cena"
                      name="cena"
                      value={formData.cena}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      min="0"
                      step="0.01"
                    />
                    {errors.cena && (
                      <div className="invalid-feedback">
                        {errors.cena}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="image" className="form-label">URL obrazu</label>
                    <input
                      type="url"
                      className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.image && (
                      <div className="invalid-feedback">
                        {errors.image}
                      </div>
                    )}
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Dodawanie...' : 'Dodaj produkt'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => navigate('/products')}
                    >
                      Anuluj
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DodajProdukt; 