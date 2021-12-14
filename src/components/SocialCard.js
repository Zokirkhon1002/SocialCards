import React from "react";
import Locatioin from "./Locatioin";
import Phone from "./Phone";
import "./SCStyle.css";

function SocialCard({ userData }) {
  return (
    <div className="card">
      <div className="card__title">
        {userData.name.title} {userData.name.first} {userData.name.last}
      </div>
      <div className="card__body">
          <Locatioin location={userData.location} />
          <Phone type="Home" number={userData.phone} />
          <Phone type="Mobile" number={userData.cell} />
        <div className="card__image">
          <img src={userData.picture.medium} alt={userData.name.first} />
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
