import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import './app.css';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
