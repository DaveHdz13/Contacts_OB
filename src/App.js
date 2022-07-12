import logo from './logo.svg';
import './App.css';
import ContactBox from './components/container/ContactBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactBox />
      </header>
    </div>
  );
}

export default App;
