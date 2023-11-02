import Footer from './components/Footer';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  
   
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const textColor = theme === 'light' ? '#333' : '#fff';


  return (
    <div style={{ backgroundColor, color: textColor }}>
      <Header />
      <div className="spacer">
        <div className="button-container">
          <button
            className="toggle-button"
            onClick={toggleTheme}
            style={{ backgroundColor, color: textColor }}
          >
            Toggle Theme
          </button>
        </div>
      </div>
      <Footer/>
     </div>
  );
}

export default App;
