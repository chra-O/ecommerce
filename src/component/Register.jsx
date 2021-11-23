import React from 'react'
import NavbarCom from "./NavbarCom"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {login} from "../service/appApi"

export default function Register() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
      });
      const dispatch = useDispatch();

      const handleUserName = (e) => {
        const userName = { ...user };
        userName.username = e.target.value;
        setUser(userName);
      
      };

      const handleEmail = (e) => {
        const userEmail = { ...user };
        userEmail.email = e.target.value;
        setUser(userEmail);
        
      };
      const handlePassword = (e) => {
        const userpassword = { ...user };
        userpassword.password = e.target.value;
        setUser(userpassword);
      
      };
      const acionFunction = () => {
        dispatch(login(user));
      };
    return (
        <div>
            <NavbarCom />
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
            <div class="row d-flex">
            <div class="col-lg-12">
           
                <div class="card2 card border-0 px-4 py-5">
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">REGISTER </h6>
                        <div class="facebook text-center mr-3">
                            <div class="fa fa-facebook"></div>
                        </div>
                        <div class="twitter text-center mr-3">
                            <div class="fa fa-twitter"></div>
                        </div>
                        <div class="linkedin text-center mr-3">
                            <div class="fa fa-linkedin"></div>
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center"> </small>
                        <div class="line"></div>
                    </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">user name</h6>
                        </label> <input class="mb-4" type="text"  placeholder="Enter user name" onChange={(e) => handleUserName(e)} /> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Email Address</h6>
                        </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address"  onChange={(e) => handleEmail(e)}/> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password"  onChange={(e) => handlePassword(e)}/> </div>
                    <div class="row px-3 mb-4">
                        
                    </div>
                    <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center"   onClick={() => acionFunction()}><Link className="linkstyle" to="/LoginCom">LOGIN</Link></button> </div>
                   
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
