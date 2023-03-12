import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './LoginForm.css'
import { NavLink } from "react-router-dom";
import useAxios from 'axios-hooks';
const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [
        { data, loading, error },
        loginCompany
    ] = useAxios(
        {
            url: 'http://localhost:8002/company/auth/company/login',
            method: 'PUT'
        },
        { manual: true }
    )

    const handleSubmit = () => {
        loginCompany({
            data: {
                email: email,
                password: password
            }
        })
    }
    return (
    <>
     
       <div className="wrapper">
        <div className="logo">
            <img src="https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/36805/Logo.jpg" alt="" className='login-img'/>
        </div>
        <div className="text-center mt-4 name">
            JOBHIVE
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" onChange={(e)=>setEmail(e.target.value)} placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <button className="btn mt-3" onClick={()=>handleSubmit()}>Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>

    <NavLink to="/hiring" className="nav-link active"><button className='btn btn-primary'>Post Jobs</button></NavLink>
    </>
  )
}

export default LoginForm