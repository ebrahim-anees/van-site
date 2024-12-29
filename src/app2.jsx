import { BrowserRouter, Routes, Route as URL, Link } from 'react-router';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
export default function App() {
  let num = 0;
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Routes>
        <URL path="/" element={<Home />} />
        <URL path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
