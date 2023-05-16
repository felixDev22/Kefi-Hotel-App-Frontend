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
import Main from './components/main/Main';

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

  return (
    <>
      {!isSplashPage && !isLoginPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/delete-hotels" element={<Delete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
