import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Splash from './components/splash/Splash';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes></Routes>
      </Router>
      <Splash />
    </div>
  );
}

export default App;
