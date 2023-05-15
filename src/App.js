import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import './app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Splash} />
          <Route path="/login" component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
