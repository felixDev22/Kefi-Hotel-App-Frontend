import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Main from './components/main/Main';
import './App.css';
import Reserve from './components/Reseve/Reserve';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/main' element={<Main />} />
          <Route path='/reserve' element={<Reserve />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
