<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Delete from './components/Delete/Delete';
=======
import Splash from './components/splash/Splash';
>>>>>>> 5a7c7efc7fde41513790a0c25d6e379c01858be1

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Navigation />
        <Routes>
          <Route path="/delete-hotels" element={<Delete />} />
        </Routes>
      </Router>
=======
        <Splash/>
>>>>>>> 5a7c7efc7fde41513790a0c25d6e379c01858be1
    </div>
  );
}

export default App;
