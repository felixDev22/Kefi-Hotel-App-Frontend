import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navigation from './components/navigation/Navigation';
// import Main from './components/main/Main';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
