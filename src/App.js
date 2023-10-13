import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header px-8 py-6 box-shadow-1">
          <Navbar/>
        </header>
        <main className="App-body px-8">
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="services" element={<Services/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
          </Routes>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    </Router>
  );
}

export default App;
