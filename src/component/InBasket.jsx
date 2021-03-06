import React from "react";
import NavbarCom from "./NavbarCom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteToBasket } from "../service/appApi";
import { Link } from "react-router-dom";
import LOginCom from "./LoginCom";
import { Popover, OverlayTrigger, Modal, Button } from "react-bootstrap";

export default function InBasket() {
  const dispatch = useDispatch();
  const showName = useSelector((state) => state.baskit.value);
  return (
    <div>
      <NavbarCom />
      <p id="howtobuy">
        to buy product click on this :{" "}
        <img src="./image/buy.png" width="30px" id="buy" />{" "}
      </p>

      <div class="contabasket">
        <h2></h2>

        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Id</div>
            <div class="col col-2">product</div>
            <div class="col col-3">cost</div>
            <div class="col col-4"> delete order</div>
            <Link className="linkstyle" to="/LoginCom">
              <OverlayTrigger trigger="click" placement="right">
                <img
                  src="./image/buy.png"
                  width="100px"
                  id="buy"
                  id="stylebuybuttonynawbasket"
                />
              </OverlayTrigger>
            </Link>
          </li>

          {showName.map((card, index) => {
            return (
              <li class="table-row">
                <div class="col col-1" data-label="Job Id">
                  {index + 1}
                </div>
                <div class="col col-2" data-label="Customer Name">
                  {card.name}
                </div>
                <div class="col col-3" data-label="Amount">
                  {card.price}$
                </div>
                <div class="col col-4" data-label="Payment Status">
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => dispatch(deleteToBasket(index))}
                  >
                    {" "}
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
