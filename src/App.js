import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
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
      {!isSplashPage && !isLoginPage && !isSignupPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/delete-hotels" element={<Delete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
