import React from "react";
// import Cardcom from "./Cardcom"
import NavbarCom from "./NavbarCom";
import { useSelector } from "react-redux";

export default function UserAccount() {
  const showusername = useSelector((state) => state.baskit.user.username);
  const showemail = useSelector((state) => state.baskit.user.email);

  const showName = useSelector((state) => state.baskit.value);

  return (
    <div>
      <NavbarCom />
      <div class="container mt-10">
        <div class="row d-flex justify-content-center">
          <div class="col-md-14">
            <div class="card p-6 py-4">
              <div class="text-center">
                {" "}
                <img
                  src="./image/girl.png"
                  width="100"
                  class="rounded-circle"
                />{" "}
              </div>
              <div class="text-center mt-3">
                {/* <h5 class="mt-2 mb-0"> username :{showusername}</h5>  */}
                <h5 class="mt-2 mb-0"> email :{showemail}</h5>
                <div class="px-4 mt-1">
                  <p class="fonts"> </p>
                </div>

                <div>
                  <div class="contabasket">
                    <h2></h2>
                    <ul class="responsive-table">
                      <li class="table-header">
                        <div class="col col-1">Id</div>
                        <div class="col col-2">product</div>
                        <div class="col col-3">cost</div>
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
                              {card.price}$
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
