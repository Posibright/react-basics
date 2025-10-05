import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import About from "./components/About"
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
