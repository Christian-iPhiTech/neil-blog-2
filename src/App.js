import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header px-8 py-6 box-shadow-1">
          <Navbar/>
        </header>
        <main className="App-body px-8">
          <Routes>
            <Route index element={<Home />}/>
            <Route path="create" element={<CreateBlog />}/>
            <Route path="blogs/:title/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    </Router>
  );
}

export default App;
