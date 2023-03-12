import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import JobListing from './components/Job_listing'

function App() {
  return (
    <>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				  <Route path="/about" element={<About/>} />
          <Route path="/company/login" element={<Login/>} />
          <Route path="/hiring" element={<JobListing/>} />
				</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
