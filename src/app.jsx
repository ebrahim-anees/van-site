import {
  BrowserRouter as ParentRouter,
  Routes as ChildRouter,
  Route as URL,
} from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';

export default function App() {
  return (
    <ParentRouter>
      <Navbar />
      <ChildRouter>
        <URL path="/" element={<Home />} />
        <URL path="/about" element={<About />} />
        <URL path="/vans" element={<Vans />} />
      </ChildRouter>
    </ParentRouter>
  );
}
