import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/about">Acerca de Nosotros</Link></li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;