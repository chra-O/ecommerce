import React from "react";
import { Button, Card } from "react-bootstrap";
import Home from "./Home";
import { Link } from "react-router-dom"
import ShowProduct from "./ShowProduct"
export default function Cardcom(props) {
  return (
    <div id="divyCardakan">
  
    		
    	
    		<div class="col-md-4 mt-4" style={{ width: "18rem", height:'20rem', marginLeft: "50px" } }>
    		    <div class="card profile-card-5">
    		        <div class="card-img-block">
    		            <img class="card-img-top" src="./image/work3.jpg" alt="Card image cap" />
    		        </div>
                    <div class="card-body pt-0">
                    <h5 class="card-title">Florence Garza</h5>
                    <p class="card-text">
                      
                      Some quick eontent.</p>
                      <Button   className="buttonInTheCard"><Link className="linkstyle" to="/ShowProduct">show more details</Link></Button>
                  </div>
                </div>
                
    		</div>
    		
    	</div>
  
      
    
  );
}
