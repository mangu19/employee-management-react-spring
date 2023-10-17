import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
   <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
   
   </>
  );
}

export default App;
