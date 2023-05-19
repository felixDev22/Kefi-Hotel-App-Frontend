import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Delete from './components/Delete/Delete';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Main from './components/main/Main';
import Room from './components/Rooms/Room';
import './App.css';
import AddHotel from './components/addHotel/AddHotel';
import Reserve from './components/Reseve/Reserve';
import Navigation from './components/navigation/Navigation';
import { Services } from './components/ourServices/Services';

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
      {!isSplashPage && !isSignupPage && !isLoginPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/delete-hotels" element={<Delete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/add-hotels" element={<AddHotel />} />
        <Route path="/hotel/:id/reserve" element={<Reserve />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
