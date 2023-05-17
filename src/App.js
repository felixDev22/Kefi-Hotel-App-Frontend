import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import { useLocation } from 'react-router-dom';
import Delete from './components/Delete/Delete';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Main from './components/main/Main';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>

        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isSplashPage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  return (
    <>
      {!isSplashPage && !isSignupPage  && !isLoginPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/delete-hotels" element={<Delete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
