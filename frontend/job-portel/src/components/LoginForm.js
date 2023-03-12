import React, {useState, useContext} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './LoginForm.css'
import { NavLink, redirect, useNavigate } from "react-router-dom";
import useAxios from 'axios-hooks';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { login } = useContext(AuthContext);
    const [user, setUser] = useState(null);

    const handleSubmit = () => {
         axios({
            method: 'post',
            url: 'http://localhost:8000/company/auth/company/login',
            data: {
                email: email,
                password: password
              }
         }) .then(function (response) {
              //console.log(response.data.token);
              axios({
                  method: 'get',
                  url: 'http://localhost:8000/company/info',
                  headers: {
                      'Authorization' : `Bearer ${response.data.token}`
                  }
              }).then( (res)=> {
                    //console.log(res.data.data.company.name)
                    login(response.data.token, res.data.data.company.name, res.data.data.company.id);
                    navigate("/company/postjob");
                  })
                .catch( (error) => alert(error) );
            })
          .catch(function (error) {
            alert(error);
          });
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
        <div className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" onChange={(e)=>setEmail(e.target.value)} placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <button className="btn mt-3" onClick={()=>handleSubmit()}>Login</button>
        </div>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>

    <NavLink to="/hiring" className="nav-link active"><button className='btn btn-primary'>Post Jobs</button></NavLink>
    </>
  )
}

export default LoginForm
