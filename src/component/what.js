import React from "react";

export default function what(props) {
  return (
    <div id="divyCardakan">
      <div
        class="col-md-8 mt-8"
        style={{ width: "20rem", height: "20rem", marginLeft: "20px" }}
      >
        <div class="card profile-card-5">
          <div class="card-img-block">
            <img class="card-img-top" src={props.image} height={200} />
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title"> {props.title}</h5>
            <p class="card-text"> price :{props.cost} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
