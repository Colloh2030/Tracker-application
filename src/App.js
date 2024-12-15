import logo from './logo.svg';
import './App.css';
import './components/Navbar';

function App() {
  return (
    <div className="App">
      <>Navbar</>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h>My Daily Activity Tracking Application</h>
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
