import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products.jsx';
import Contact from "./pages/Contact.jsx";
import AddPerfume from "./pages/AddPerfume.jsx";
import Koszyk from './components/Koszyk';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/addperfume" element={<AddPerfume />} />
                        <Route path="/koszyk" element={<Koszyk />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
