# Aplikacja React z Systemem Uwierzytelniania

Prosta aplikacja React z systemem logowania i rejestracji, wykorzystująca localStorage jako backend.

## Autorzy
Filip Pawlowski | Kajetan Kafka | Michal Sliwka | 4TP

## Funkcjonalności

- Rejestracja nowych użytkowników
- Logowanie użytkowników
- Walidacja formularzy
- Responsywny interfejs użytkownika
- Animacje i efekty wizualne
- System powiadomień

## Technologie

- React
- React Router
- Bootstrap
- AOS (Animate On Scroll)
- React Toastify
- localStorage (backend)

## Instalacja

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom JSON Server (baza danych):
```bash
npx json-server --watch db.json --port 5000
```

3. Uruchom aplikację:
```bash
npm run dev
```

## Struktura projektu

```
src/
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── ...
├── context/
│   └── AuthContext.jsx
├── utils/
│   └── validation.js
└── ...
```

## Walidacja formularzy

Aplikacja zawiera system walidacji dla:
- Adresu email
- Hasła
- Potwierdzenia hasła

## Bezpieczeństwo

- Hasła są przechowywane w localStorage (dla celów demonstracyjnych)
- Walidacja po stronie klienta
- Zabezpieczone trasy dla zalogowanych użytkowników

## Licencja

MIT



