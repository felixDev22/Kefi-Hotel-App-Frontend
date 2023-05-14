import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Delete from './components/Delete/Delete';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/delete-hotels" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
