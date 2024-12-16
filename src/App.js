import logo from './logo.svg';
import './App.css';
import './components/Navbar';
import './components/Footer'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar/>
    </div>,
    <div>
      <Footer/>
     
    </div>,
    <div>
      <Hero/>
    </div>
    
  );
}

export default App;
