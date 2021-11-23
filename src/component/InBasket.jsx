import React from "react";
import NavbarCom from "./NavbarCom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteToBasket } from "../service/appApi";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function InBasket() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        bda ba <strong> 3aydy xoman bet </strong>
      </Popover.Body>
    </Popover>
  );
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

            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <img
                src="./image/buy.png"
                width="100px"
                id="buy"
                id="stylebuybuttonynawbasket"
              />
            </OverlayTrigger>
          </li>

          {/* <div> {card.name} </div> */}

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
                  $350
                </div>
                <div class="col col-4" data-label="Payment Status">
                  <button
                    type="button"
                    class="btn btn-outline-warning"
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
