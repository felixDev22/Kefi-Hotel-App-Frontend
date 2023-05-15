import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navigation from './components/navigation/Navigation';
// import Main from './components/main/Main';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
