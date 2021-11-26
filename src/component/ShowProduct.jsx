import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../service/appApi";
import NavbarCom from "./NavbarCom";
import { useSelector } from "react-redux";
export default function ShowProduct() {
  const showName = useSelector((state) => state.baskit.value);
  const dispatch = useDispatch();

  return (
    <>
     {/* <NavbarCom /> */}
      <div id="showproduct">
        <div class="container py-4 my-4 mx-auto d-flex flex-column">
         

          <div class="header">
            <div class="row r1"></div>
            <div class="footer d-flex flex-column ">
              <div class="row r4">
               
            <div className="cartstyle">
                <Link to="/InBasket" >
               <img src="./image/shopping-trolley.png" width="85px"  />
               </Link>
            {showName.length}
         
               </div>
                <div class="col-md-2 myt ">
                  <button type="button" class="btn btn-warning">
                    <a
                   
                      onClick={() =>
                        dispatch(addToBasket({ name: "baby bed", cost: " .$" }))
                      }
                    >
                      BUY NOW
                    </a>
                  </button>
               
                </div>
              </div>
              <div class="col-md-9 abc">
                <h1>my product</h1>
              </div>
            </div>
          </div>
          <div class="container-body mt-4">
            <div class="row r3">
              <div class="col-md-5 p-0 klo">
                <ul className="ulcode">
                  <li>100% Quality</li>
                  <li>cost: 35$</li>
                  <li>Easy Returns</li>
                  <li>for new birth baby</li>
                  <li>Normal Delivery : 4-5 Days</li>
                  <li>Express Delivery : 2-3 Days</li>
                  
                </ul>
              </div>
              <div class="col-md-7">
                {" "}
                <img
                  src="./image/image.jpg"
                  width="70%"
                  height="80%"
                />{" "}
              </div>
              <div class="col-md-2 myt des">
                  {" "}
                  <Link to="/Product"> BACK TO PRODUCT</Link>
                </div>
                <div class="col-md-2 myt des">
                  <Link to="/">BACK TO HOME</Link>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
