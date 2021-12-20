import React from "react";
import { Image, Carousel } from "react-bootstrap";
import Card from "./Cardcom";
import FooterCom from "./FooterCom";
import What from "./what";

import NavbarCom from "./NavbarCom";

export default function Home() {
  return (
    <>
      <NavbarCom />
      <div id="howOrder">
        <div id="container">
          <div class="product-details">
            <h1>MY BABY DESIGNER </h1>

            <span class="hint-star star">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-half-o" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </span>

            <p class="information">
              our project is to make baby nest and baby bed to new birth baby ,
              by me (Chra) and my MOM (Shahla)
            </p>
          </div>

          <div class="product-image">
            <Image src="https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/6218869/c4937bab6eb043fdb639eba335a511e1/1.gif?token-time=2145916800&token-hash=DnwSjUji_kjuh0xq_jQ0yWf7Y94BaJdfJXL5lv3sQrA%3D" />

            <div class="info">
              <h2>The Description</h2>
              <ul>
                <li>
                  <strong>since: </strong>2020
                </li>
                <li>
                  <strong>Instagram page: </strong>MY_BABY_DESIGNER
                </li>
                <li>
                  <strong>Facebook: </strong>my baby designer
                </li>
                <li>
                  <strong>Location: </strong>Sulaymanaya
                </li>
                <li>
                  <strong>Phone Number: </strong> 770 912 64 67
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="demanddiv">
        <p id="demand"> The Most Demand : </p>
        <div id="whatdev">
          <What
            title=" baby nest babay "
            cost="30$"
            image="./image/work6.jpg"
          />
          <What title="nest bed " cost="25$" image="./image/work7.jpg" />
          <What title="gray nest bed " cost="38$" image="./image/se.jpg" />
          <What title="pinky " cost="75$" image="./image/work3.jpg" />
        </div>
      </div>
      <section className="sectionynawHome">
        <h1>How to order ? ..</h1>
        <hr></hr>
        <div>
          <p className="paraghrafy">
            {" "}
            {/* <img src="./image/one.png" height="50px" /> */}
            first step : click on product page in navbar
          </p>
          <p className="paraghrafy">
            {" "}
            {/* <img src="./image/two.png" height="50px" /> */}
            second step : click on show more detaile in the product you want
          </p>
          <p className="paraghrafy">
            {" "}
            {/* <img src="./image/three.png" height="50px" /> */}
            third step : click on buy button
          </p>
          <p className="paraghrafy">
            {" "}
            {/* <img src="./image/four.png" height="50px" /> */}
            fourth step : in final step click on the (buy icon)
          </p>
        </div>
        <hr></hr>
      </section>

      <div id="pages">
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
          rel="stylesheet"
        />

        <div class="gallery">
          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="./image/work1.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <div class="overlay">
                {" "}
                <img src="./image/sale.png" width="100px" height="100px" />
              </div>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="./image/yanza.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Alex Perez"
                class="gallery__image"
              />
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="./image/work6.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <div class="overlay">
                {" "}
                <img src="./image/sale.png" width="100px" height="100px" />
              </div>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="./image/penj.jpg"
                width="300px"
                height="300px"
                class="gallery__image"
              />
              <div class="overlay">
                {" "}
                <img src="./image/sale.png" width="100px" height="100px" />
              </div>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="./image/wor2.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Ethan Haddox"
                class="gallery__image"
              />
            </figure>

            <figure class="gallery__thumb">
              <img
                src="./image/work3.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Amir Geshani"
                class="gallery__image"
              />{" "}
              <div class="overlay">
                {" "}
                <img src="./image/sale.png" width="100px" height="100px" />
              </div>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="./image/work6.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <div class="overlay">
                {" "}
                <img src="./image/sale.png" width="100px" height="100px" />
              </div>
            </figure>

            <figure class="gallery__thumb">
              <img
                src="./image/work5.jpg"
                width="300px"
                height="300px"
                alt="Portrait by Dima DallAcqua"
                class="gallery__image"
              />
            </figure>
          </div>
        </div>
      </div>

     
      <div id="app"></div>

      <FooterCom />
    </>
  );
}
