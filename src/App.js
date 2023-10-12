import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header px-8 py-6 box-shadow-1">
        <Navbar/>
      </header>
      <div className="App-body px-8">
        <Home/>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
