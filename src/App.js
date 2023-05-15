<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/main/Main';
=======
import Splash from './components/splash/Splash';
>>>>>>> dev

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
=======
        <Splash/>
>>>>>>> dev
    </div>
  );
}

export default App;
