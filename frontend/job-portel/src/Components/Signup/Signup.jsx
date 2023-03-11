import React, { useState } from "react";
import "./LoginForm.css";
import Card from "../Card/Card";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { database } from "../../utils/database";



const LoginForm =({setIsLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});

     const errors = {
        username: "Invalid username",
        password: "Invalid password",
        noUsername: "Please enter your username",
        noPassword: "Please enter your password",
     };

     const handleSubmit = (e) => {
         // Prevent page from reloading
         e.preventDefault();

         if (!username) {
               // Username input is empty
               setErrorMessages({ name: "noUsername", message: errors.noUsername });
               return;
             }

             if (!password) {
               // Password input is empty
               setErrorMessages({ name: "noPassword", message: errors.noPassword });
               return;
             }

             // Search for user credentials
             const currentUser = database.find((user) => user.username === username);

             if (currentUser) {
               if (currentUser.password !== password) {
                 // Wrong password
                 setErrorMessages({ name: "password", message: errors.password });
               } else {
                 // Correct password, log in user
                 setErrorMessages({});
                 setIsLoggedIn(true);
               }
             } else {
               // Username doens't exist in the database
               setErrorMessages({ name: "username", message: errors.username });
             }
     };

     // Render error messages
        const renderErrorMsg = (name) =>
            name === errorMessages.name && (
            <p className="error_msg">{errorMessages.message}</p>
        );




  return (
    <Card>
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">
        Fill the Details Given Below !
      </p>
      <form onSubmit={handleSubmit}>



        <div className="inputs_container">
        <input
          type="text"
          placeholder="Name"
        />

                <input
                   type="Number"
                   placeholder="Mobile-Number"
                />

        <input
           type="email"
           placeholder="Email_id"
        />


          <input
            type="text"
            placeholder="Username"
          />
{/*           {renderErrorMsg("username")} */}
{/*           {renderErrorMsg("noUsername")} */}

          <input
            type="password"
            placeholder="Password"
          />
{/*           {renderErrorMsg("password")} */}
{/*           {renderErrorMsg("noPassword")} */}

        </div>

        <input type="submit" value="Sign Up" className="login_button" />
      </form>
      <div className="link_container">
        <a href="" className="small">
          Sign In
        </a>
      </div>

{/*       <p className="subtitle1">Or Sign Up Using </p> */}
      <div className="icons">
        <GoogleIcon className="icon" />
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>



    </Card>
  );
};

export default LoginForm;
