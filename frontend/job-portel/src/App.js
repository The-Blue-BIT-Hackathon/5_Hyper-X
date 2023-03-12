import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import JobListing from './components/Job_listing'
import LoginForm from './components/TempLogin.jsx';
import AuthProvider from './context/AuthProvider';

function App() {
  
  return (
    <>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				  <Route path="/about" element={<About/>} />
          <Route path="/company/login" element={<AuthProvider><Login/></AuthProvider>} />
          <Route path="/company/postjob" element={<AuthProvider><JobListing/></AuthProvider>} />
				</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
