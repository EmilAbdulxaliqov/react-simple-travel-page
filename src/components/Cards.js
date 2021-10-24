import React from "react";
import "./Cards.css";
import CardsItem from "./CardsItem";

function Cards() {
  return (
    <div className="cards">
      <h1 className="">Check out theese EPIC Destinations</h1>
      <div class="cards__container">
        <div class="cards__wrapper">
          <ul class="cards__items">
            <CardsItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-9.jpg?raw=true"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
              alt="something"
            />
            <CardsItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-2.jpg?raw=true"
              text="Travel through the Islands of Bali in a Private Cruis"
              label="Luxury"
              path="/services"
              alt="something"
            />
          </ul>
          <ul class="cards__items">
            <CardsItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-3.jpg?raw=true"
              text="Set Sail in the Atlantic Ocean"
              label="Mystery"
              path="/services"
              alt="something"
            />
            <CardsItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-4.jpg?raw=true"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/services"
              alt="something"
            />
            <CardsItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-8.jpg?raw=true"
              text="Ride through the Sahara Desert on a guided camel tour "
              label="Adrenaline"
              path="/services"
              alt="something"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
