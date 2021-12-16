import React from "react";
import { Button, Card } from "react-bootstrap";
import Home from "./Home";
import { Link } from "react-router-dom";
import ShowProduct from "./ShowProduct";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../cart/api";
export default function Cardcom(props) {
  return (
    <div id="divyCardakan">
      <div
        class="col-md-4 mt-4"
        style={{ width: "18rem", height: "20rem", marginLeft: "50px" }}
      >
        <div class="card profile-card-5">
          <div class="card-img-block">
            <img class="card-img-top" src={props.image}   height={200}/>
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title"> {props.title}</h5>
            <p class="card-text"> price :{props.cost} $</p>

            <Button className="buttonInTheCard">
              <Link className="linkstyle" to={`/Product/${props.id}`}>
                show more details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
