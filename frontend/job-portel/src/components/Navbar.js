import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg  sticky-top ">
  <div className="container-fluid">
  
    <NavLink to="/" className='navbar-brand '><div style={{display:'flex'}}><i class="fa-solid fa-handshake-angle" style={{margin:'10px',fontSize:'1.8rem'}}></i><h3>JOBHIVE</h3></div></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 navbar-items">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink to="/" className="nav-link active">
									<span className="navitem">Home</span>
								</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
          <NavLink to="/about" className="nav-link active">
									<span className="navitem">About</span>
								</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#"><button type="button" class="btn btn-primary login-btn">Login/Signup</button></a> */}
          <NavLink to="/company/login" className="nav-link active">
          <button type="button" class="btn btn-primary login-btn" >For_Hiring</button>
								</NavLink>
        </li>
      </ul>
     
    </div> 
  </div>
</nav>
    </>
  )
}

export default Navbar