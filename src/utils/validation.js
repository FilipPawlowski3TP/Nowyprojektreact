export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  // Minimum 8 znaków, co najmniej jedna litera i jedna cyfra
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};

export const validateProduct = (product) => {
  const errors = {};
  
  if (!product.name || product.name.length < 3) {
    errors.name = 'Nazwa produktu musi mieć co najmniej 3 znaki';
  }
  
  if (!product.description || product.description.length < 10) {
    errors.description = 'Opis musi mieć co najmniej 10 znaków';
  }
  
  if (!product.price || isNaN(product.price) || product.price <= 0) {
    errors.price = 'Cena musi być liczbą większą od 0';
  }
  
  if (!product.image || !isValidUrl(product.image)) {
    errors.image = 'Podaj prawidłowy URL obrazu';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}; 