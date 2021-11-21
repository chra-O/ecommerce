import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../service/appApi";
import { useSelector } from "react-redux";
export default function ShowProduct() {
  const showName = useSelector((state) => state.baskit.value);
  const dispatch = useDispatch();

  return (
    <>
      <div id="showproduct">
        <div class="container py-4 my-4 mx-auto d-flex flex-column">
          <div className="basket">
            <Link to="/InBasket">
              <img src="./image/shopping-basket.png" width="50px" />
            </Link>
            {showName.length}
          </div>

          <div class="header">
            <div class="row r1"></div>
            <div class="footer d-flex flex-column mt-5">
              <div class="row r4">
                <div class="col-md-2 myt des">
                  {" "}
                  <Link to="/Product"> BACK TO PRODUCT</Link>
                </div>
                <div class="col-md-2 myt des">
                  <Link to="/">BACK TO HOME</Link>
                </div>
                <div class="col-md-2 mio offset-md-4"></div>
                <div class="col-md-2 myt ">
                  <button type="button" class="btn btn-outline-warning">
                    <a
                      href="#"
                      onClick={() =>
                        dispatch(addToBasket({ name: "hi", 2: "choni" }))
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
                <ul>
                  <li>100% Quality</li>
                  <li>Free Shipping</li>
                  <li>Easy Returns</li>
                  <li>12 Months Warranty</li>
                  <li>EMI Starting from (On Credit Cards)</li>
                  <li>Normal Delivery : 4-5 Days</li>
                  <li>Express Delivery : 2-3 Days</li>
                  <li>COD Available (All Over India)</li>
                </ul>
              </div>
              <div class="col-md-7">
                {" "}
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1670b022-3f90-4949-a6e9-955e442d1500/d56m5j1-75ae1e8a-923a-4b19-b5bb-94621efc88aa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2NzBiMDIyLTNmOTAtNDk0OS1hNmU5LTk1NWU0NDJkMTUwMFwvZDU2bTVqMS03NWFlMWU4YS05MjNhLTRiMTktYjViYi05NDYyMWVmYzg4YWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2CMY3-9-b6dyb1i4QqONoLgBMJ3kkcgHBh1NDnD0pm0"
                  width="80%"
                  height="80%"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
