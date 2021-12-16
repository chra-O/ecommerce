import React from "react";
import { Link } from "react-router-dom";
import { login } from "../service/appApi";
import FooterCom from "./FooterCom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavbarCom from "./NavbarCom";
import { useSelector } from "react-redux";


export default function LoginCom() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
 
  const showusername = useSelector((state) => state.baskit.user.username);
  const showpassword = useSelector((state) => state.baskit.user.password);
  const showemail = useSelector((state) => state.baskit.user.email);

  const dispatch = useDispatch();
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

  let navigate = useNavigate();
  const acionFunction = () => {
    dispatch(login(user));
    if(user.email === " " || user.password === "" ){
      alert("you miss a fild")
    }else{
    if (showemail === user.email && showpassword === user.password) {
      navigate("/UserAccount");
    } else {
     alert("pls regisetr first");
    }
    }
  };
  return (
    <div>
      <NavbarCom />

      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" id="whatF">
        <div class="card card0 border-0">
          <div class="row d-flex">
            <div class="col-lg-4">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  <img
                    src="https://c.tenor.com/n2Pnf0j5PlIAAAAC/mail-download.gif"
                    class="image"
                  />{" "}
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card2 card border-0 px-4 py-5">
                <div class="row mb-4 px-3">
                  <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
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
                  <div class="line"></div>{" "}
                  <small class="or text-center"> </small>
                  <div class="line"></div>
                </div>
                <div class="row px-3">
                  {" "}
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                  </label>{" "}
                  <input
                    class="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                    onChange={(e) => handleEmail(e)}
                  />{" "}
                </div>
                {/* <div class="row px-3">
                  {" "}
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                  </label>{" "}
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={(e) => handlePassword(e)}
                  />{" "}
                </div> */}
                <div class="row px-3 mb-4">
                  <div class="custom-control custom-checkbox custom-control-inline"></div>{" "}
                  {/* <a href="#" class="ml-auto mb-0 text-sm">
                    Forgot Password?
                  </a> */}
                </div>
                <div class="row mb-3 px-3">
                  {" "}
                  <button
                    type="submit"
                    class="btn btn-blue text-center"
                    onClick={() => acionFunction()}
                  >
                    {" "}
                    login
                  </button>{" "}
                </div>
                {/* <div class="row mb-4 px-3">
                  {" "}
                  <small class="font-weight-bold">
                    Don't have an account?{" "}
                    <Link className="linkstyle" to="/Register">
                      REGISTER
                    </Link>
                  </small>{" "}
                </div> */}
              </div>
            </div>
          </div>
          <div class="bg-blue py-4">
            <div class="social-contact ml-4 ml-sm-auto">
              {" "}
              <span class="fa fa-facebook mr-4 text-sm"></span>{" "}
              <span class="fa fa-google-plus mr-4 text-sm"></span>{" "}
              <span class="fa fa-linkedin mr-4 text-sm"></span>{" "}
              <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <FooterCom/> */}
    </div>
  
    //  <Link className="linkstyle" to="/UserAccount">Login </Link>
  );
}
