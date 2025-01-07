import { Routes, Route } from 'react-router-dom';
import IndexP from './pages/IndexP'; // Import IndexP component
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginP from './pages/LoginP';
import RegisterP from './pages/RegisterP';
import Layout from './Layout';




function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path="/" element={<IndexP />} /> 
      <Route path='/login' element={<LoginP />} />
      <Route path="/register" element={<RegisterP />} /> 
      </Route>
    </Routes>
  );
}

export default App;
