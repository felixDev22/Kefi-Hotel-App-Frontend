import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
// import Main from './components/main/Main';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Main from './components/main/Main';
import SignUp from './components/signup/SignUp;
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
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
