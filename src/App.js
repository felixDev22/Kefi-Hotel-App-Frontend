import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Delete from './components/Delete/Delete';
import Splash from './components/splash/Splash';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/delete-hotels" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
